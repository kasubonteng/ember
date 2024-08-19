using ember.Services;
using ember.Services.ProductServices;
using Microsoft.AspNetCore.Mvc;

namespace ember.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly IProductService _productService;
    private readonly ILogger<ProductController> _logger;

    public ProductController(IProductService productService, ILogger<ProductController> logger)
    {
        _productService = productService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllProducts()
    {
        try
        {
            var products = await _productService.GetAllProductsAsync();

            return products.Any() ? Ok(products) : NotFound("No products found");
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Error while getting all products");
            return StatusCode(500, "An error occurred while getting all products");
        }
        
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetProductById(int id)
    {
        try
        {
            var product = await _productService.GetProductByIdAsync(id);
        
            return product == null ? NotFound($"Product with ID {id} not found") : Ok(product);
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Error while getting product with id {id}", id);
            return StatusCode(500, "An error occurred while getting this product");
        }
       
    }
    
    [HttpGet("shop")]
    public async Task<IActionResult> GetShopProductsByCategory()
    {
        try
        {
            var products = await _productService.GetShopProductByCategoryAsync();

            return products.Count != 0 ? Ok(products) : NotFound("No products found");
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Error while getting all products");
            return StatusCode(500, "An error occurred while getting all products");
        }
    }
}