using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Replex.Domain.Models;
using Replex.WebApp.Models;

namespace Replex.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MonthlyStatusController : ControllerBase
    {
        private readonly ReplexDbContext _context;

        public MonthlyStatusController(ReplexDbContext context)
        {
            _context = context;
        }

        // GET: api/MonthlyStatus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MonthlyStatus>>> GetMonthlyStatus()
        {
            return await _context.MonthlyStatus.ToListAsync();
        }

        // GET: api/MonthlyStatus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MonthlyStatus>> GetMonthlyStatus(int id)
        {
            var monthlyStatus = await _context.MonthlyStatus.FindAsync(id);

            if (monthlyStatus == null)
            {
                return NotFound();
            }

            return monthlyStatus;
        }

        // PUT: api/MonthlyStatus/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMonthlyStatus(int id, MonthlyStatus monthlyStatus)
        {
            if (id != monthlyStatus.MonthlyStatusId)
            {
                return BadRequest();
            }

            _context.Entry(monthlyStatus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MonthlyStatusExists(id))
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

        // POST: api/MonthlyStatus
        [HttpPost]
        public async Task<ActionResult<MonthlyStatus>> PostMonthlyStatus(MonthlyStatus monthlyStatus)
        {
            _context.MonthlyStatus.Add(monthlyStatus);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMonthlyStatus", new { id = monthlyStatus.MonthlyStatusId }, monthlyStatus);
        }

        // DELETE: api/MonthlyStatus/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MonthlyStatus>> DeleteMonthlyStatus(int id)
        {
            var monthlyStatus = await _context.MonthlyStatus.FindAsync(id);
            if (monthlyStatus == null)
            {
                return NotFound();
            }

            _context.MonthlyStatus.Remove(monthlyStatus);
            await _context.SaveChangesAsync();

            return monthlyStatus;
        }

        private bool MonthlyStatusExists(int id)
        {
            return _context.MonthlyStatus.Any(e => e.MonthlyStatusId == id);
        }
    }
}
