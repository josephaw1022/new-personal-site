import AWS from 'aws-sdk';
import type { NextApiResponse, NextApiRequest } from 'next';



export default async function SendEmail(req: NextApiRequest, res: NextApiResponse): Promise<void> {

    if (req.method !== 'POST') {
        return res.status(405).json({
            statusCode: 405,
            message: 'Method Not Allowed'
        });
    }



    const { name, email, message } = req.body;
    const ses = new AWS.SES({ region: 'us-east-1' });

    const toEmail = `${process.env.NEXT_PUBLIC_EMAIL_TO}`;


    const params = {
        Destination: {
            ToAddresses: [toEmail],
        },
        Message: {
            Body: {
                Text: {
                    Data: `${message}`,
                    Charset: 'UTF-8',
                },
            },
            Subject: {
                Data: `${name} from @${email} sent you a message`,
                Charset: 'UTF-8',
            },
        },
        Source: `${process.env.NEXT_PUBLIC_EMAIL_FROM}`,
    };


    try {
        const response = await ses.sendEmail(params).promise();
        console.log(response);
        res.status(200).json({ message: 'Email sent' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Email failed to send' });
    }

} 