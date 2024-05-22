import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as ejs from 'ejs';
import { config } from 'dotenv';
config();
console.log(process.env.EMAIL);
console.log(process.env.SMTP);
console.log(process.env.PASSWORD);
@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL, // substitua pelo seu e-mail do Outlook
        pass: process.env.PASSWORD, // substitua pela sua senha do Outlook
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });
  }
  async sendConfirmationEmail(
    name: string,
    email: string,
    id: string,
  ): Promise<void> {
    const templateHTML = `
    <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Email de Confirmação</title>
  <style>
    body {
      background-color: #ffffff;
      font-family: Arial, sans-serif;
      color: #08173b;
      margin: 0;
      padding: 0;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      color: #0a1e49;
    }
    .id {
      font-size: 30px;
    }
    .name{
      font-size: 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .cover-image {
      width: 100%;
      height: auto;
    }
    
    .content {
      margin-bottom: 20px;
    }
    
    .confirmation-text {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    
    .instruction-text {
      font-size: 16px;
    }
    
    .instruction-list {
      margin-top: 10px;
      padding-left: 20px;
    }
    
    .qrcode-image {
      display: block;
      margin: 20px auto;
      width: 200px;
      height: auto;
    }
    
    .button {
      display: inline-block;
      background-color: #08173b;
      color: #ffffff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 16px;
      margin-left: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
    <img src="https://static.wixstatic.com/media/88e022_cf7fd6aacbda4dcfa69b0ac245e2d4bc~mv2.gif" />
    </div>
    <div class="content">
      <p class="confirmation-text">Confirmação de Inscrição</p>
      <p class="name">Olá, ${name}!</p>
      <p>Sua inscrição para o evento foi confirmada. Abaixo estão os detalhes:</p>
      <ul class="instruction-list">
        <li class="id">Número de Inscrição: ${id}</li>
      </ul>
      <img src="https://chart.googleapis.com/chart?cht=qr&chs=600x200&chl=${id}" />
      <p>Aqui estão algumas instruções importantes para o dia do evento:</p>
      <ul class="instruction-list">
        <li>Apresente seu número de inscrição no credenciamento do evento.</li>
        <li>Traga seu documento de identificação.</li>
        <li>Esteja preparado para participar das atividades programadas.</li>
      </ul>
      <p>Se você tiver alguma dúvida, não hesite em entrar em contato conosco.</p>
      <p>Agradecemos sua participação e esperamos vê-lo no evento!</p>
</body>
</html>
    `;

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Expo MultiMix - Confirmação de inscrição',
      html: ejs.render(templateHTML),
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('E-mail de confirmação enviado:', info.response);
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      throw new Error('Erro ao enviar o e-mail de confirmação.');
    }
  }
}
