import React from 'react';
import { UserProvider } from 'contexts/UserContext';
import Form from 'components/Form';
import Info from 'components/Info';


const App = () => {
  return (
      <UserProvider>
        <div className="app">
          <Form />
          <Info />
        </div>
      </UserProvider>
  );
};

export default App;