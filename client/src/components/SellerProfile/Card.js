import React from "react";
import style from "./SellerProfile.module.css";

function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.top}>
        <h2 className={style.name}>{props.name}</h2>
        <img className={style.circleImg} src={props.img} alt="avatar_img" />
      </div>
      <div className={style.bottom}>
        <p className={style.info}>{props.tel}</p>
        <p className={style.info}>{props.email}</p>
        <p className={style.info}>{props.aadhar}</p>
        <p className={style.info}>{props.gsti}</p>
      </div>
    </div>
  );
}

export default Card;
