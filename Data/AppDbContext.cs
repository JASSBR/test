using test.Models;

namespace test.Data
{
    using Microsoft.EntityFrameworkCore;

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Client> Clients { get; set; }

        public DbSet<Job> Jobs { get; set; }
        public DbSet<Lines> Lines { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Sheet> Sheets { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Circle> Circles { get; set; }


    }
}
