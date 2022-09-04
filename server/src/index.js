import express from 'express';
import cors from 'cors';

const expressApp = express();
expressApp.use(cors());
expressApp.use(express.json());


expressApp.post('/callback', (req, res) => {
    const body = req.body;
    body['req'] = 'Hello';
    res.json(body);
});


expressApp.listen(5005, () => {
    console.log("App is running on 5005 port");
});