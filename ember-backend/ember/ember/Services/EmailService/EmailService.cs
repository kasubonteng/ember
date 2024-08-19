using MailKit.Net.Smtp;
using MimeKit;

namespace ember.Services.EmailService;

// COME BACK TO THIS
public class EmailService : IEmailService
{
    private readonly IConfiguration _configuration;

    public EmailService(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    
    public async Task SendEmailAsync(string from, string name, string subject, string message)
    {
        var email = new MimeMessage();
        email.From.Add(new MailboxAddress(name, from));
        email.To.Add(MailboxAddress.Parse(_configuration["EmailSettings:ToAddress"]));
        email.Subject = subject;
        email.Body = new TextPart(MimeKit.Text.TextFormat.Html)
        {
            Text = message
        };

        using var smtp = new SmtpClient();
        await smtp.ConnectAsync(_configuration["EmailSettings:SmtpServer"], 587, false);
        await smtp.AuthenticateAsync(_configuration["EmailSettings:SmtpUsername"], _configuration["EmailSettings:SmtpPassword"]);
        await smtp.SendAsync(email);
        await smtp.DisconnectAsync(true);
    }
}