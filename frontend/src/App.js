import React, { useRef, useState } from 'react';
import axios from 'axios';
import Info from './components/Info';


const App = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const inputRef = useRef();

  const onChange = e => setValue(e.target.value);
  
  const onSubmit = async e => {
    e.preventDefault();
    const body = {
      id: value
    };    
  
    await axios
      .post('http://localhost:8000/search', body)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => {
        console.log(err)
      });
    setValue('');
  };
  
  return (
      <div>
          <form onSubmit={onSubmit}>
            <input value={value} onChange={onChange} ref={inputRef} name="id" type="text"/>
            <input type="submit"/>
          </form>
          <Info data={data}/>
      </div>
  );
};

export default App;