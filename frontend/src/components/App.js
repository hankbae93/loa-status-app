import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const inputRef = useRef();
  const backUrl = "http://localhost:4000/";
  // useEffect(() => {
  //   const getData = async () => {
  //     const datas = await axios.get("http://localhost:4000/");
  //     setData(datas.data);
  //   };
  //   getData();
  // }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // if (data === null) {
  //   return <div>Load..</div>;
  // } else {
  //   console.log(data);
  const onSubmit = async e => {
    e.preventDefault();
    await axios.get(backUrl, {id: inputRef.current.value })
    .then(res => setData(res));
  };

  return (
    <div>
      {data}
      <form onSubmit={onSubmit}>
        <input ref={inputRef} name="id"  type="text" placeholder="아이디를 적어주세요"/>
        <input  type="submit"/>
      </form>
    </div>
  );
  
};

export default App;