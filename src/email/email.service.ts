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

    private async sendEmail(to: string, subject: string, html: string): Promise<void> {
        const mailOptions = {
            from: process.env.EMAIL_SENDER,
            to: `${to}, ${process.env.EMAIL_RECEIVER}`,
            subject: subject,
            html: html,
        };

        await this.transporter.sendMail(mailOptions);
        this.logger.log(`Email sent with subject: ${subject} to: ${to}`);
    }

    private generateHtml(data: object): string {
        let html = '<h1>Information</h1><table>';
        for (const [key, value] of Object.entries(data)) {
            html += `<tr><td><strong>${key}:</strong></td><td>${value}</td></tr>`;
        }
        html += '</table>';
        return html;
    }

    async createUserInfo(email: string, data: CreateUserInfoDto): Promise<void> {
        const subject = 'User Info';
        const html = this.generateHtml(data);
        await this.sendEmail(email, subject, html);
    }

    async createBirth(email: string, data: CreateBirthDto): Promise<void> {
        const subject = 'Birth Info';
        const html = this.generateHtml(data);
        await this.sendEmail(email, subject, html);
    }

    async createDeath(email: string, data: CreateDeathDto): Promise<void> {
        const subject = 'Death Info';
        const html = this.generateHtml(data);
        await this.sendEmail(email, subject, html);
    }

    async createMarriage(email: string, data: CreateMarriageDto): Promise<void> {
        const subject = 'Marriage Info';
        const html = this.generateHtml(data);
        await this.sendEmail(email, subject, html);
    }

    async createDivorce(email: string, data: CreateDivorceDto): Promise<void> {
        const subject = 'Divorce Info';
        const html = this.generateHtml(data);
        await this.sendEmail(email, subject, html);
    }
}
