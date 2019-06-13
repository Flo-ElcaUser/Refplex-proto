using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReplexPosAPI.Models;

namespace ReplexPosAPI.Controllers
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
            return await _context.TicketPrototype.ToListAsync();
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

    // PUT: api/TicketPrototypes/5
        [EnableCors("AllowOrigin")]
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
        public async Task<ActionResult<TicketPrototype>> PostTicketPrototype(TicketPrototype ticketPrototype)
        {
            _context.TicketPrototype.Add(ticketPrototype);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTicketPrototype", new { id = ticketPrototype.TicketProtoTypeId }, ticketPrototype);
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
