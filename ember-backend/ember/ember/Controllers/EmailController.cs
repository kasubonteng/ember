using ember.Dtos;
using ember.Services.EmailService;
using Microsoft.AspNetCore.Mvc;

namespace ember.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmailController : ControllerBase
{
    private readonly IEmailService _emailService;
    private readonly ILogger<EmailController> _logger;

    public EmailController(IEmailService emailService, ILogger<EmailController> logger)
    {
        _emailService = emailService;
        _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> SendContactEmail([FromBody] ContactFormDto contactForm)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var body = $"Name: {contactForm.Name}\nEmail: {contactForm.Email}\n\nMessage:\n{contactForm.Message}";
            await _emailService.SendEmailAsync(contactForm.Email, contactForm.Name, contactForm.Subject, body);
            return Ok("Email sent successfully");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error sending contact email");
            return StatusCode(500, "An error occurred while sending the email");
        }
    }
}