using ember.Dtos;

namespace ember.Repositories.Product;

public interface IProductRepository
{
        Task<IEnumerable<Models.Product>> GetAllProductsAsync(ProductQueryParams queryParams);
        Task<Models.Product?> GetProductByIdAsync(int id);
        Task<Dictionary<string, List<ProductDto>>> GetProductsByCategoryAsync();
        Task<int> GetTotalNumberOfProductsAsync();
        // Task<Dictionary<string, Models.Product>> GetBestSellingProductsAsync();
}