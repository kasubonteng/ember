namespace ember.Dtos;

public class ShopProductDto
{
    public string Category { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<ProductDto> Products { get; set; } = [];
}