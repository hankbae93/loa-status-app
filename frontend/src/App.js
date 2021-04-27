import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import Container from 'components/Container';
import Form from 'components/Form';
import Info from 'components/Info';

const App = () => {  
  const { loading } = useContext(UserContext);
  return (      
        <Container>
          <Form />
          {loading && <Info />}
        </Container>     
  );
};

export default App;