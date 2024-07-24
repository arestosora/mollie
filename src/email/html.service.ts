import { Injectable } from '@nestjs/common';

@Injectable()
export class HtmlService {
    private fieldLabels: { [key: string]: string } = {
        'first-name': "First Name",
        'last-name': "Last Name",
        'company-name': "Company Name",
        'country': "Country",
        'address-line1': "Address Line 1",
        'address-line2': "Address Line 2",
        'city': "City",
        'postcode': "Postcode",
        'county': "County",
        'email': "Email",
        'phone': "Phone",
        'order-notes': "Order Notes",
        'Registry-Office': "Registry Office",
        'Processing-Speed': "Processing Speed",
        'Digital': "Digital Copy",
        'Date-Day': "Day",
        'Date-Month': "Month",
        'Date-Year': "Year",
        'Adopted': "Adopted",
        'Place-of-Birth': "Place of Birth",
        'First-Name-s-at-Birth': "First Names at Birth",
        'Surname-at-Birth': "Surname at Birth",
        'Father-Name-s': "Father's Name",
        'Father-Surname': "Father's Surname",
        'Mother-Name-s': "Mother's Name",
        'Mother-Surname': "Mother's Surname",
        'Mother-s-Maiden-Surname': "Mother's Maiden Surname",
        'Apostilled': "Apostilled",
        'quantity': "Quantity",
        'pricetotal': "Total Price",
        'description': "Description",
        'Is-the-Person-In-Enquity-a-Female': "Is the Person in Question a Female?",
        'Age-at-death-in-Years': "Age at Death (Years)",
        'First-Name-s-of-the-Deceased': "First Names of the Deceased",
        'Surname-of-Deceased': "Surname of the Deceased",
        'Place-of-Death-or-last-Known-Address': "Place of Death or Last Known Address",
        'Occupation-of-Deceased': "Occupation of the Deceased",
        'Place-of-Marriage': "Place of Marriage",
        'Husband-s-Name-s': "Husband's Name",
        'Husband-s-Surname': "Husband's Surname",
        'Wife-s-Name-s': "Wife's Name",
        'Wife-s-Surname': "Wife's Surname",
        'Information': "Information",
        'Name-of-Court': "Name of Court",
        'Case-Number': "Case Number",
        'Date-or-year-The-Decree-NISI-was-made-absolute': "Date or Year the Decree NISI was Made Absolute",
        'Period': "Period",
        'First-Name-Applicant': "First Name of Applicant",
        'Surname-Applicant': "Surname of Applicant",
        'First-Name-Respondent': "First Name of Respondent",
        'Surname-Respondant': "Surname of Respondent",
        'The-Court-Where-It-Was-Filed': "Court Where It Was Filed",
        'The-Court-Where-It-Was-Pronounced': "Court Where It Was Pronounced",
        'Date-Of-Marriage': "Date of Marriage",
        'Date-Of-Separation': "Date of Separation",
        'Date-Or-Year-The-Decree-NISI-Was-Pronounced': "Date or Year the Decree NISI Was Pronounced",
        'Date-Or-Year-The-Petition-Was-Filed': "Date or Year the Petition Was Filed"
    };

    private generateHtmlClient(includeHeader: boolean, confirmation: string): string {
        let html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Information</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    background-color: #f0f2f5;
                    margin: 0;
                    padding: 20px;
                    color: #333;
                }
                .container {
                    background-color: #ffffff;
                    margin: 0 auto;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    max-width: 700px;
                    text-align: center;
                }
                h1 {
                    color: #4a90e2;
                    font-size: 28px;
                    margin-bottom: 30px;
                }
                .certificate-subject {
                    color: #d9534f;
                }
                .contact-info {
                    margin-top: 20px;
                    padding: 20px;
                    background-color: #e9ecef;
                    border-radius: 10px;
                    font-size: 16px;
                    color: #495057;
                }
                .footer {
                    margin-top: 30px;
                    font-size: 14px;
                    color: #6c757d;
                }
                .footer a {
                    color: #4a90e2;
                    text-decoration: none;
                    font-weight: bold;
                }
                .footer a:hover {
                    text-decoration: underline;
                }
                .flag-image {
                    margin-top: 20px;
                    width: 150px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }
                .flag-image:hover {
                    transform: scale(1.05);
                }
                @media (max-width: 768px) {
                    .container {
                        padding: 20px;
                    }
                    h1 {
                        font-size: 24px;
                    }
                    .contact-info {
                        font-size: 14px;
                    }
                    .footer {
                        font-size: 12px;
                    }
                    .flag-image {
                        width: 120px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">`;
    
        if (includeHeader) {
            html += `<h1>Your request for a <span class="certificate-subject">${confirmation} certificate</span> has been successfully processed.</h1>`;
        }
    
        if (includeHeader) {
            html += `<div class="contact-info">
                        Should you require any assistance or have any inquiries, please do not hesitate to contact us at: <a href="mailto:support@officialcertificates.co.uk">support@officialcertificates.co.uk</a>
                     </div>`;
        }
    
        html += `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="UK Flag" class="flag-image">
                 <div class="footer" aria-label="Footer Information">
                    &copy; 2024 UK Official Certificates. All rights reserved.
                    <br>
                    <a href="https://www.officialcertificates.co.uk/privacy-policy">Privacy Policy</a> | <a href="https://www.officialcertificates.co.uk/terms-of-service">Terms of Service</a>
                 </div>
            </div>
        </body>
        </html>`;
    
        return html;
    }

    private generateHtml(data: object): string {
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
                .contact-info {
                    margin-top: 20px;
                    padding: 10px;
                    background-color: #f4f4f4;
                    border-radius: 5px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">`;

        html += `<h1>Information</h1>`;


        html += `<table>
                    <tr>
                        <th>Field</th>
                        <th>Data</th>
                    </tr>`;

        for (const [key, value] of Object.entries(data)) {
            const label = this.fieldLabels[key] || key;
            html += `<tr><td><strong>${label}:</strong></td><td>${value}</td></tr>`;
        }

        html += `
                </table>`;

        html += `</div>
        </body>
        </html>`;

        return html;
    }

    public generateHtmlForRecipient(confirmation: string): string {
        return this.generateHtmlClient(true, confirmation);
    }

    public generateHtmlForReceiver(data: object): string {
        return this.generateHtml(data);
    }
}
