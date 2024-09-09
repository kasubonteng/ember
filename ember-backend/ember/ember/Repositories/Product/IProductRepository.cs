using ember.Dtos;

namespace ember.Repositories.Product;

public interface IProductRepository
{
        Task<(IEnumerable<Models.Product>, int)> GetAllProductsAsync(ProductQueryParams queryParams);
        Task<Models.Product?> GetProductByIdAsync(int id);
        Task<List<ShopProductDto>> GetProductsByCategoryAsync();
        Task<int> GetTotalNumberOfProductsAsync();
        // Task<Dictionary<string, Models.Product>> GetBestSellingProductsAsync();
}