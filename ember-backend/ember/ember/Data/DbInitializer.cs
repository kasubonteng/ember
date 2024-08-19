using ember.Models;

namespace ember.Data;

public static class DbInitializer
{
    public static void Initialize(EmberContext context)
    {
        context.Database.EnsureCreated();

        if (context.Products.Any())
        {
            return;
        }

        var categories = new Category[]
        {
            new Category { Name = "Featured" },
            new Category { Name = "Living Room" },
            new Category { Name = "Bedroom" },
            new Category { Name = "Dining" },
            new Category { Name = "Office" }
        };

        context.Categories.AddRange(categories);
        context.SaveChangesAsync();

        var products = new Product[]
        {
            // Featured
            new Product
            {
                CategoryId = categories[0].Id,
                Name = "Sofa",
                Price = 799M,
                Description = "",
                SKU = "SOFA-003",
                Stock = 20
            },
            new Product
            {
                CategoryId = categories[0].Id,
                Name = "Armchair",
                Price = 399M,
                Description = "",
                SKU = "ARM-CHA-001",
                Stock = 90
            },
            new Product
            {
                CategoryId = categories[0].Id,
                Name = "Coffee Table",
                Price = 199M,
                Description = "",
                SKU = "COF-TAB-006",
                Stock = 120
            },
            new Product
            {
                CategoryId = categories[0].Id,
                Name = "Dining Table",
                Price = 599M,
                Description = "",
                SKU = "DIN-TAB-001",
                Stock = 30
            },
            new Product
            {
                CategoryId = categories[0].Id,
                Name = "Bookshelf",
                Price = 349M,
                Description = "",
                SKU = "BKS-003",
                Stock = 100
            },
            new Product
            {
                CategoryId = categories[0].Id,
                Name = "Floor Lamp",
                Price = 129M,
                Description = "",
                SKU = "FLR-121",
                Stock = 179
            },
            // Living Room
            new Product
            {
                CategoryId = categories[1].Id,
                Name = "Sectional Sofa",
                Price = 1299M,
                Description = "",
                SKU = "SOF-001",
                Stock = 19
            },
            new Product
            {
                CategoryId = categories[1].Id,
                Name = "TV Stand",
                Price = 249M,
                Description = "",
                SKU = "TVS-011",
                Stock = 240
            },
            new Product
            {
                CategoryId = categories[1].Id,
                Name = "Side Table",
                Price = 99M,
                Description = "",
                SKU = "SDT-101",
                Stock = 119
            },
            new Product
            {
                CategoryId = categories[1].Id,
                Name = "Ottoman",
                Price = 149M,
                Description = "",
                SKU = "OTT-001",
                Stock = 109
            },
            new Product
            {
                CategoryId = categories[1].Id,
                Name = "Wall Art",
                Price = 79M,
                Description = "",
                SKU = "ART-021",
                Stock = 190
            },
            new Product
            {
                CategoryId = categories[1].Id,
                Name = "Area Rug",
                Price = 199M,
                Description = "",
                SKU = "RUG-001",
                Stock = 160
            },
            // Bedroom
            new Product
            {
                CategoryId = categories[2].Id,
                Name = "Bed Frame",
                Price = 599M,
                Description = "",
                SKU = "BED-001",
                Stock = 29
            },
            new Product
            {
                CategoryId = categories[2].Id,
                Name = "Nightstand",
                Price = 129M,
                Description = "",
                SKU = "NST-001",
                Stock = 109
            },
            new Product
            {
                CategoryId = categories[2].Id,
                Name = "Dresser",
                Price = 449M,
                Description = "",
                SKU = "DRS-001",
                Stock = 49
            },
            new Product
            {
                CategoryId = categories[2].Id,
                Name = "Wardrobe",
                Price = 699M,
                Description = "",
                SKU = "WAD-001",
                Stock = 99
            },
            new Product
            {
                CategoryId = categories[2].Id,
                Name = "Vanity",
                Price = 299M,
                Description = "",
                SKU = "VAN-001",
                Stock = 69
            },
            new Product
            {
                CategoryId = categories[2].Id,
                Name = "Bedside Lamp",
                Price = 59M,
                Description = "",
                SKU = "BDL-001",
                Stock = 139
            },
            // Dining 
            new Product
            {
                CategoryId = categories[3].Id,
                Name = "Dining Chair",
                Price = 99M,
                Description = "",
                SKU = "DIN-CHA-001",
                Stock = 199
            },
            new Product
            {
                CategoryId = categories[3].Id,
                Name = "Bar Stool",
                Price = 79M,
                Description = "",
                SKU = "BAR-STL-001",
                Stock = 149
            },
            new Product
            {
                CategoryId = categories[3].Id,
                Name = "Buffet",
                Price = 399M,
                Description = "",
                SKU = "BUF-001",
                Stock = 59
            },
            new Product
            {
                CategoryId = categories[3].Id,
                Name = "China Cabinet",
                Price = 599M,
                Description = "",
                SKU = "CHI-CAB-001",
                Stock = 39
            },
            new Product
            {
                CategoryId = categories[3].Id,
                Name = "Dining Bench",
                Price = 129M,
                Description = "",
                SKU = "DIN-BCH-001",
                Stock = 89
            },
            new Product
            {
                CategoryId = categories[3].Id,
                Name = "Dining Table",
                Price = 599M,
                Description = "",
                SKU = "DIN-TAB-001",
                Stock = 29
            },
            // Office
            new Product
            {
                CategoryId = categories[4].Id,
                Name = "Desk",
                Price = 299M,
                Description = "",
                SKU = "DSK-001",
                Stock = 99
            },
            new Product
            {
                CategoryId = categories[4].Id,
                Name = "Office Chair",
                Price = 199M,
                Description = "",
                SKU = "OFC-CHA-001",
                Stock = 199
            },
            new Product
            {
                CategoryId = categories[4].Id,
                Name = "Bookshelf",
                Price = 349M,
                Description = "",
                SKU = "BKS-001",
                Stock = 79
            },
            new Product
            {
                CategoryId = categories[4].Id,
                Name = "File Cabinet",
                Price = 149M,
                Description = "",
                SKU = "FIL-CAB-001",
                Stock = 129
            },
            new Product
            {
                CategoryId = categories[4].Id,
                Name = "Desk Lamp",
                Price = 59M,
                Description = "",
                SKU = "DSK-LMP-001",
                Stock = 159
            },
            new Product
            {
                CategoryId = categories[4].Id,
                Name = "Office Accessories",
                Price = 29M,
                Description = "",
                SKU = "OFC-ACC-001",
                Stock = 199
            }
        };

        context.Products.AddRange(products);
        context.SaveChanges();

        var images = new ProductImage[]
        {
            new ProductImage { ProductId = products[0].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/sofa.jpg" },
            new ProductImage { ProductId = products[1].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/armchair.jpg" },
            new ProductImage { ProductId = products[2].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/coffee-table.jpg" },
            new ProductImage { ProductId = products[3].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-table.jpg" },
            new ProductImage { ProductId = products[4].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bookshelf.jpg" },
            new ProductImage { ProductId = products[5].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/floor-lamp.jpg" },
            new ProductImage { ProductId = products[6].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/sectional-sofa.jpg" },
            new ProductImage { ProductId = products[7].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/tv-stand.jpg" },
            new ProductImage { ProductId = products[8].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/side-table.jpg" },
            new ProductImage { ProductId = products[9].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/ottoman.jpg" },
            new ProductImage { ProductId = products[10].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/wall-art.jpg" },
            new ProductImage { ProductId = products[11].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/area-rug.jpg" },
            new ProductImage { ProductId = products[12].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bed-frame.jpg" },
            new ProductImage { ProductId = products[13].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/nightstand.jpg" },
            new ProductImage { ProductId = products[14].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dresser.jpg" },
            new ProductImage { ProductId = products[15].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/wardrobe.jpg" },
            new ProductImage { ProductId = products[16].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/vanity.jpg" },
            new ProductImage { ProductId = products[17].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bedside-lamp.jpg" },
            new ProductImage { ProductId = products[18].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-chair.jpg" },
            new ProductImage { ProductId = products[19].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bar-stool.jpg" },
            new ProductImage { ProductId = products[20].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/buffet.jpg" },
            new ProductImage { ProductId = products[21].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/china-cabinet.jpg" },
            new ProductImage { ProductId = products[22].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-bench.jpg" },
            new ProductImage { ProductId = products[23].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/dining-table.jpg" },
            new ProductImage { ProductId = products[24].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-desk.jpg" },
            new ProductImage { ProductId = products[25].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-chair.jpg" },
            new ProductImage { ProductId = products[26].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/bookshelf.jpg" },
            new ProductImage { ProductId = products[27].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/file-cabinet.jpg" },
            new ProductImage { ProductId = products[28].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/desk-lamp.jpg" },
            new ProductImage { ProductId = products[29].Id, ImageUrl = "https://ember-kasubonteng.s3.eu-west-2.amazonaws.com/office-accessories.jpg" },
        };

        context.Images.AddRange(images);
        context.SaveChanges();

        var ratings = new Rating[]
        {
            new Rating { ProductId = products[0].Id, Value = 4 },
            new Rating { ProductId = products[0].Id, Value = 5 },
            new Rating { ProductId = products[1].Id, Value = 5 },
            new Rating { ProductId = products[1].Id, Value = 4 },
            new Rating { ProductId = products[2].Id, Value = 3 },
            new Rating { ProductId = products[2].Id, Value = 5 },
            new Rating { ProductId = products[3].Id, Value = 4 },
            new Rating { ProductId = products[3].Id, Value = 3 },
            new Rating { ProductId = products[4].Id, Value = 5 },
            new Rating { ProductId = products[4].Id, Value = 3 },
            new Rating { ProductId = products[5].Id, Value = 4 },
            new Rating { ProductId = products[5].Id, Value = 5 },
            new Rating { ProductId = products[6].Id, Value = 5 },
            new Rating { ProductId = products[6].Id, Value = 5 },
            new Rating { ProductId = products[7].Id, Value = 4 },
            new Rating { ProductId = products[7].Id, Value = 4 },
            new Rating { ProductId = products[8].Id, Value = 3 },
            new Rating { ProductId = products[8].Id, Value = 5 },
            new Rating { ProductId = products[9].Id, Value = 5 },
            new Rating { ProductId = products[9].Id, Value = 2 },
            new Rating { ProductId = products[10].Id, Value = 4 },
            new Rating { ProductId = products[10].Id, Value = 4 },
            new Rating { ProductId = products[11].Id, Value = 5 },
            new Rating { ProductId = products[11].Id, Value = 5 },
            new Rating { ProductId = products[12].Id, Value = 4 },
            new Rating { ProductId = products[12].Id, Value = 5 },
            new Rating { ProductId = products[13].Id, Value = 5 },
            new Rating { ProductId = products[14].Id, Value = 4 },
            new Rating { ProductId = products[15].Id, Value = 3 },
            new Rating { ProductId = products[16].Id, Value = 5 },
            new Rating { ProductId = products[17].Id, Value = 4 },
            new Rating { ProductId = products[18].Id, Value = 5 },
            new Rating { ProductId = products[19].Id, Value = 4 },
            new Rating { ProductId = products[20].Id, Value = 3 },
            new Rating { ProductId = products[21].Id, Value = 5 },
            new Rating { ProductId = products[22].Id, Value = 4 },
            new Rating { ProductId = products[23].Id, Value = 5 },
            new Rating { ProductId = products[24].Id, Value = 4 },
            new Rating { ProductId = products[25].Id, Value = 5 },
            new Rating { ProductId = products[26].Id, Value = 4 },
            new Rating { ProductId = products[27].Id, Value = 3 },
            new Rating { ProductId = products[28].Id, Value = 5 },
            new Rating { ProductId = products[29].Id, Value = 4 }
            
        };

        context.Ratings.AddRange(ratings);
        context.SaveChanges();

        var orders = new Order[]
        {
            new Order 
            { 
                OrderDate = DateTime.UtcNow.AddDays(-10), 
                CustomerName = "John Doe", 
                CustomerEmail = "john.doe@example.com", 
                TotalAmount = 1399.98M
            },
            new Order 
            { 
                OrderDate = DateTime.UtcNow.AddDays(-5), 
                CustomerName = "Jane Smith", 
                CustomerEmail = "jane.smith@example.com", 
                TotalAmount = 1099.98M
            }
        };

        context.Orders.AddRange(orders);
        context.SaveChanges();

        var orderItems = new OrderItem[]
        {
            new OrderItem 
            { 
                OrderId = orders[0].Id, 
                ProductId = products[0].Id, 
                Quantity = 1, 
                Price = products[0].Price 
            },
            new OrderItem 
            { 
                OrderId = orders[0].Id, 
                ProductId = products[1].Id, 
                Quantity = 1, 
                Price = products[1].Price 
            },
            new OrderItem 
            { 
                OrderId = orders[1].Id, 
                ProductId = products[1].Id, 
                Quantity = 1, 
                Price = products[1].Price 
            },
            new OrderItem 
            { 
                OrderId = orders[1].Id, 
                ProductId = products[2].Id, 
                Quantity = 1, 
                Price = products[2].Price 
            }
        };

        context.OrderItems.AddRange(orderItems);
        context.SaveChanges();
    }
}