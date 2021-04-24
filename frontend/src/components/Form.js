import React, { useState, useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import axios from 'axios';

const Form = () => {
    const [value, setValue] = useState('');    
    const { setUserInfo } = useContext(UserContext);

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
            setUserInfo(res.data);
        })
        .catch(err => {
            console.log(err)
        });
        setValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input value={value} onChange={onChange} name="id" type="text"/>
            <input type="submit"/>
        </form>
    );
};

export default Form;