import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import styled from 'styled-components';

const StatBox = styled.div`    
    overflow:hidden;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 0 0 20px;
    border-radius: 10px;
    background-color: #252931;
`;

const StatHead = styled.div`    
    flex:1;
    display: flex;
    justify-content: center;
    width: 200px;    
    background-color: #191b20;
    & > h3 {
        display: flex;
        align-items: center;
        font-size: 16px;
    }
`
const StatContent = styled.div`
flex:2;
display: flex;
justify-content: center;
align-items: space-between;
flex-direction: column;
padding: 5px 50px;
box-sizing: border-box;
& > div {
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 9px 0;
}
& > div > strong {
    color: #e4ba27;
}
`;

const Stats = () => {
    const { 
        userInfo: { ingame, profile }
    } = useContext(UserContext);

    const boxStat = (obj) => { 
        const arr = [];        
        for(let key in obj) {
            arr.push([key, obj[key]]);
        }
        return arr;
    };

    return (
        <div style={{
            width: '556px',
            alignSelf: 'start'
        }}>
            <StatBox>
                <StatHead><h3>장착 아이템 레벨</h3></StatHead>
                <StatContent><strong>{profile.level.itemlv}</strong></StatContent>
            </StatBox>

            <StatBox>
                <StatHead><h3>기본 특성</h3></StatHead>
                <StatContent>
                {boxStat(ingame.stat.basic).map((item, i) => {
                        return (
                            <div key={i}>
                                <strong>{item[0]}</strong>
                                <span>{item[1]}</span>
                            </div>
                        )
                    })}
                </StatContent>
            </StatBox>

            <StatBox>
                <StatHead><h3>전투 특성</h3></StatHead>
                <StatContent>
                    {boxStat(ingame.stat.battleStat).map((item, i) => {
                        return (
                            <div key={i}>
                                <strong>{item[0]}</strong>
                                <span>{item[1]}</span>
                            </div>
                        )
                    })}
                </StatContent>
            </StatBox>

            <StatBox>
                <StatHead><h3>각인</h3></StatHead>
                <StatContent>
                    {ingame.engrave.map((item, i) => {
                        return (
                            <div key={i}>
                                <strong>{item}</strong>                                
                            </div>
                        )
                    })}
                </StatContent>
            </StatBox>
        </div>
    );
};

export default Stats;