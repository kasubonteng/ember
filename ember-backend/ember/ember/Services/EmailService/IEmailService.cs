namespace ember.Services.EmailService;

public interface IEmailService
{
    Task SendEmailAsync(string from, string name, string subject, string message);
}