import { Injectable, Logger } from '@nestjs/common';
import { CreateUserInfoDto, CreateBirthDto, CreateDeathDto, CreateMarriageDto, CreateDivorceDto } from './email.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    private readonly logger = new Logger('Email Service');
    private readonly transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_AUTH_USER,
            pass: process.env.SMTP_AUTH_PASS,
        },
    });

    private async sendEmailToRecipient(to: string, subject: string, html: string): Promise<void> {
        const mailOptions = {
            from: process.env.EMAIL_SENDER,
            to: to,
            subject: subject,
            html: html,
        };

        await this.transporter.sendMail(mailOptions);
        this.logger.log(`Email sent with subject: ${subject} to: ${to}`);
    }

    private async sendEmailToReceiver(subject: string, html: string): Promise<void> {
        const mailOptions = {
            from: process.env.EMAIL_SENDER,
            to: process.env.EMAIL_RECEIVER,
            subject: subject,
            html: html,
        };

        await this.transporter.sendMail(mailOptions);
        this.logger.log(`Email sent with subject: ${subject} to receiver`);
    }

    private generateHtmlForRecipient(data: object, subject: string): string {
        let html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Information</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    background-color: #fff;
                    margin: 0 auto;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                }
                h1 {
                    color: #333;
                    text-align: center;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }
                th, td {
                    padding: 12px;
                    border-bottom: 1px solid #ddd;
                }
                th {
                    background-color: #f4f4f4;
                    text-align: left;
                }
                td {
                    background-color: #fafafa;
                }
                tr:hover {
                    background-color: #f1f1f1;
                }
                .btn {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    color: #fff;
                    background-color: #007BFF;
                    border: none;
                    border-radius: 5px;
                    text-align: center;
                    text-decoration: none;
                    font-size: 16px;
                }
                .btn:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>You've ordered successfully your ${subject} certificate with the information below:</h1>
                <table>
                    <tr>
                        <th>Clave</th>
                        <th>Valor</th>
                    </tr>`;
                    
        for (const [key, value] of Object.entries(data)) {
            html += `<tr><td><strong>${key}:</strong></td><td>${value}</td></tr>`;
        }

        html += `
                </table>
            </div>
        </body>
        </html>`;
        
        return html;
    }

    private generateHtmlForReceiver(data: object): string {
        let html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Information</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    background-color: #fff;
                    margin: 0 auto;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                }
                h1 {
                    color: #333;
                    text-align: center;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }
                th, td {
                    padding: 12px;
                    border-bottom: 1px solid #ddd;
                }
                th {
                    background-color: #f4f4f4;
                    text-align: left;
                }
                td {
                    background-color: #fafafa;
                }
                tr:hover {
                    background-color: #f1f1f1;
                }
                .btn {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    color: #fff;
                    background-color: #007BFF;
                    border: none;
                    border-radius: 5px;
                    text-align: center;
                    text-decoration: none;
                    font-size: 16px;
                }
                .btn:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Información</h1>
                <table>
                    <tr>
                        <th>Clave</th>
                        <th>Valor</th>
                    </tr>`;
                    
        for (const [key, value] of Object.entries(data)) {
            html += `<tr><td><strong>${key}:</strong></td><td>${value}</td></tr>`;
        }

        html += `
                </table>
            </div>
        </body>
        </html>`;
        
        return html;
    }

    async createUserInfo(email: string, data: CreateUserInfoDto): Promise<void> {
        const subject = 'User Info';
        const htmlRecipient = this.generateHtmlForRecipient(data, subject);
        const htmlReceiver = this.generateHtmlForReceiver(data);
        await this.sendEmailToRecipient(email, subject, htmlRecipient);
        await this.sendEmailToReceiver(subject, htmlReceiver);
    }

    async createBirth(email: string, data: CreateBirthDto): Promise<void> {
        const subject = 'Birth Info';
        const htmlRecipient = this.generateHtmlForRecipient(data, subject);
        const htmlReceiver = this.generateHtmlForReceiver(data);
        await this.sendEmailToRecipient(email, subject, htmlRecipient);
        await this.sendEmailToReceiver(subject, htmlReceiver);
    }

    async createDeath(email: string, data: CreateDeathDto): Promise<void> {
        const subject = 'Death Info';
        const htmlRecipient = this.generateHtmlForRecipient(data, subject);
        const htmlReceiver = this.generateHtmlForReceiver(data);
        await this.sendEmailToRecipient(email, subject, htmlRecipient);
        await this.sendEmailToReceiver(subject, htmlReceiver);
    }

    async createMarriage(email: string, data: CreateMarriageDto): Promise<void> {
        const subject = 'Marriage Info';
        const htmlRecipient = this.generateHtmlForRecipient(data, subject);
        const htmlReceiver = this.generateHtmlForReceiver(data);
        await this.sendEmailToRecipient(email, subject, htmlRecipient);
        await this.sendEmailToReceiver(subject, htmlReceiver);
    }

    async createDivorce(email: string, data: CreateDivorceDto): Promise<void> {
        const subject = 'Divorce Info';
        const htmlRecipient = this.generateHtmlForRecipient(data, subject);
        const htmlReceiver = this.generateHtmlForReceiver(data);
        await this.sendEmailToRecipient(email, subject, htmlRecipient);
        await this.sendEmailToReceiver(subject, htmlReceiver);
    }
}
