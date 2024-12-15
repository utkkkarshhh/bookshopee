import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./SliderContainer.css";
import SliderCard from "./SliderCard";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";

interface Book {
  title: string;
  author_name: string;
  cover_i: string;
  key: string;
}

interface Props {
  books: Book[];
  category: string;
}

const SliderContainer: React.FC<Props> = ({ books, category }) => {
  const navigate = useNavigate();

  const carouselRef = useRef<OwlCarousel>(null);

  const options = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
    nav: false,
    dots: false,
  };

  const handleNext = () => {
    carouselRef.current?.next(0);
  };

  const handlePrev = () => {
    carouselRef.current?.prev(0);
  };

  const sliderCardToBookPageRedirect = (key: string) => {
    navigate(`/book/${key.split("/").pop()}`);
  };

  return (
    <div className="sliderContainer">
      <div className="sliderContainerUpper">
        <div className="sliderContainerTitle">{category}</div>
        <div className="sliderContainerButtons">
          <div className="arrowButtonContainer" onClick={handlePrev}>
            <HiArrowSmallLeft />
          </div>
          <div className="arrowButtonContainer" onClick={handleNext}>
            <HiArrowSmallRight />
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line react/no-unsafe */}
      <OwlCarousel className="owl-theme" ref={carouselRef} {...options}>
        {books.map((book, index) => (
          <SliderCard
            key={index}
            title={book.title}
            author={book.author_name ? book.author_name[0] : "Unknown"}
            coverId={book.cover_i}
            sliderCardRedirect={() => sliderCardToBookPageRedirect(book.key)}
          />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default SliderContainer;
