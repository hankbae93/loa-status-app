import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import styled from 'styled-components';

const GRADE_BACKGROUND_STYLE = [
    "linear-gradient(135deg,#18220b,#304911)",
    "linear-gradient(135deg,#111f2c,#113d5d)",
    "linear-gradient(135deg,#261331,#480d5d)",
    "linear-gradient(135deg,#362003,#9e5f04)",
    "linear-gradient(135deg,#341a09,#a24006)",
];

const Items = () => {
    const { 
        userInfo : { item }       
    } = useContext(UserContext);

    return (
        <div className="items">
            {item.map((data, i) => {
                return <img key={i} src={data[1]} style={{background : GRADE_BACKGROUND_STYLE[data[0] - 1]}}/>
            })}            
        </div>
    );
};

export default Items;