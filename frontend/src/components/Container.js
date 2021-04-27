import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap'); 
	body {
		padding: 0;
		margin: 0;
        color: #fff;
        font-family: 'Noto Sans KR', sans-serif;
	}
`;

const BOX = styled.div`
    width:100%;
    height:100vh;
    background: url(https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/bg/bg_profile.jpg?22ef124a9466e7e93f5be822f305a162)  no-repeat 50% 0;
    box-sizing:border-box;
`;

const Container = ({ children }) => {
    return (   
        <BOX className="wrapper">
            <GlobalStyle />
            {children}
        </BOX>
    );
};

export default Container;
        
        