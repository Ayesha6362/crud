import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const ApiGet = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const[hidden,sethidden]=useState(true)
  const getdata = async () => {
    const response = await axios.get("http://localhost:3000/todo");
    setData(response.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  const Postdata = async () => {
    await axios.post("http://localhost:3000/todo", { title: text });
    document.getElementById("myinput").value="";
    getdata();
  };
  const deletdata = async (id) => {
    await axios.delete(`http://localhost:3000/todo/${id}`);
    getdata();
  };
  //  const editdata = async () => {
  //   await axios.put()
  // };
  return (
    <div>
      <h1>hello</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} id="myinput" placeholder="data post.."/>
      <button onClick={() => Postdata()}>Add todo</button>
      {data.map((item) => {
        return (
          <div>
            <h1 key={item.id}>{item.title}</h1>
            <button onClick={() => deletdata(item.id)}>DELETE</button>
            <button onClick={() => sethidden(!hidden)}>EDIT</button>
            
          </div>
        );
      })}
       <input hidden={hidden} type="text"  placeholder="update.."/>
    <button hidden={hidden} >Update</button>
    </div>
  );
};

export default ApiGet;
