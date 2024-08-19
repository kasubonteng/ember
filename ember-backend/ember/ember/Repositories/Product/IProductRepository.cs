namespace ember.Repositories.Product;

public interface IProductRepository
{
        Task<IEnumerable<Models.Product>> GetAllProductsAsync();
        Task<Models.Product?> GetProductByIdAsync(int id);
        // Task<IEnumerable<Models.Product>> GetShopProductsAsync();
        // Task<Dictionary<string, Models.Product>> GetBestSellingProductsAsync();
}