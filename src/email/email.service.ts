import { Injectable, Logger } from '@nestjs/common';
import { CreateUserInfoDto, CreateBirthDto, CreateDeathDto, CreateMarriageDto, CreateDivorceDto } from './email.dto';
import { HtmlService } from './html.service';
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

    constructor(private readonly htmlService: HtmlService) { }

    private async sendEmail(to: string, subject: string, html: string): Promise<void> {
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

    async createUserInfo(email: string, data: CreateUserInfoDto): Promise<void> {
        const subject = 'User Info';
        const confirmation = 'User'
        const htmlRecipient = this.htmlService.generateHtmlForRecipient(confirmation);
        const htmlReceiver = this.htmlService.generateHtmlForReceiver(data);
        await this.sendEmail(email, subject, htmlRecipient);
        await this.sendEmailToReceiver(subject, htmlReceiver);
    }

    async createBirth(email: string, data: CreateBirthDto): Promise<void> {
        const subject = 'Birth Certificate Confirmation';
        const confirmation = 'Birth'
        const htmlRecipient = this.htmlService.generateHtmlForRecipient(confirmation);
        const htmlReceiver = this.htmlService.generateHtmlForReceiver(data);
        await this.sendEmail(email, subject, htmlRecipient);
        await this.sendEmailToReceiver(subject, htmlReceiver);
    }

    async createDeath(email: string, data: CreateDeathDto): Promise<void> {
        const subject = 'Death Certificate Confirmation';
        const confirmation = 'Death'
        const htmlRecipient = this.htmlService.generateHtmlForRecipient(confirmation);
        const htmlReceiver = this.htmlService.generateHtmlForReceiver(data);
        await this.sendEmail(email, subject, htmlRecipient);
        await this.sendEmailToReceiver(subject, htmlReceiver);
    }

    async createMarriage(email: string, data: CreateMarriageDto): Promise<void> {
        const subject = 'Marriage Certificate Confirmation';
        const confirmation = 'Marriage'
        const htmlRecipient = this.htmlService.generateHtmlForRecipient(confirmation);
        const htmlReceiver = this.htmlService.generateHtmlForReceiver(data);
        await this.sendEmail(email, subject, htmlRecipient);
        await this.sendEmailToReceiver(subject, htmlReceiver);
    }

    async createDivorce(email: string, data: CreateDivorceDto): Promise<void> {
        const subject = 'Divorce Certificate Confirmation';
        const confrimation = 'Divorce'
        const htmlRecipient = this.htmlService.generateHtmlForRecipient(confrimation);
        const htmlReceiver = this.htmlService.generateHtmlForReceiver(data);
        await this.sendEmail(email, subject, htmlRecipient);
        await this.sendEmailToReceiver(subject, htmlReceiver);
    }
}
