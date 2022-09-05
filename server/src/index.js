import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import MailService from "./MailService.js";

dotenv.config();

const expressApp = express();

expressApp.use(cors());
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded())


const mailService = new MailService();

expressApp.post('/api/submit-form', (req, res) => {
    console.log(req.body)

    const {name, phone, email, title} = req.body;
    mailService.sendForm(name, email, phone, title).then(() => {
        res.send('OK');
    }).catch((e) => {
        console.log(e)
        res.status(400).send('Bad request');
    });
});

const LISTEN_PORT = process.env.LISTEN_PORT ?? 5005;
expressApp.listen(LISTEN_PORT, () => {
    console.log(`App is running on ${LISTEN_PORT} port`);
});