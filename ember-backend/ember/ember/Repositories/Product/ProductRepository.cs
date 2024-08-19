using ember.Data;
using Microsoft.EntityFrameworkCore;

namespace ember.Repositories.Product;

public class ProductRepository : IProductRepository
{
    private readonly EmberContext _context;

    public ProductRepository(EmberContext context)
    {
        _context = context;
    }


    public async Task<IEnumerable<Models.Product>> GetAllProductsAsync()
    {
        var products = await _context.Products
            .Include(p => p.Category)
            .Include(p => p.Images)
            .Include(p => p.Ratings)
            .ToListAsync();
        
        foreach (var product in products)
        {
            product.AverageRating = product.Ratings.Count != 0 ? product.Ratings.Average(r => r.Value) : (double?)null;
        }

        return products;
    }

    public async Task<Models.Product?> GetProductByIdAsync(int id)
    {
        var product = await _context.Products
            .Include(p => p.Category)
            .Include(p => p.Images).Include(product => product.Ratings)
            .FirstOrDefaultAsync(p => p.Id == id);
        
        if (product != null)
        {
            product.AverageRating = product.Ratings.Count != 0 ? product.Ratings.Average(r => r.Value) : (double?)null;
        }

        return product;
    }

    // public Task<IEnumerable<Models.Product>> GetShopProductsAsync()
    // {
    //     return await _context.Products.Include()
    // }
    //
    // public Task<Dictionary<string, Models.Product>> GetBestSellingProductsAsync()
    // {
    //     throw new NotImplementedException();
    // }
}