import React, { useState, useEffect } from "react";
import Searchbar from "../ui/searchbar/Searchbar";
// import { Link } from "react-router-dom";
import "./LandingPage.css";

import SliderContainer from "../ui/slider/SliderContainer";

const LandingPage: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [technology, setTechnology] = useState<[]>([]);
  const [sciFi, setSciFi] = useState<[]>([]);
  const [selfHelp, setSelfHelp] = useState<[]>([]);

  useEffect(() => {
    const fetchBooks = async (category: string, setter: Function) => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?subject=${category}`
        );
        const data = await response.json();
        setter(data.docs || []);
      } catch (error) {
        console.error(`Error fetching ${category} books:`, error);
      }
    };

    fetchBooks("Technology", setTechnology);
    fetchBooks("Sci-Fi", setSciFi);
    fetchBooks("Self-Help", setSelfHelp);

    console.log(selfHelp);
  }, []);

  const handleSearch = (results: string[]) => {
    console.log(results);
  };

  return (
    <div>
      <h1 className="landingPageHeader">
        <Searchbar onSearch={handleSearch} />
        <SliderContainer category="Technology" books={technology} />
        <SliderContainer category="Self-Help" books={selfHelp} />
        <SliderContainer category="Sci-Fi" books={sciFi} />
      </h1>
    </div>
  );
};

export default LandingPage;
