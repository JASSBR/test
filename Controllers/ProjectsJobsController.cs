using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using test.Data;
using test.Models;

namespace test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsJobsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProjectsJobsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ProjectsJobs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
          if (_context.Projects == null)
          {
              return NotFound();
          }
            var project =   _context.Projects.Where(project => project.Id == id).Include(project => project.Jobs).FirstOrDefault(); ;

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }
        
    }
}
