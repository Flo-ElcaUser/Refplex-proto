using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Replex.Domain.Models;

namespace Replex.WebApp.Models
{
    public class ReplexDbContext : DbContext
    {
        public ReplexDbContext(DbContextOptions<ReplexDbContext> options)
            : base(options)
        {
        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{           

        //    base.OnModelCreating(modelBuilder);
        //}      

        public DbSet<Replex.Domain.Models.Ticket> Ticket { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{           

        //    base.OnModelCreating(modelBuilder);
        //}      

        public DbSet<Replex.Domain.Models.Category> Category { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{           

        //    base.OnModelCreating(modelBuilder);
        //}      

        public DbSet<Replex.Domain.Models.Channel> Channel { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{           

        //    base.OnModelCreating(modelBuilder);
        //}      

        public DbSet<Replex.Domain.Models.Distributor> Distributor { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{           

        //    base.OnModelCreating(modelBuilder);
        //}      

        public DbSet<Replex.Domain.Models.Product> Product { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{           

        //    base.OnModelCreating(modelBuilder);
        //}      

        public DbSet<Replex.Domain.Models.RepartitionStatus> RepartitionStatus { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{           

        //    base.OnModelCreating(modelBuilder);
        //}      

        public DbSet<Replex.Domain.Models.TicketType> TicketType { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{           

        //    base.OnModelCreating(modelBuilder);
        //}      

        public DbSet<Replex.Domain.Models.TicketPrototype> TicketPrototype { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{           

        //    base.OnModelCreating(modelBuilder);
        //}      

        public DbSet<Replex.Domain.Models.ImportLog> ImportLog { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{           

        //    base.OnModelCreating(modelBuilder);
        //}      

        public DbSet<Replex.Domain.Models.MonthlyStatus> MonthlyStatus { get; set; }
    }
//#pragma warning restore CS1591
}
