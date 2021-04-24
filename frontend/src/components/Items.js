import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import styled from 'styled-components';

const Img = styled.img`
    margin: 0 10px;
    
`;

const Items = () => {
    const { 
        userInfo : { item }       
    } = useContext(UserContext);

    return (
        <div className="items">
            {item.map((src, i) => {
                return <img key={i} src={src} />
            })}            
        </div>
    );
};

export default Items;