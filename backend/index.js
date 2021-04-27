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

app.get('/', (req, res) => {
    res.send('Hello Ranja');
});

const getHTML = async (id) => {
    try {
        return await axios.get(lostarkUrl + id);
    } catch (error) {
        console.log(error);
    }
};

app.post('/search', (req, res) => {
    const id = encodeURI(req.body.id); // 한글 인코딩       
    
    getHTML(id)
        .then((html) => {
            const $ = cheerio.load(html.data);
            const userInfo = {};           
            
            // 프로필 영역
            const profile = {};
            const profileContainer = $("div.profile-character-info");           
            const profileRole = profileContainer.children('.profile-character-info__img');
            profile.role = {  // 직업 정보
                name: profileRole.attr('alt'),
                symbolSrc: profileRole.attr('src'),
                imgSrc: $('div.profile-equipment__character img').attr('src')
            };            
            profile.name = profileContainer.children('.profile-character-info__name').text();        
            profile.server = profileContainer.children('.profile-character-info__server').text();
            profile.level = {
                lv: profileContainer.children('.profile-character-info__lv').text(),
                exlv: $('div.profile-ingame div.level-info__expedition > span:last-child').text(),
                itemlv: $('div.profile-ingame div.level-info2__expedition > span:last-child').text(),
            };
            userInfo.profile = profile;

            // 인게임 수치 영역
            const ingame = {};
            const equipmentContainer = $('div.profile-equipment__slot div img');
            const equipmentArr = []; // 장비아이템 
            equipmentContainer.each((i, ele) => {   
                const slot = [];
                const grade = $(ele).parent().data('grade');               
                const img = $(ele).attr('src');
                slot.push(grade);
                slot.push(img);
                equipmentArr.push(slot);
            });
            ingame.equip = equipmentArr;

            const statArr = {}; // 능력치 
            const basicStatContainer = $('div.profile-ability-basic ul li');
            statArr.basic = {};
            basicStatContainer.each((i, ele) => {
                const key = $(ele).children('span').eq(0).text();                
                const value = $(ele).children('span').eq(1).text();                
                statArr.basic[key] = value;
            });

            statArr.battleStat = {};
            const battleStatContainer = $('div.profile-ability-battle > ul > li');
            battleStatContainer.each((i, ele) => {
                const key = $(ele).children('span').eq(0).text();                
                const value = $(ele).children('span').eq(1).text();                
                statArr.battleStat[key] = value;
            });
            ingame.stat = statArr;
            
            const engraveArr = []; // 각인
            const engraveContainer = $('div.profile-ability-engrave ul.swiper-slide > li');
            engraveContainer.each((i, ele) => {
                const text = $(ele).children('span').text();
                engraveArr.push(text);
            });
            ingame.engrave = engraveArr;
            userInfo.ingame = ingame;
            
            return userInfo;            
        })
        .then((data) => res.send(data));    
});

app.listen(PORT, () => console.log(`listening on the port ${PORT}`));
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            