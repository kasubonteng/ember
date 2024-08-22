using ember.Dtos;
using ember.Models;

namespace ember.Services.ProductServices;

public interface IProductService
{
    Task<(IEnumerable<ProductDto>, int?)> GetAllProductsAsync(ProductQueryParams queryParams);
    Task<ProductByIdDto?> GetProductByIdAsync(int id);
    Task<Dictionary<string, List<ProductDto>>> GetShopProductByCategoryAsync();
    Task<Dictionary<string, ProductDto>> GetBestSellingProductAsync();
}