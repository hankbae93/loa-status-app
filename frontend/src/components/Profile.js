import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-contents: center;
    align-items: center;
    width: 500px;
`;

const Profile = () => {
    const { 
        userInfo : { profile }       
    } = useContext(UserContext);
   return (
       <Container>
           {profile.map((item, i) => {
               return <p key={i}>{item}</p>
           })}
       </Container>
   );
};
        
export default Profile;
