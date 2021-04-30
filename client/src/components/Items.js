import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import 'components/Item.css';

const GRADE_BACKGROUND_STYLE = [    
    "linear-gradient(135deg,#18220b,#304911)",
    "linear-gradient(135deg,#111f2c,#113d5d)",
    "linear-gradient(135deg,#261331,#480d5d)",
    "linear-gradient(135deg,#362003,#9e5f04)",
    "linear-gradient(135deg,#341a09,#a24006)",
];

const Slot = ({ itemSrc, grade}) => {    
    return (
        <div className="items-slot">
            <img src={itemSrc} style={{background: GRADE_BACKGROUND_STYLE[grade - 1]}} alt="" />
        </div>
    );
};

const Items = () => {
    const { 
    userInfo: {
        profile : { role },
        ingame: { equip }
    }} = useContext(UserContext);

    return (
        <div className="items">
            <img src={role.imgSrc} alt={role.name} />
            <div className="items-equip">
                <ul className="equip-left">
                    {equip.map((item, i) => {
                        if(i > 5) return null;                        
                        return <li><Slot key={i+item[1]} itemSrc={item[1]} grade={item[0]}/></li>
                    })}
                </ul>
                <ul className="equip-right">
                    {equip.map((item, i) => {
                        if(i < 6) return null;                      
                        return <li><Slot itemSrc={item[1]} grade={item[0]}/></li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Items;