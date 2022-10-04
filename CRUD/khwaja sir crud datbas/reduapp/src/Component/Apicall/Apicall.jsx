import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";
const Apicall = () => {
  const [product, setProduct] = useState([]);
//   const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setmessage] = useState();
  const [severity, setSeverity] = useState("");
  const GetApiadata = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
      setOpen(true);
      setmessage("Reaquest successful");
      setSeverity("success");
      // alert("Response successful")
    } catch {
      // alert("response failed")
      setOpen(true);
      setmessage("Reaquest faild");
      setSeverity("error");
    }

    //     if(response.data === undefined){
    //         alert("Response faild")
    //     }else{alert("request succesful")}
  };
  const handleClose = ( reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    GetApiadata();
  }, []);
  return (
    <div>
      <h1>HELLO</h1>
      {/* <button onClick={GetApiadata}>Add</button>{" "} */}
      {/* aisa batan ke requirment pr bhi rakh sakte */}
      <div>
        <table border={2}>
            <tr>
                <th>ID</th>
                <th>TITEL</th>
                <th>CATIGORY</th>
                <th>PRICE</th>
            </tr>
            {product.map((item)=>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            })}
        </table>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Apicall;
