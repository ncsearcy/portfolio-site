// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'contact@nicholassearcy.com', // This needs to be a verified domain in Resend
      to: ['ncsearcy@gmail.com'],
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4299e1; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #4299e1; margin-bottom: 5px;">From:</h3>
            <p style="margin: 0; font-size: 16px;"><strong>${name}</strong></p>
            <p style="margin: 0; color: #666;">${email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #4299e1; margin-bottom: 10px;">Message:</h3>
            <div style="background: #f7fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #4299e1;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 14px; color: #666;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Message

From: ${name} (${email})

Message:
${message}

---
This message was sent from your portfolio contact form.
      `
    })

    return NextResponse.json({ 
      message: 'Email sent successfully',
      id: data.data?.id
    })

  } catch (error) {
    console.error('Error sending email:', error)
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}