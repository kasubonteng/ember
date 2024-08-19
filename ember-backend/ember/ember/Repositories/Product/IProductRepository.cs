using ember.Dtos;

namespace ember.Repositories.Product;

public interface IProductRepository
{
        Task<IEnumerable<Models.Product>> GetAllProductsAsync();
        Task<Models.Product?> GetProductByIdAsync(int id);
        Task<Dictionary<string, List<ProductDto>>> GetProductsByCategoryAsync();
        // Task<Dictionary<string, Models.Product>> GetBestSellingProductsAsync();
}