namespace ember.Dtos;

public class ProductQueryParams
{
    public string? Category { get; set; } = null!;
    public string? Search { get; set; } = null!;
    public int? Rating { get; set; }
    public decimal? MinPrice { get; set; }
    public decimal? MaxPrice { get; set; }
    // public string? Popularity { get; set; } = string.Empty;
    public string? Sort { get; set; } = null!;
    public int? Page { get; set; }
    public int? PageSize { get; set; }
}