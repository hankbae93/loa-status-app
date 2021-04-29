import React from 'react';
import Profile from 'components/Profile';
import Items from 'components/Items';
import Stats from 'components/Stats';
import styled from 'styled-components';

const InfoContainer = styled.div`
    width: 1200px;
    margin: 0 auto;    
    color: #fff;
`;

const InfoBottom = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
`;

const Info = () => {    
    return (
        <InfoContainer>
            <Profile />   
            <InfoBottom>
                <Items />
                <Stats />
            </InfoBottom>   
        </InfoContainer>
    );
};

export default Info;