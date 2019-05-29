
namespace Replex.Domain.Models
{
  public class ImportError
  {
    public virtual int ErrorId { get; set; }
    public virtual int? ImportId { get; set; }
    public virtual string ErrorDescription { get; set; }
    public virtual ImportLog Import { get; set; }
  }

}
