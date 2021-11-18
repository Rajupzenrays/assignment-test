import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";
const Request = () => {
  const [mapedData, setMapedData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const req = await axios.get("https://gorest.co.in/public/v1/todos");
      setMapedData(req.data.data);
      console.log(req.data.data);
    };
    loadData();
  }, []);

  return (
    <div className="container">
      {mapedData.map((val) => {
        return (
          <div className="row">
            <div
              className="col-md text-center"
              style={{
                border: "2px solid black",
                margin: "10px",
                height: "100%",              
              }}
            >
              {val.id}<br/>
              {val.user_id}<br/>
              {val.title}
            </div>
            <div
              className="col-md text-center"
              style={{
                border: "2px solid black",
                margin: "10px",
                height: "100%",
              }}
            >
              {val.id}<br/>
              {val.user_id}<br/>
              {val.title}
            </div>
            <div
              className="col-md text-center"
              style={{
                border: "2px solid black",
                margin: "10px",
                height: "100%",              }}
            >
              {val.id}<br/>
              {val.user_id}<br/>
              {val.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
