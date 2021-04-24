import React, { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import Form from 'components/Form';
import Info from 'components/Info';


const App = () => {  
  const { loading } = useContext(UserContext);
  return (
      
        <div className="app">
          <Form />
          {loading && <Info />}
        </div>
     
  );
};

export default App;