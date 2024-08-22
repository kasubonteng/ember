using ember.Models;
using Microsoft.EntityFrameworkCore;

namespace ember.Data;

public class EmberContext : DbContext
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


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var categories = new Category[]
        {
            new Category { Id = 1, Name = "Featured", Description = "Browse our handpicked selection of bestsellers, showcasing the very best of Ember's design philosophy."},
            new Category { Id = 2, Name = "Living Room", Description = "Transform your living space with our curated collection of comfortable and stylish furniture."},
            new Category { Id = 3, Name = "Bedroom", Description = "Create your perfect sanctuary with our range of comfortable and elegant bedroom furniture."},
            new Category { Id = 4, Name = "Dining", Description = "Elevate your dining experience with our selection of elegant dining furniture and accessories."},
            new Category { Id = 5, Name = "Office", Description = "Design a productive and stylish workspace with our range of modern office furniture and accessories." }
        };

        modelBuilder.Entity<Category>().HasData(categories);

        var products = new Product[]
        {
            // Featured
            new Product
            {
                Id = 1,
                CategoryId = categories[0].Id,
                Name = "Sofa",
                Price = 799M,
                Description = "A luxurious sofa crafted with premium materials, offering unparalleled comfort and timeless elegance for your living space.",
                SKU = "SOFA-003",
                Stock = 20
            },
            new Product
            {
                Id = 2,
                CategoryId = categories[0].Id,
                Name = "Armchair",
                Price = 399M,
                Description = "An exquisitely designed armchair, blending sophistication and relaxation in perfect harmony",
                SKU = "ARM-CHA-001",
                Stock = 90
            },
            new Product
            {
                Id = 3,
                CategoryId = categories[0].Id,
                Name = "Coffee Table",
                Price = 199M,
                Description = "A chic and modern coffee table, the epitome of refined simplicity, perfect for elevating your living room décor.",
                SKU = "COF-TAB-006",
                Stock = 120
            },
            new Product
            {
                Id = 4,
                CategoryId = categories[0].Id,
                Name = "Dining Table",
                Price = 599M,
                Description = "A stunning dining table crafted from the finest materials, designed to be the centerpiece of your dining experience.",
                SKU = "DIN-TAB-001",
                Stock = 30
            },
            new Product
            {
                Id = 5,
                CategoryId = categories[0].Id,
                Name = "Bookshelf",
                Price = 349M,
                Description = "A sleek and modern bookshelf, perfect for showcasing your most prized possessions in style.",
                SKU = "BKS-003",
                Stock = 100
            },
            new Product
            {
                Id = 6,
                CategoryId = categories[0].Id,
                Name = "Floor Lamp",
                Price = 129M,
                Description = "An elegant floor lamp that brings a warm, inviting glow to any room, blending form and function flawlessly.",
                SKU = "FLR-121",
                Stock = 179
            },
            // Living Room
            new Product
            {
                Id = 7,
                CategoryId = categories[1].Id,
                Name = "Sectional Sofa",
                Price = 1299M,
                Description = "A grand sectional sofa that combines luxurious comfort with a contemporary design, perfect for family gatherings.",
                SKU = "SOF-001",
                Stock = 19
            },
            new Product
            {
                Id = 8,
                CategoryId = categories[1].Id,
                Name = "TV Stand",
                Price = 249M,
                Description = "A sleek and modern TV stand, designed to complement your entertainment space with elegance and style.",
                SKU = "TVS-011",
                Stock = 240
            },
            new Product
            {
                Id = 9,
                CategoryId = categories[1].Id,
                Name = "Side Table",
                Price = 99M,
                Description = "A minimalist side table, offering both style and practicality, perfect for any modern living room.",
                SKU = "SDT-101",
                Stock = 119
            },
            new Product
            {
                Id = 10,
                CategoryId = categories[1].Id,
                Name = "Ottoman",
                Price = 149M,
                Description = "A versatile ottoman, beautifully upholstered to enhance your living space with comfort and elegance.",
                SKU = "OTT-001",
                Stock = 109
            },
            new Product
            {
                Id = 11,
                CategoryId = categories[1].Id,
                Name = "Wall Art",
                Price = 79M,
                Description = "Exclusive wall art that adds a touch of sophistication and personality to your home.",
                SKU = "ART-021",
                Stock = 190
            },
            new Product
            {
                Id = 12,
                CategoryId = categories[1].Id,
                Name = "Area Rug",
                Price = 199M,
                Description = "A luxurious area rug, exquisitely crafted to provide comfort and style to your living space.",
                SKU = "RUG-001",
                Stock = 160
            },
            // Bedroom
            new Product
            {
                Id = 13,
                CategoryId = categories[2].Id,
                Name = "Bed Frame",
                Price = 599M,
                Description = "An elegant bed frame, meticulously crafted to provide a stylish and sturdy foundation for your bedroom retreat.",
                SKU = "BED-001",
                Stock = 29
            },
            new Product
            {
                Id = 14,
                CategoryId = categories[2].Id,
                Name = "Nightstand",
                Price = 129M,
                Description = "A refined nightstand, offering both functionality and a touch of luxury to your bedroom decor.",
                SKU = "NST-001",
                Stock = 109
            },
            new Product
            {
                Id = 15,
                CategoryId = categories[2].Id,
                Name = "Dresser",
                Price = 449M,
                Description = "A sophisticated dresser, providing ample storage space while adding a timeless elegance to your bedroom.",
                SKU = "DRS-001",
                Stock = 49
            },
            new Product
            {
                Id = 16,
                CategoryId = categories[2].Id,
                Name = "Wardrobe",
                Price = 699M,
                Description = "A luxurious wardrobe, designed to elegantly store your clothing and accessories with style and grace.",
                SKU = "WAD-001",
                Stock = 99
            },
            new Product
            {
                Id = 17,
                CategoryId = categories[2].Id,
                Name = "Vanity",
                Price = 299M,
                Description = "A chic vanity that combines beauty with practicality, perfect for creating a glamorous personal space.",
                SKU = "VAN-001",
                Stock = 69
            },
            new Product
            {
                Id = 18,
                CategoryId = categories[2].Id,
                Name = "Bedside Lamp",
                Price = 59M,
                Description = "A stylish bedside lamp that provides a warm and inviting ambiance to your bedroom retreat.",
                SKU = "BDL-001",
                Stock = 139
            },
            // Dining 
            new Product
            {
                Id = 19,
                CategoryId = categories[3].Id,
                Name = "Dining Chair",
                Price = 99M,
                Description = "A beautifully crafted dining chair, combining comfort with a touch of elegance for your dining experience.",
                SKU = "DIN-CHA-001",
                Stock = 199
            },
            new Product
            {
                Id = 20,
                CategoryId = categories[3].Id,
                Name = "Bar Stool",
                Price = 79M,
                Description = "A sleek bar stool, perfect for creating a stylish and comfortable seating arrangement in your home.",
                SKU = "BAR-STL-001",
                Stock = 149
            },
            new Product
            {
                Id = 21,
                CategoryId = categories[3].Id,
                Name = "Buffet",
                Price = 399M,
                Description = "A luxurious buffet, offering ample storage and a touch of sophistication to your dining space.",
                SKU = "BUF-001",
                Stock = 59
            },
            new Product
            {
                Id = 22,
                CategoryId = categories[3].Id,
                Name = "China Cabinet",
                Price = 599M,
                Description = "An exquisite china cabinet, crafted to elegantly display your finest dinnerware with timeless beauty.",
                SKU = "CHI-CAB-001",
                Stock = 39
            },
            new Product
            {
                Id = 23,
                CategoryId = categories[3].Id,
                Name = "Dining Bench",
                Price = 129M,
                Description = "A modern dining bench, designed to offer both comfort and style for your dining experience.",
                SKU = "DIN-BCH-001",
                Stock = 89
            },
            new Product
            {
                Id = 24,
                CategoryId = categories[3].Id,
                Name = "Dining Table",
                Price = 599M,
                Description = "A stunning dining table crafted from the finest materials, designed to be the centerpiece of your dining experience.",
                SKU = "DIN-TAB-001",
                Stock = 29
            },
            // Office
            new Product
            {
                Id = 25,
                CategoryId = categories[4].Id,
                Name = "Desk",
                Price = 299M,
                Description = "A sleek and modern desk, designed to provide a stylish and functional workspace for your home office.",
                SKU = "DSK-001",
                Stock = 99
            },
            new Product
            {
                Id = 26,
                CategoryId = categories[4].Id,
                Name = "Office Chair",
                Price = 199M,
                Description = "A comfortable and ergonomic office chair, designed to provide support and style for your workday.",
                SKU = "OFC-CHA-001",
                Stock = 199
            },
            new Product
            {
                Id = 27,
                CategoryId = categories[4].Id,
                Name = "Bookshelf",
                Price = 349M,
                Description = "A sleek and modern bookshelf, perfect for showcasing your most prized possessions in style.",
                SKU = "BKS-001",
                Stock = 79
            },
            new Product
            {
                Id = 28,
                CategoryId = categories[4].Id,
                Name = "File Cabinet",
                Price = 149M,
                Description = "A stylish file cabinet, designed to keep your documents organized and easily accessible.",
                SKU = "FIL-CAB-001",
                Stock = 129
            },
            new Product
            {
                Id = 29,
                CategoryId = categories[4].Id,
                Name = "Desk Lamp",
                Price = 59M,
                Description = "A modern desk lamp that provides focused task lighting, perfect for your home office or workspace.",
                SKU = "DSK-LMP-001",
                Stock = 159
            },
            new Product
            {
                Id = 30,
                CategoryId = categories[4].Id,
                Name = "Office Accessories",
                Price = 29M,
                Description = "Stylish and functional office accessories, designed to enhance your workspace with a touch of elegance.",
                SKU = "OFC-ACC-001",
                Stock = 199
            }
        };

        modelBuilder.Entity<Product>().HasData(products);

        var images = new ProductImage[]
{
    new ProductImage
    {
        Id = 1,
        ProductId = products[0].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/sofa.jpg",
        AltText = "Luxurious modern sofa in a stylish living room."
    },
    new ProductImage
    {
        Id = 2,
        ProductId = products[1].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/armchair.jpg",
        AltText = "Elegant armchair with sophisticated design."
    },
    new ProductImage
    {
        Id = 3,
        ProductId = products[2].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/coffee-table.jpg",
        AltText = "Chic and modern coffee table in a minimalist setting."
    },
    new ProductImage
    {
        Id = 4,
        ProductId = products[3].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-table.jpg",
        AltText = "Stylish dining table set for a cozy meal."
    },
    new ProductImage
    {
        Id = 5,
        ProductId = products[4].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bookshelf.jpg",
        AltText = "Modern bookshelf showcasing a collection of books."
    },
    new ProductImage
    {
        Id = 6,
        ProductId = products[5].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/floor-lamp.jpg",
        AltText = "Elegant floor lamp illuminating a cozy corner."
    },
    new ProductImage
    {
        Id = 7,
        ProductId = products[6].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/sectional-sofa.jpg",
        AltText = "Large sectional sofa in a modern living room."
    },
    new ProductImage
    {
        Id = 8,
        ProductId = products[7].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/tv-stand.jpg",
        AltText = "Sleek TV stand with a minimalist design."
    },
    new ProductImage
    {
        Id = 9,
        ProductId = products[8].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/side-table.jpg",
        AltText = "Minimalist side table next to a modern sofa."
    },
    new ProductImage
    {
        Id = 10,
        ProductId = products[9].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/ottoman.jpg",
        AltText = "Versatile ottoman with elegant upholstery."
    },
    new ProductImage
    {
        Id = 11,
        ProductId = products[10].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/wall-art.jpg",
        AltText = "Exclusive wall art enhancing a modern living space."
    },
    new ProductImage
    {
        Id = 12,
        ProductId = products[11].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/area-rug.jpg",
        AltText = "Luxurious area rug in a contemporary living room."
    },
    new ProductImage
    {
        Id = 13,
        ProductId = products[12].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bed-frame.jpg",
        AltText = "Elegant bed frame in a stylish bedroom."
    },
    new ProductImage
    {
        Id = 14,
        ProductId = products[13].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/nightstand.jpg",
        AltText = "Refined nightstand beside a cozy bed."
    },
    new ProductImage
    {
        Id = 15,
        ProductId = products[14].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dresser.jpg",
        AltText = "Sophisticated dresser in a modern bedroom."
    },
    new ProductImage
    {
        Id = 16,
        ProductId = products[15].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/wardrobe.jpg",
        AltText = "Luxurious wardrobe with ample storage space."
    },
    new ProductImage
    {
        Id = 17,
        ProductId = products[16].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/vanity.jpg",
        AltText = "Chic vanity table in a glamorous personal space."
    },
    new ProductImage
    {
        Id = 18,
        ProductId = products[17].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bedside-lamp.jpg",
        AltText = "Stylish bedside lamp creating a warm ambiance."
    },
    new ProductImage
    {
        Id = 19,
        ProductId = products[18].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-chair.jpg",
        AltText = "Beautifully crafted dining chair in a modern dining room."
    },
    new ProductImage
    {
        Id = 20,
        ProductId = products[19].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bar-stool.jpg",
        AltText = "Sleek bar stool in a stylish kitchen setting."
    },
    new ProductImage
    {
        Id = 21,
        ProductId = products[20].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/buffet.jpg",
        AltText = "Luxurious buffet in a modern dining space."
    },
    new ProductImage
    {
        Id = 22,
        ProductId = products[21].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/china-cabinet.jpg",
        AltText = "Elegant china cabinet showcasing fine dinnerware."
    },
    new ProductImage
    {
        Id = 23,
        ProductId = products[22].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-bench.jpg",
        AltText = "Modern dining bench in a cozy dining room."
    },
    new ProductImage
    {
        Id = 24,
        ProductId = products[23].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-table.jpg",
        AltText = "Stunning dining table set for a special occasion."
    },
    new ProductImage
    {
        Id = 25,
        ProductId = products[24].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-desk.jpg",
        AltText = "Sleek and functional office desk in a modern workspace."
    },
    new ProductImage
    {
        Id = 26,
        ProductId = products[25].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-chair.jpg",
        AltText = "Ergonomic office chair providing comfort and support."
    },
    new ProductImage
    {
        Id = 27,
        ProductId = products[26].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bookshelf.jpg",
        AltText = "Modern bookshelf organizing books and essentials."
    },
    new ProductImage
    {
        Id = 28,
        ProductId = products[27].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/file-cabinet.jpg",
        AltText = "Sleek file cabinet in a contemporary office setting."
    },
    new ProductImage
    {
        Id = 29,
        ProductId = products[28].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/desk-lamp.jpg",
        AltText = "Elegant desk lamp illuminating a modern workspace."
    },
    new ProductImage
    {
        Id = 30,
        ProductId = products[29].Id,
        ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-accessories.jpg",
        AltText = "Curated office accessories enhancing a luxury workspace."
    },
};

        modelBuilder.Entity<ProductImage>().HasData(images);

        var ratings = new Rating[]
        {
            new Rating { Id = 1, ProductId = products[0].Id, Value = 4 },
            new Rating { Id = 2, ProductId = products[0].Id, Value = 5 },
            new Rating { Id = 3, ProductId = products[1].Id, Value = 5 },
            new Rating { Id = 4, ProductId = products[1].Id, Value = 4 },
            new Rating { Id = 5, ProductId = products[2].Id, Value = 3 },
            new Rating { Id = 6, ProductId = products[2].Id, Value = 5 },
            new Rating { Id = 7, ProductId = products[3].Id, Value = 4 },
            new Rating { Id = 8, ProductId = products[3].Id, Value = 3 },
            new Rating { Id = 9, ProductId = products[4].Id, Value = 5 },
            new Rating { Id = 10, ProductId = products[4].Id, Value = 3 },
            new Rating { Id = 11, ProductId = products[5].Id, Value = 4 },
            new Rating { Id = 12, ProductId = products[5].Id, Value = 5 },
            new Rating { Id = 13, ProductId = products[6].Id, Value = 5 },
            new Rating { Id = 14, ProductId = products[6].Id, Value = 5 },
            new Rating { Id = 15, ProductId = products[7].Id, Value = 4 },
            new Rating { Id = 16, ProductId = products[7].Id, Value = 4 },
            new Rating { Id = 17, ProductId = products[8].Id, Value = 3 },
            new Rating { Id = 18, ProductId = products[8].Id, Value = 5 },
            new Rating { Id = 19, ProductId = products[9].Id, Value = 5 },
            new Rating { Id = 20, ProductId = products[9].Id, Value = 2 },
            new Rating { Id = 21, ProductId = products[10].Id, Value = 4 },
            new Rating { Id = 22, ProductId = products[10].Id, Value = 4 },
            new Rating { Id = 23, ProductId = products[11].Id, Value = 5 },
            new Rating { Id = 24, ProductId = products[11].Id, Value = 5 },
            new Rating { Id = 25, ProductId = products[12].Id, Value = 4 },
            new Rating { Id = 26, ProductId = products[12].Id, Value = 5 },
            new Rating { Id = 27, ProductId = products[13].Id, Value = 5 },
            new Rating { Id = 28, ProductId = products[14].Id, Value = 4 },
            new Rating { Id = 29, ProductId = products[15].Id, Value = 3 },
            new Rating { Id = 30, ProductId = products[16].Id, Value = 5 },
            new Rating { Id = 31, ProductId = products[17].Id, Value = 4 },
            new Rating { Id = 32, ProductId = products[18].Id, Value = 5 },
            new Rating { Id = 33, ProductId = products[19].Id, Value = 4 },
            new Rating { Id = 34, ProductId = products[20].Id, Value = 3 },
            new Rating { Id = 35, ProductId = products[21].Id, Value = 5 },
            new Rating { Id = 36, ProductId = products[22].Id, Value = 4 },
            new Rating { Id = 37, ProductId = products[23].Id, Value = 5 },
            new Rating { Id = 38, ProductId = products[24].Id, Value = 4 },
            new Rating { Id = 39, ProductId = products[25].Id, Value = 5 },
            new Rating { Id = 40, ProductId = products[26].Id, Value = 4 },
            new Rating { Id = 41, ProductId = products[27].Id, Value = 3 },
            new Rating { Id = 42, ProductId = products[28].Id, Value = 5 },
            new Rating { Id = 43, ProductId = products[29].Id, Value = 4 }
        };

        modelBuilder.Entity<Rating>().HasData(ratings);

        var orders = new Order[]
        {
            new Order
            {
                Id = 1,
                OrderDate = DateTime.UtcNow.AddDays(-10),
                CustomerName = "John Doe",
                CustomerEmail = "john.doe@example.com",
                TotalAmount = 1399.98M
            },
            new Order
            {
                Id = 2,
                OrderDate = DateTime.UtcNow.AddDays(-5),
                CustomerName = "Jane Smith",
                CustomerEmail = "jane.smith@example.com",
                TotalAmount = 1099.98M
            }
        };

        modelBuilder.Entity<Order>().HasData(orders);

        var orderItems = new OrderItem[]
        {
            new OrderItem
            {
                Id = 1,
                OrderId = orders[0].Id,
                ProductId = products[0].Id,
                Quantity = 1,
                Price = products[0].Price
            },
            new OrderItem
            {
                Id = 2,
                OrderId = orders[0].Id,
                ProductId = products[1].Id,
                Quantity = 1,
                Price = products[1].Price
            },
            new OrderItem
            {
                Id = 3,
                OrderId = orders[1].Id,
                ProductId = products[1].Id,
                Quantity = 1,
                Price = products[1].Price
            },
            new OrderItem
            {
                Id = 4,
                OrderId = orders[1].Id,
                ProductId = products[2].Id,
                Quantity = 1,
                Price = products[2].Price
            }
        };

        modelBuilder.Entity<OrderItem>().HasData(orderItems);

        base.OnModelCreating(modelBuilder);
    }
}