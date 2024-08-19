using ember.Dtos;
using ember.Models;

namespace ember.Services.ProductServices;

public interface IProductService
{
    Task<IEnumerable<ProductDto>> GetAllProductsAsync();
    Task<ProductDto?> GetProductByIdAsync(int id);
    Task<Dictionary<string, List<ProductDto>>> GetShopProductByCategoryAsync();
    Task<Dictionary<string, ProductDto>> GetBestSellingProductAsync();
}