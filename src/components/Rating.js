import React from "react";
import "./Rating.css";
import star from "../images/icon-star.svg";

export default function Rating(props) {
  return (
    <>
      <div className="main-container">
        <div className="rating-container first-container">
          {/* {() => {
        while (i < 5) {
          i++;
          <img src={star} alt="" className="star-img" />;
        }
      }} */}
          <div className="img-container">
            <img src={star} alt="" className="star-img img1" />
            <img src={star} alt="" className="star-img img2" />
            <img src={star} alt="" className="star-img img3" />
            <img src={star} alt="" className="star-img img4" />
            <img src={star} alt="" className="star-img img5" />
          </div>
          <p className="para-container">Rated 5 Stars in {props.rating[0]}</p>
        </div>
        <div className="rating-container second-container">
          <div className="img-container">
            <img src={star} alt="" className="star-img img1" />
            <img src={star} alt="" className="star-img img2" />
            <img src={star} alt="" className="star-img img3" />
            <img src={star} alt="" className="star-img img4" />
            <img src={star} alt="" className="star-img img5" />
          </div>
          <p className="para-container">Rated 5 Stars in {props.rating[1]}</p>
        </div>
        <div className="rating-container third-container">
          <div className="img-container">
            <img src={star} alt="" className="star-img img1" />
            <img src={star} alt="" className="star-img img2" />
            <img src={star} alt="" className="star-img img3" />
            <img src={star} alt="" className="star-img img4" />
            <img src={star} alt="" className="star-img img5" />
          </div>
          <p className="para-container">Rated 5 Stars in {props.rating[2]}</p>
        </div>
      </div>
    </>
  );
}
