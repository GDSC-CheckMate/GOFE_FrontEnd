import React from "react";
import Record_of_like from "./Record_of_like";
const fake_like_1 = [
  { id: 1, name: "이상해씨", time: "1시간전" },
  { id: 2, name: "용zi찬", time: "2시간전" },
  { id: 3, name: "용찬", time: "2시간전" },
  { id: 4, name: "은진", time: "3시간전" },
  { id: 5, name: "가원", time: "3시간전" },
  { id: 6, name: "승찬", time: "4시간전" },
  { id: 7, name: "이상해씨", time: "5시간전" },
];
const fake_like_2 = [
  { id: 8, name: "이씨", time: "2일전" },
  { id: 9, name: "용찬", time: "3일전" },
  { id: 10, name: "용zi찬", time: "3일전" },
  { id: 11, name: "은진닝", time: "4일전" },
  { id: 12, name: "가원", time: "4일전" },
  { id: 13, name: "승찬이형", time: "4일전" },
  { id: 14, name: "이상해씨", time: "5일전" },
];
const Record = (props) => {
  return (
    <div className="mypage-like-record-list-container-box">
      <div className="mypage-like-record-list-title">{props.day}</div>
      {props.day === "최근 받은 응원"
        ? fake_like_1.map((recent) => (
            <Record_of_like key={recent.id} recent={recent} />
          ))
        : fake_like_2.map((recent) => (
            <Record_of_like key={recent.id} recent={recent} />
          ))}
    </div>
  );
};

export default Record;
