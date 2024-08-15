namespace ember.Models;

public class Rating
{
    public int Id { get; set; }
    public int Value { get; set; }
    public int ProductId { get; set; }
    public string UserId { get; set; } = String.Empty;

    public Product Product { get; set; } = null!;
}