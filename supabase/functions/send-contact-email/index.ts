import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactFormData {
  firstName: string
  company?: string
  email: string
  message: string
  privacy: boolean
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, company, email, message, privacy }: ContactFormData = await req.json()

    // Validate required fields
    if (!firstName || !email || !message || !privacy) {
      return new Response(
        JSON.stringify({ error: 'Alle Pflichtfelder müssen ausgefüllt werden' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Ungültige E-Mail-Adresse' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Create email content
    const emailSubject = 'Neue Nachricht von Kontaktformular auf Memberly'
    const emailBody = `
Neue Kontaktanfrage über die Memberly Website:

Vorname: ${firstName}
${company ? `Firma: ${company}` : ''}
E-Mail: ${email}
Datenschutz akzeptiert: ${privacy ? 'Ja' : 'Nein'}

Nachricht:
${message}

---
Diese Nachricht wurde automatisch über das Kontaktformular auf memberly.ch gesendet.
Gesendet am: ${new Date().toLocaleString('de-CH')}
    `.trim()

    // Send email using a webhook service (we'll use a simple SMTP service)
    const emailData = {
      to: 'diego.digiacomo@memberly.ch',
      from: 'noreply@memberly.ch',
      subject: emailSubject,
      text: emailBody,
      replyTo: email
    }

    // For this example, we'll use Resend API (you can replace with any email service)
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables')
      return new Response(
        JSON.stringify({ error: 'E-Mail-Service nicht konfiguriert' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Memberly Website <noreply@memberly.ch>',
        to: ['diego.digiacomo@memberly.ch'],
        subject: emailSubject,
        text: emailBody,
        reply_to: email,
      }),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Resend API error:', errorText)
      return new Response(
        JSON.stringify({ error: 'Fehler beim Senden der E-Mail' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Nachricht erfolgreich gesendet' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return new Response(
      JSON.stringify({ error: 'Interner Serverfehler' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})