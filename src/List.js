import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "./util/api";
import './List.css';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [tags, setTags] = useState("");


  const onChange = (e) => {
    setTags(e.target.value);
  }

  const onClick=e=>{
    if (tags === "HYPE BOY") {
      const URL = "/reels/applicant?hashtag=#HYPE BOY";
      api
        .get(URL)
        .then((res) => {
          setUserData(res.data.list[0].userName);
          console.log(res.data.list[0].userName);
        })
        .catch((Error) => {
          console.log(Error);
        });
    }
  };

  const onKeyPress=e=>{
    if (e.key === "Enter" && tags === "HYPE BOY") {
        const URL = "/reels/applicant?hashtag=#HYPE BOY";
        api
          .get(URL)
          .then((res) => {
            setUserData(res.data.list[0].userName);
            console.log(res.data.list[0].userName);
          })
          .catch((Error) => {
            console.log(Error);
          });
      }
      
  };


  return (
    <div>
      <div>
        <h1>관리자 모드(기업가)</h1>
        <input placeholder="사용자 정보가 필요한 해시태그를 입력해주세요." type="text" name="tags" value={tags} onChange={onChange} onKeyDown={onKeyPress}/>
        <button onClick={onClick}>조회</button>
      </div>
      {userData&& (
        <textarea
          rows={7}
          value={JSON.stringify(userData)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;

