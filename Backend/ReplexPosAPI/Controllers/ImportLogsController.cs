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
    public class ImportLogsController : ControllerBase
    {
        private readonly ReplexDbContext _context;

        public ImportLogsController(ReplexDbContext context)
        {
            _context = context;
    }

    // GET: api/ImportLogs
    [EnableCors("AllowOrigin")]
    [HttpGet]
        public async Task<ActionResult<IEnumerable<ImportLog>>> GetImportLog()
        {
            return await _context.ImportLog.ToListAsync();
        }

        // GET: api/ImportLogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ImportLog>> GetImportLog(int id)
        {
            var importLog = await _context.ImportLog.FindAsync(id);

            if (importLog == null)
            {
                return NotFound();
            }

            return importLog;
        }

        // PUT: api/ImportLogs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutImportLog(int id, ImportLog importLog)
        {
            if (id != importLog.ImportId)
            {
                return BadRequest();
            }

            _context.Entry(importLog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImportLogExists(id))
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

        // POST: api/ImportLogs
        [HttpPost]
        public async Task<ActionResult<ImportLog>> PostImportLog(ImportLog importLog)
        {
            _context.ImportLog.Add(importLog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetImportLog", new { id = importLog.ImportId }, importLog);
        }

        // DELETE: api/ImportLogs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ImportLog>> DeleteImportLog(int id)
        {
            var importLog = await _context.ImportLog.FindAsync(id);
            if (importLog == null)
            {
                return NotFound();
            }

            _context.ImportLog.Remove(importLog);
            await _context.SaveChangesAsync();

            return importLog;
        }

        private bool ImportLogExists(int id)
        {
            return _context.ImportLog.Any(e => e.ImportId == id);
        }
    }
}
