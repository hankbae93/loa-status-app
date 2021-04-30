import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;        
    padding: 5px 10px;
    width: 100%;        
    box-sizing: border-box;
`;

const Profile = () => {
    const { 
        userInfo : { profile }       
    } = useContext(UserContext);
    
   return (
       <Container style={{ alignItems: 'center' }}>
           <img             
            src={profile.role.symbolSrc} 
            alt={profile.role.name} />
           <div 
            style={{fontSize: '24px', marginLeft: '15px'}}>
            <small>{profile.level.lv} </small>          
            <strong>{profile.name}</strong>            
            <span style={{color: '#b178ff', fontSize: '14px', paddingLeft: '3px'}}>{profile.server}</span>
           </div>
       </Container>
   );
};
        
export default Profile;
