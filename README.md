# 로아 전적 검색 웹 어플리케이션

        React + Node.js
        제가 좋아하는 게임인 로스트아크가 API를 제공하지 않기 때문에
        로스트아크 공식사이트 전적정보실에서 웹 크롤링을 한 데이터로
        현재 웹에 다시 렌더하는 방식으로 구현할 예정입니다.

## 배포

https://loa-status-app.herokuapp.com/

## 기능

        로스트아크의 닉네임 검색 시 사용자에 맞는 정보 보여줌
        - 레벨, 원정대 레벨, 닉네임, 서버
        - 장착 아이템, 스텟, 각인

<img src="https://imgur.com/IkTegYG.png" />

## 서버 Response JSON 구조

        {
                "profile": {
                        "role": {
                        "name": "인파이터",
                        "symbolSrc": "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/emblem_infighter.png",
                        "imgSrc": "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/profile/infighter.png"
                        },
                        "name": "캄넬",
                        "server": "@실리안",
                        "level": {
                                "lv": "Lv.58",
                                "exlv": "Lv.158",
                                "itemlv": "Lv.1,430.00"
                        }
                },
                "ingame": {
                        "equip": [
                        [
                                4,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/IF_Item/IF_Item_01_106.png"
                        ],
                        [
                                4,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/IF_Item/IF_Item_01_107.png"
                        ],
                        [
                                4,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/IF_Item/IF_Item_01_108.png"
                        ],
                        [
                                4,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/IF_Item/IF_Item_01_110.png"
                        ],
                        [
                                4,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/IF_Item/IF_Item_01_109.png"
                        ],
                        [
                                4,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/IF_Item/IF_Item_01_86.png"
                        ],
                        [
                                5,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_212.png"
                        ],
                        [
                                5,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_109.png"
                        ],
                        [
                                5,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_109.png"
                        ],
                        [
                                5,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_16.png"
                        ],
                        [
                                5,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_16.png"
                        ],
                        [
                                5,
                                "https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Ability/Ability_22.png"
                        ],
                        [
                                "",
                                "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/bg_equipment_lock.png"
                        ]
                        ],
                        "stat": {
                        "basic": {
                                "공격력": "20745",
                                "": "",
                                "최대 생명력": "101036"
                        },
                        "battleStat": {
                                "치명": "832",
                                "특화": "36",
                                "제압": "41",
                                "신속": "1145",
                                "인내": "25",
                                "숙련": "32"
                        }
                        },
                        "engrave": [
                                "극의: 체술 Lv. 3",
                                "정기 흡수 Lv. 3",
                                "원한 Lv. 3",
                                "예리한 둔기 Lv. 3"
                        ],
                }
        }
