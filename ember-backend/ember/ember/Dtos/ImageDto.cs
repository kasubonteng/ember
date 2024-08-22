namespace ember.Dtos;

public class ImageDto
{
    public int Id { get; set; }
    public string? ImageUrl { get; set; } = string.Empty;
    public string AltText { get; set; } = string.Empty;
}