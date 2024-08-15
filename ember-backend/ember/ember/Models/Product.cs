namespace ember.Models;

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Description { get; set; } = string.Empty;
    public string SKU { get; set; } = string.Empty;
    public int Stock { get; set; }
    public string Image { get; set; } = string.Empty;
    public int CategoryId { get; set; }
    public Category Category { get; set; } = null!;
    private ICollection<Rating> Ratings { get; set; } = null!;
    public ICollection<ProductImage> Images { get; set; } = null!;

    public double AverageRating
    {
        get
        {
            if (Ratings.Count == 0) return 0;

            return Ratings.Average(r => r.Value);
        }
    }

}