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


    public async Task<IEnumerable<Models.Product>> GetAllProductsAsync(ProductQueryParams queryParams)
    {
        try
        {
            var query =  _context.Products
                .Include(p => p.Category)
                .Include(p => p.Images)
                .Include(p => p.Ratings)
                .AsQueryable();

            if (queryParams.Category != null)
            {
                query = query.Where(p => p.Category.Name.ToLower() == queryParams.Category.ToLower());
            }
            
            if (queryParams.Search != null)
            {
                query = query.Where(p => p.Name.ToLower().Contains(queryParams.Search.ToLower()));
            }
            
            if (queryParams.Rating != null)
            {
                query = query.Where(p => p.Ratings.Average(r => r.Value) >= queryParams.Rating);
            }
            
            if (queryParams.MinPrice != null)
            {
                query = query.Where(p => p.Price >= queryParams.MinPrice);
            }
            
            if (queryParams.MaxPrice != null)
            {
                query = query.Where(p => p.Price <= queryParams.MaxPrice);
            }
            
            if (queryParams.Sort != null)
            {
                var sortOption = queryParams.Sort.ToLower();
                query = sortOption switch
                {
                    "name" => query.OrderBy(p => p.Name),
                    "name_desc" => query.OrderByDescending(p => p.Name),
                    "price" => query.OrderBy(p => p.Price),
                    "price_desc" => query.OrderByDescending(p => p.Price),
                    "rating" => query.OrderByDescending(p => p.AverageRating),
                    "rating_desc" => query.OrderBy(p => p.AverageRating),
                    _ => query,
                };
            }
            
            if (queryParams.Page.HasValue && queryParams.PageSize.HasValue)
            {
                query = query.Skip((queryParams.Page.Value - 1) * queryParams.PageSize.Value)
                    .Take(queryParams.PageSize.Value);
            }

            return await query.ToListAsync();
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

    public async Task<int> GetTotalNumberOfProductsAsync()
    {
        return await _context.Products.CountAsync();
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