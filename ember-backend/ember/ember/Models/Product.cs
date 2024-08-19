namespace ember.Models;

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Description { get; set; } = string.Empty;
    public string SKU { get; set; } = string.Empty;
    public int Stock { get; set; }
    // public string Image { get; set; } = string.Empty;
    public int CategoryId { get; set; }
    public Category Category { get; set; } = null!;
    public ICollection<Rating> Ratings { get; set; } = new List<Rating>();
    public ICollection<ProductImage> Images { get; set; } = new List<ProductImage>();

    private double? _averageRating;
    public double? AverageRating
    {
        get => _averageRating ?? (Ratings.Any() ? Ratings.Average(r => r.Value) : (double?)null);
        set => _averageRating = value;
    }
}