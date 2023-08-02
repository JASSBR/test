using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Plugins;
using test.Data;
using test.Models;

namespace test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST api/users
        [HttpPost]
        public ActionResult<User> Post([FromBody] User user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Users.Add(user);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);
        }

        // PUT api/users/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] User updatedUser)
        {
            var user = _context.Users.Find(id);

            if (user == null)
                return NotFound();

            user.Name = updatedUser.Name;
            user.Email = updatedUser.Email;
            

            _context.SaveChanges();

            return NoContent();
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var user = _context.Users.Find(id);

            if (user == null)
                return NotFound();

            _context.Users.Remove(user);
            _context.SaveChanges();

            return NoContent();
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User request)
        {
            var user = _context.Users.FirstOrDefault(u => u.Name == request.Name && u.Password == request.Password);

            if (user == null)
            {
                return Unauthorized();
            }
            
            return Ok(new { UserId = user.Id });
        }

    }
}
