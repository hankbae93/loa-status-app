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
           <div className="profile name">{profile.name}</div>
           <div className="profile server">{profile.server}</div>
           <div className="profile">{}</div>
       </Container>
   );
};
        
export default Profile;
