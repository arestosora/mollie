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

    private generateHtml(data: object, subject: string, includeHeader: boolean): string {
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

        if (includeHeader) {
            html += `<h1>You've ordered successfully your ${subject} certificate with the information below:</h1>`;
        } else {
            html += `<h1>Información</h1>`;
        }

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

        if (includeHeader) {
            html += `<div class="contact-info">
                        If you have any issues, please contact us at this phone number: +1 212-203-7540
                     </div>`;
        }

        html += `</div>
        </body>
        </html>`;

        return html;
    }

    public generateHtmlForRecipient(data: object, subject: string): string {
        return this.generateHtml(data, subject, true);
    }

    public generateHtmlForReceiver(data: object): string {
        return this.generateHtml(data, '', false);
    }
}
