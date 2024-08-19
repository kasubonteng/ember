using ember.Dtos;

namespace ember.Services.ProductServices;

public interface IProductService
{
    Task<IEnumerable<ProductDto>> GetAllProductsAsync();
    Task<ProductDto> GetProductByIdAsync();
    Task<ShopProductDto> GetShopProductByCategoryAsync();
    Task<Dictionary<string, ProductDto>> GetBestSellingProductAsync();
}