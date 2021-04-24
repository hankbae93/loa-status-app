import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';


const Level = () => {
    const { 
        userInfo : { level }       
    } = useContext(UserContext);
    return (
        <p>
           장착 아이템 레벨 : <strong>{level}</strong> 
        </p>
    );
};

export default Level;
