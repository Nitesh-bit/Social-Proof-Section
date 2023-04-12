import React from "react";
import reviews from "../reviewContent";
import "./Review.css";
import coltonProfile from "../images/image-colton.jpg";
import ireneProfile from "../images/image-irene.jpg";
import anneProfile from "../images/image-anne.jpg";

export default function Review() {
  return (
    <>
      <div className="container">
        <div className="inner f-container">
          <img src={coltonProfile} alt="" className="prof-img profile" />
          <p className="customer-name">{reviews[0].name}</p>
          <p className="customer-title">{reviews[0].title}</p>
          <p className="customer-message">{reviews[0].message}</p>
        </div>
        <div className="inner s-container">
          <img src={ireneProfile} alt="" className="prof-img profile" />
          <p className="customer-name">{reviews[1].name}</p>
          <p className="customer-title">{reviews[1].title}</p>
          <p className="customer-message">{reviews[1].message}</p>
        </div>
        <div className="inner t-container">
          <img src={anneProfile} alt="" className="prof-img profile" />
          <p className="customer-name">{reviews[2].name}</p>
          <p className="customer-title">{reviews[2].title}</p>
          <p className="customer-message">{reviews[2].message}</p>
        </div>
      </div>
    </>
  );
}
