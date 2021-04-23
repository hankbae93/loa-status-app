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
            let resultArr = {};

            const proflieInfo = $("div.profile-character-info > span"); // 프로필 영역 정보
            let profileInfoArr = [];
            proflieInfo.each((i, elem) => {
                const text = $(elem).text();                
                profileInfoArr.push(text);
            });
            resultArr.profile = profileInfoArr;

            let parentTag = $("div.profile-ability-basic > ul > li");
            // 크롤링할 태그 찾기






// 뚱이다10세야


            // parentTag.each(function (i, elem) {
            //     let itemObj = {
            //     text: $(this).find("span:first-child").text(),
            //     num: $(this).find("span:last-child").text(),
            //     };
            //     resultArr.push(itemObj);
            // });

            // resultArr.forEach((elem) => {
            //     console.log(`현재 ${elem._text}의 현황 : ${elem._num}`);
            // });
            return resultArr;
            
        })
        .then((data) => res.send(data));
    
});

app.listen(PORT, () => console.log(`listening on the port ${PORT}`));