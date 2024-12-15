import React from "react";
import "./SliderCard.css";

type Props = {
  title: string;
  author: string;
  coverId: string;
  sliderCardRedirect: () => void;
};

const SliderCard: React.FC<Props> = ({
  title,
  author,
  coverId,
  sliderCardRedirect,
}) => {
  const loading: boolean = false; // Assuming loading state is provided

  return loading ? (
    <div className="sliderCard movie--isloading">
      <div className="loading-image"></div>
      <div className="loading-content">
        <div className="loading-text-container">
          <div className="loading-main-text"></div>
          <div className="loading-sub-text"></div>
        </div>
        <div className="loading-btn"></div>
      </div>
    </div>
  ) : (
    <div className="sliderCard">
      <img
        className="sliderCardBookImage"
        src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`}
        alt="Book Cover"
      />
      <div className="cardContent">
        <div className="sliderCardContent">
          <p className="sliderCardBookTitle">{title}</p>
          <p className="sliderCardBookAuthor">by {author}</p>
        </div>
        <div className="sliderCardButtonContainer">
          <button className="sliderCardButton" onClick={sliderCardRedirect}>
            Read Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
