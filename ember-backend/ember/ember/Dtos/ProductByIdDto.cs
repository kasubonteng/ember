using ember.Models;

namespace ember.Dtos;

public class ProductByIdDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public double Rating { get; set; }
    public decimal Price { get; set; }
    public string Category { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<ImageDto> ImageUrls { get; set; } = [];
}