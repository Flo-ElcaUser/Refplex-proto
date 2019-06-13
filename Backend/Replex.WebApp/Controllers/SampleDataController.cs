using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Newtonsoft.Json;

namespace Replex.Presentation.Controllers
{
  [Route("api/[controller]")]
  public class SampleDataController : Controller
  {
    private static string[] Summaries = new[]
    {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

    [HttpGet("[action]")]
    public IEnumerable<WeatherForecast> WeatherForecasts()
    {
      var rng = new Random();
      return Enumerable.Range(1, 5).Select(index => new WeatherForecast
      {
        DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
        TemperatureC = rng.Next(-20, 55),
        Summary = Summaries[rng.Next(Summaries.Length)]
      });
    }

    public class WeatherForecast
    {
      public string DateFormatted { get; set; }
      public int TemperatureC { get; set; }
      public string Summary { get; set; }

      public int TemperatureF
      {
        get
        {
          return 32 + (int)(TemperatureC / 0.5556);
        }
      }
    }

    [HttpPost("[Action]")]
    async public Task<IActionResult> SaveFile(IFormFile files)
    {
      try
      {
        var connectionString = "DefaultEndpointsProtocol=https;AccountName=etmrdatalake01;AccountKey=kAjPNbVTn8hqwJoPEiHS0KIM/mNyoIs2rH8O72JMj84nMRq8JYGwTolXYYtFmT92yy8syUNTMOOy4m2s2TXv5g==;EndpointSuffix=core.windows.net";

        CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);

        CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();

        CloudBlobContainer container = blobClient.GetContainerReference("raw");

        string newFileName = "NOVA_" + DateTime.Now.ToString("MM-dd-yyyy-H:mm") + ".csv";

        CloudBlockBlob blockBlob = container.GetBlockBlobReference(newFileName);

        if (!await blockBlob.ExistsAsync())
        {
          CloudBlockBlob blob = container.GetBlockBlobReference(files.FileName);

          if (await blob.ExistsAsync())
          {
            await blockBlob.StartCopyAsync(blob);
            await blob.DeleteIfExistsAsync();
          }
        }

        using (var fileStream = files.OpenReadStream())
        {
          await blockBlob.UploadFromStreamAsync(fileStream);
        }

        var data = new {
        importedRows = 0,
        importDate = DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss"),
        importType = newFileName,
        error = 0,
        errorMessage = "",
        source = "Import",
        status = "To Create"
      };

        var json = JsonConvert.SerializeObject(data);
        var stringContent = new StringContent(json, UnicodeEncoding.UTF8, "application/json");


        using (var client = new HttpClient())
        {
          client.BaseAddress = new Uri("http://localhost:55575/api/");
          client.DefaultRequestHeaders.Accept.Clear();
          client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
          var response = client.PostAsync("ImportLogs", stringContent).Result;
          if (response.IsSuccessStatusCode)
          {
            string responseString = response.Content.ReadAsStringAsync().Result;
          }
        }

        return Json(new
        {
          name = blockBlob.Name,
          uri = blockBlob.Uri,
          size = blockBlob.Properties.Length
        });

      }
      catch (Exception)
      {
        return null;
      }
    }
  }
}
