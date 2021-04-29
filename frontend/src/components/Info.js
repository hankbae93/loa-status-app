import React from 'react';
import Profile from 'components/Profile';
import Items from 'components/Items';
import styled from 'styled-components';

const InfoContainer = styled.div`
    width: 1200px;
    margin: 0 auto;    
    color: #fff;
`;

const Info = () => {    
    return (
        <InfoContainer>
            <Profile />      
            <Items />
        </InfoContainer>
    );
};

export default Info;