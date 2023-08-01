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
    public class CircleController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CircleController(AppDbContext context)
        {
            _context = context;
        }



        // GET: api/Circle/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Circle>> GetCircle(int id)
        {
          if (_context.Circles == null)
          {
              return NotFound();
          }
            var circle = await _context.Circles.FindAsync(id);

            if (circle == null)
            {
                return NotFound();
            }

            return circle;
        }

        [HttpGet("{id}")]
        public ActionResult<CircleProperties> Get(int id)
        {
            var circle = new Circle { Id = id, Radius = 5.0 };
            var circleProperties = CalculateCircleProperties(circle);

            return Ok(circleProperties);
        }

        private CircleProperties CalculateCircleProperties(Circle circle)
        {
            var diameter = 2 * circle.Radius;
            var circumference = 2 * Math.PI * circle.Radius;
            var area = Math.PI * circle.Radius * circle.Radius;

            return new CircleProperties
            {
                Diameter = diameter,
                Circumference = circumference,
                Area = area
            };
        }


    }

    public class CircleProperties
    {
        public double Diameter { get; set; }
        public double Circumference { get; set; }
        public double Area { get; set; }
    }
}
