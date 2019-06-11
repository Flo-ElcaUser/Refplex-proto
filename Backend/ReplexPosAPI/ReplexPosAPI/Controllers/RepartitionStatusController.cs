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
    public class RepartitionStatusController : ControllerBase
    {
        private readonly ReplexDbContext _context;

        public RepartitionStatusController(ReplexDbContext context)
        {
            _context = context;
        }

        // GET: api/RepartitionStatus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RepartitionStatus>>> GetRepartitionStatus()
        {
            return await _context.RepartitionStatus.ToListAsync();
        }

        // GET: api/RepartitionStatus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RepartitionStatus>> GetRepartitionStatus(int id)
        {
            var repartitionStatus = await _context.RepartitionStatus.FindAsync(id);

            if (repartitionStatus == null)
            {
                return NotFound();
            }

            return repartitionStatus;
        }

        // PUT: api/RepartitionStatus/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRepartitionStatus(int id, RepartitionStatus repartitionStatus)
        {
            if (id != repartitionStatus.RepartitionStatusId)
            {
                return BadRequest();
            }

            _context.Entry(repartitionStatus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RepartitionStatusExists(id))
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

        // POST: api/RepartitionStatus
        [HttpPost]
        public async Task<ActionResult<RepartitionStatus>> PostRepartitionStatus(RepartitionStatus repartitionStatus)
        {
            _context.RepartitionStatus.Add(repartitionStatus);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRepartitionStatus", new { id = repartitionStatus.RepartitionStatusId }, repartitionStatus);
        }

        // DELETE: api/RepartitionStatus/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RepartitionStatus>> DeleteRepartitionStatus(int id)
        {
            var repartitionStatus = await _context.RepartitionStatus.FindAsync(id);
            if (repartitionStatus == null)
            {
                return NotFound();
            }

            _context.RepartitionStatus.Remove(repartitionStatus);
            await _context.SaveChangesAsync();

            return repartitionStatus;
        }

        private bool RepartitionStatusExists(int id)
        {
            return _context.RepartitionStatus.Any(e => e.RepartitionStatusId == id);
        }
    }
}
