using System.ComponentModel.DataAnnotations;

namespace ember.Dtos;

public class ContactFormDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = null!;

    [Required]
    public string Name { get; set; } = null!;

    [Required]
    public string Subject { get; set; } = null!;
    
    [Required]
    public string Message { get; set; } = null!;
}