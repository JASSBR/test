using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using test.Data;
using test.Models;

namespace test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobSheetsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public JobSheetsController(AppDbContext context)
        {
            _context = context;
        }


        // GET: api/jobSheets/5
        [HttpGet("{id}/{jobId}")]
        public async Task<ActionResult<Project>> GetProject(int id,int jobId)
        {
            if (_context.Projects == null)
            {
                return NotFound();
            }
            var jobSheet = _context.Projects.Where(project => project.Id == id)
                .Include(project => project.Jobs).ThenInclude(job => job.Sheets)
                .Where(p => p.Jobs.Any( j => j.Id == jobId))
                .FirstOrDefault();

            if (jobSheet == null)
            {
                return NotFound();
            }

            return jobSheet;
        }
    }
}
