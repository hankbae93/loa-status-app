const express = require('express');
const cors = require('cors');
const cheerio = require("cheerio");
const logger = require('morgan');
const axios = require('axios');
const app = express();
const PORT = 8000;

const lostarkUrl = 'https://lostark.game.onstove.com/Profile/Character/';
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const getHTML = async (id) => {
    try {
        return await axios.get(lostarkUrl + id);
    } catch (error) {
        console.log(error);
    }
};

app.get('/', (req, res) => {
    res.send('Hello Ranja');
});

app.post('/search', (req, res) => {
    const id = req.body.id;   
    // 웹 크롤링 코드
    // getHTML(id)
    // .then((html) => {
    //     const $ = cheerio.load(html.data);
    //     let parentTag = $("div.level-info2__expedition").find("span").text();
    //     return parentTag;
    //   })
    //   .then((data) => res.send(data));
    res.send('Post Success, your id is '+ id);
});

app.listen(PORT, () => console.log(`listening on the port ${PORT}`));