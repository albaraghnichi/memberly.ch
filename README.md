# Memberly Website

A modern, responsive website for Memberly - the customer loyalty app platform.

## Features

- 🎨 Modern design with Tailwind CSS
- 🌐 Multi-language support (DE, EN, FR, ES, IT)
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 📧 Contact form with email integration
- 🔒 GDPR compliant

## Contact Form Setup

The contact form uses Supabase Edge Functions to send emails securely. To set up email functionality:

1. **Create a Supabase project** if you haven't already
2. **Set up environment variables** in your Supabase project:
   - `RESEND_API_KEY`: Get this from [Resend.com](https://resend.com)
3. **Deploy the Edge Function**:
   ```bash
   supabase functions deploy send-contact-email
   ```
4. **Configure your environment variables** in `.env`:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Email Service Options

The contact form is configured to use Resend.com for email delivery, but you can easily switch to other providers:

- **Resend** (current): Simple, developer-friendly email API
- **SendGrid**: Enterprise-grade email service
- **Mailgun**: Powerful email automation
- **Amazon SES**: Cost-effective email service

To switch providers, modify the email sending logic in `supabase/functions/send-contact-email/index.ts`.

### Security Features

- ✅ CORS protection
- ✅ Input validation and sanitization
- ✅ Rate limiting (via Supabase)
- ✅ Spam protection through form validation
- ✅ GDPR compliant data handling

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

The site is optimized for deployment on modern hosting platforms like Netlify, Vercel, or any static hosting service.

## Contact

For questions about the contact form or technical setup, reach out to the development team.