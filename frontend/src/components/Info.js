import React from 'react';
import Profile from 'components/Profile';
import Level from 'components/Level';
import Items from 'components/Items';
import styled from 'styled-components';

const InfoContainer = styled.div`
    width: 1200px;
    margin: 30px auto 0;
    border: 5px solid #2b2b2b;
    color: #2b2b2b;
`;

const Info = () => {    
    return (
        <InfoContainer>
            <Profile />
            {/* 
            <Level />
            <Items /> */}
        </InfoContainer>
    );
};

export default Info;