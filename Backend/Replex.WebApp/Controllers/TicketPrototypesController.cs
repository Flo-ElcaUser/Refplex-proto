using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Replex.Domain.Models;
using Replex.WebApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Replex.WebApp.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TicketPrototypesController : ControllerBase
  {
    private readonly ReplexDbContext _context;

    public TicketPrototypesController(ReplexDbContext context)
    {
      _context = context;
    }

    // GET: api/TicketPrototypes
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TicketPrototype>>> GetTicketPrototype()
    {
      return await _context.TicketPrototype.OrderByDescending(i => i.TicketProtoTypeId).ToListAsync();
    }

    // GET: api/TicketPrototypes/5
    [HttpGet("{id}")]
    public async Task<ActionResult<TicketPrototype>> GetTicketPrototype(int id)
    {
      var ticketPrototype = await _context.TicketPrototype.FindAsync(id);

      if (ticketPrototype == null)
      {
        return NotFound();
      }

      return ticketPrototype;
    }

    // GET: api/TicketPrototypes/SNCF/ToCreate
    [HttpGet("{distributor}/{status}")]
    public async Task<ActionResult<TicketPrototype>> GetTicketPrototype(string distributor, string status)
    {
      var ticketPrototype = await _context.TicketPrototype.Where(x => x.DistributorName == distributor && x.Status == status).ToListAsync();

      if (ticketPrototype == null)
      {
        return NotFound();
      }

      return CreatedAtAction("GetTicketPrototype", new { id = ticketPrototype }, ticketPrototype);
    }


    // GET: api/TicketPrototypes/SNCF/ToCreate/AddedDate
    [HttpGet("{distributor}/{status}/{addeddate}")]
    public async Task<ActionResult<TicketPrototype>> GetTicketPrototype(string distributor, string status, int addeddate)
    {
      var ticketPrototype = await _context.TicketPrototype.Where(x => x.DistributorName == distributor && x.Status == status && x.AddedDate.Month == addeddate).ToListAsync();

      if (ticketPrototype == null)
      {
        return NotFound();
      }

      return CreatedAtAction("GetTicketPrototype", new { id = ticketPrototype }, ticketPrototype);
    }

    // PUT: api/TicketPrototypes/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTicketPrototype(int id, TicketPrototype ticketPrototype)
    {
      if (id != ticketPrototype.TicketProtoTypeId)
      {
        return BadRequest();
      }

      _context.Entry(ticketPrototype).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!TicketPrototypeExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/TicketPrototypes
    [HttpPost]
    public async Task<ActionResult<TicketPrototype>> PostTicketPrototype([FromBody]List<TicketPrototype> ticketPrototype)
    {
      foreach (var i in ticketPrototype)
      {
        _context.TicketPrototype.Add(i);
        await _context.SaveChangesAsync();
      }

      return CreatedAtAction("GetTicketPrototype", new { id = ticketPrototype }, ticketPrototype);
    }

    // DELETE: api/TicketPrototypes/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<TicketPrototype>> DeleteTicketPrototype(int id)
    {
      var ticketPrototype = await _context.TicketPrototype.FindAsync(id);
      if (ticketPrototype == null)
      {
        return NotFound();
      }

      _context.TicketPrototype.Remove(ticketPrototype);
      await _context.SaveChangesAsync();

      return ticketPrototype;
    }

    private bool TicketPrototypeExists(int id)
    {
      return _context.TicketPrototype.Any(e => e.TicketProtoTypeId == id);
    }
  }
}
