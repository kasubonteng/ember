using ember.Dtos;
using ember.Models;
using ember.Repositories.Product;

namespace ember.Services.ProductServices;

public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;

    public ProductService(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public async Task<IEnumerable<ProductDto>> GetAllProductsAsync()
    {
        var products = await _productRepository.GetAllProductsAsync();

        return products.Select(MapToDto);
    }

    public Task<ProductDto> GetProductByIdAsync()
    {
        throw new NotImplementedException();
    }

    public Task<ShopProductDto> GetShopProductByCategoryAsync()
    {
        throw new NotImplementedException();
    }

    public Task<Dictionary<string, ProductDto>> GetBestSellingProductAsync()
    {
        throw new NotImplementedException();
    }

    private ProductDto MapToDto(Product product)
    {
        return new ProductDto
        {
            Id = product.Id,
            Name = product.Name,
            Rating = product.AverageRating ?? 0,
            Price = product.Price,
            ImageUrl = product.Images.FirstOrDefault()?.ImageUrl,
            Category = product.Category.Name

        };
    }
}