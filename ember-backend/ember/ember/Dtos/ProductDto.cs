namespace ember.Dtos;

public class ProductDto
{
    public int Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public double Rating { get; set; }
    public decimal Price { get; set; }
    public string? ImageUrl { get; set; } = String.Empty;
    public string Category { get; set; } = String.Empty;
}