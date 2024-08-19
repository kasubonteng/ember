namespace ember.Models;

public class ProductImage
{
    public int Id { get; set; }
    public string? ImageUrl { get; set; } = string.Empty;
    public string AltText { get; set; } = string.Empty;
    public int ProductId { get; set; }

    public Product Product { get; set; } = null!;
}