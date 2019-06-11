using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Replex.Domain.Models;
using ReplexPosAPI.Models;

namespace ReplexPosAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketTypesController : ControllerBase
    {
        private readonly ReplexDbContext _context;

        public TicketTypesController(ReplexDbContext context)
        {
            _context = context;
        }

        // GET: api/TicketTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TicketType>>> GetTicketType()
        {
            return await _context.TicketType.ToListAsync();
        }

        // GET: api/TicketTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TicketType>> GetTicketType(int id)
        {
            var ticketType = await _context.TicketType.FindAsync(id);

            if (ticketType == null)
            {
                return NotFound();
            }

            return ticketType;
        }

        // PUT: api/TicketTypes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTicketType(int id, TicketType ticketType)
        {
            if (id != ticketType.TicketTypeId)
            {
                return BadRequest();
            }

            _context.Entry(ticketType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TicketTypeExists(id))
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

        // POST: api/TicketTypes
        [HttpPost]
        public async Task<ActionResult<TicketType>> PostTicketType(TicketType ticketType)
        {
            _context.TicketType.Add(ticketType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTicketType", new { id = ticketType.TicketTypeId }, ticketType);
        }

        // DELETE: api/TicketTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TicketType>> DeleteTicketType(int id)
        {
            var ticketType = await _context.TicketType.FindAsync(id);
            if (ticketType == null)
            {
                return NotFound();
            }

            _context.TicketType.Remove(ticketType);
            await _context.SaveChangesAsync();

            return ticketType;
        }

        private bool TicketTypeExists(int id)
        {
            return _context.TicketType.Any(e => e.TicketTypeId == id);
        }
    }
}
