import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from 'contexts/UserContext';
import App from 'App';

ReactDOM.render(<UserProvider><App/></UserProvider>, document.getElementById('root'));
