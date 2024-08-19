using ember.Data;
using ember.Dtos;
using Microsoft.EntityFrameworkCore;

namespace ember.Repositories.Product;

public class ProductRepository : IProductRepository
{
    private readonly EmberContext _context;
    private readonly ILogger<ProductRepository> _logger;

    public ProductRepository(EmberContext context, ILogger<ProductRepository> logger)
    {
        _context = context;
        _logger = logger;
    }


    public async Task<IEnumerable<Models.Product>> GetAllProductsAsync()
    {
        try
        {
            var products = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Images)
                .Include(p => p.Ratings)
                .ToListAsync();

            return products;
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Error while getting all products");
            throw;
        }
    }

    public async Task<Models.Product?> GetProductByIdAsync(int id)
    {
        try
        {
            var product = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Images)
                .Include(product => product.Ratings)
                .FirstOrDefaultAsync(p => p.Id == id);

            return product;
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Error while getting product with id {id}", id);
            throw;
        }
    }

    public async Task<Dictionary<string, List<ProductDto>>> GetProductsByCategoryAsync()
    {
        try
        {
            var products = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Images)
                .Include(p => p.Ratings)
                .ToListAsync();

            var groupedProducts = products
                .GroupBy(p => p.Category.Name)
                .ToDictionary(g => g.Key, g => g.Select(MapToDto).Take(5).ToList());

            return groupedProducts;
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Error while getting products by category");
            throw;
        }
    }

    private static ProductDto MapToDto(Models.Product product)
    {
        return new ProductDto
        {
            Id = product.Id,
            Name = product.Name,
            Rating = product.AverageRating ?? 0,
            Price = product.Price,
            ImageUrl = product.Images.FirstOrDefault()?.ImageUrl ?? "",
            Category = product.Category.Name ?? ""
        };
    }
}