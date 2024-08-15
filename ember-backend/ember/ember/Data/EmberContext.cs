using ember.Models;
using Microsoft.EntityFrameworkCore;

namespace ember.Data;

public class EmberContext: DbContext
{
    public EmberContext(DbContextOptions<EmberContext> options) : base(options)
    {
        
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Rating> Ratings { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }
    public DbSet<ProductImage> Images { get; set; } 
}