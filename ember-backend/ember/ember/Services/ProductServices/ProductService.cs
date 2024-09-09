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

    public async Task<(IEnumerable<ProductDto>, int?)> GetAllProductsAsync(ProductQueryParams queryParams)
    {
        var (products, totalCount) = await _productRepository.GetAllProductsAsync(queryParams);

        int? totalNumberOfPages = null;

        if (queryParams.PageSize.HasValue && totalCount > 0)
        {
            totalNumberOfPages = (int)Math.Ceiling(totalCount / (double)queryParams.PageSize.Value);
        }

        return (products.Select(MapToDto), totalNumberOfPages);
    }

    public async Task<ProductByIdDto?> GetProductByIdAsync(int id)
    {
        var product = await _productRepository.GetProductByIdAsync(id);

        return product == null ? null : new ProductByIdDto
        {
            Id = product.Id,
            Name = product.Name,
            Rating = product.AverageRating ?? 0,
            Price = product.Price,
            Category = product.Category.Name ?? "",
            Description = product.Description ?? "",
            ImageUrls = product.Images.Select(i => new ImageDto { ImageUrl = i.ImageUrl }).ToList()
        };
    }

    public async Task<List<ShopProductDto>> GetShopProductByCategoryAsync()
    {
        var products = await _productRepository.GetProductsByCategoryAsync();

        return products;

    }

    public Task<Dictionary<string, ProductDto>> GetBestSellingProductAsync()
    {
        throw new NotImplementedException();
    }

    private static ProductDto MapToDto(Product product)
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