import React, { useState, useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import axios from 'axios';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";

const FormBox = styled.form`
    position:relative;
    margin: 0 auto;    
    width: 300px;
    font-size:16px;        
`;

const InputSearch = styled.input`
    width:100%;
    padding:10px 30px 10px 10px;
    color:#fff;
    font-size:16px;
    background:none;
    outline: none;
    border-radius: 15px;
    border: 3px solid #626774;
    box-sizing:border-box;    
`;

const Button = styled.button`
    position: absolute;
    top:50%;
    right: 10px;    
    padding: 3px;    
    width: 30px;
    height: 30px;
    color:#fff;
    font-size:16px;
    background:none;
    transform: translateY(-50%);
    cursor: pointer;
    border: none;
    outline: none;
`;

const Form = () => {
    const [value, setValue] = useState('');    
    const { setUserInfo, setLoading } = useContext(UserContext);

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
        setLoading(true);
    };

    return (
        <FormBox onSubmit={onSubmit} >
            <InputSearch 
            name="id" 
            type="text" 
            value={value} 
            onChange={onChange}
            maxLength="20" 
            autocomplete="off"
            placeholder="닉네임을 적어주세요"/>
            <Button type="submit"><FaSearch/></Button>
        </FormBox>
    );
};

export default Form;
    