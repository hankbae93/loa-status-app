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
    const id = encodeURI(req.body.id); // 한글도 인코딩   
    let dataArr = [];
    getHTML(id)
        .then((html) => {
            const $ = cheerio.load(html.data);
            let userInfo = {};

            // 프로필 영역 정보
            const proflieInfo = $("div.profile-character-info > span"); 
            let profileInfoArr = [];
            proflieInfo.each((i, elem) => {
                const text = $(elem).text();                
                profileInfoArr.push(text);
            });
            userInfo.profile = profileInfoArr;

            // 레벨 정보
            let levelInfo = $("div.level-info2 div.level-info2__expedition > span:last-child").text();
            userInfo.level = levelInfo;
            
            // 장착 아이템 정보
            let itemInfo = $("div.profile-equipment__slot > div > img");
            let itemArr = [];
            itemInfo.each((i, item) => {
                const src = $(item).attr('src');                
                itemArr.push(src);
            });
            userInfo.item = itemArr;

            return userInfo;            
        })
        .then((data) => res.send(data));    
});

app.listen(PORT, () => console.log(`listening on the port ${PORT}`));