import React, { useState, ChangeEvent, useEffect } from "react";
import axios, { CancelTokenSource } from "axios"; // Import CancelTokenSource
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import "./Searchbar.css";
import SearchResult from "./SearchResult";
import RippleEffect from "../rippleEffect/RippleEffect";
import baseURL from "../../baseURL";

interface Props {
  onSearch: (results: any[]) => void;
}

interface Book {
  title: string;
  author: string;
  publish_date: string;
  ratings: number;
  cover_id: string;
  key: string;
}

const Searchbar: React.FC<Props> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [renderedResultsCount, setRenderedResultsCount] = useState<number>(0);

  useEffect(() => {
    let cancelTokenSource: CancelTokenSource;

    const fetchData = async () => {
      setLoading(true);
      cancelTokenSource = axios.CancelToken.source();

      try {
        const response = await axios.post(
          `${baseURL}/api/books/searchBooks`,
          { searchQuery: searchText },
          { cancelToken: cancelTokenSource.token }
        );
        if (response.status === 200) {
          onSearch(response.data.results);
          setSearchResults(response.data.results);
        } else {
          console.error("Failed to fetch search results:", response.statusText);
        }
      } catch (error: any) {
        if (!axios.isCancel(error)) {
          console.error("Error fetching search results:", error.message);
        }
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    if (searchText !== "") {
      setShowSearchResults(true); // Show search results when text is present
      fetchData();
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }

    return () => {
      if (cancelTokenSource) {
        cancelTokenSource.cancel("Request canceled by cleanup");
      }
    };
  }, [searchText, onSearch]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text);
  };

  return (
    <div className="searchBar">
      <div className="searchIcon">
        <IoSearch />
      </div>
      <div className="searchBarText">
        <input
          className="searchBarInput"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search for your favorite movie"
        />
      </div>
      {showSearchResults && (
        <div className="searchResultsContainer">
          {loading && <RippleEffect />}
          {searchResults.map((result) => (
            <Link key={result.key} to={`/book/${result.key.split("/").pop()}`}>
              <SearchResult
                key={result.key}
                title={result.title}
                author={result.author}
                image={result.cover_id}
              />
            </Link>
          ))}
          {loading
            ? null
            : searchResults.length === 0 && (
                <div className="noResultsAvailable">
                  <p>No results to show</p>
                </div>
              )}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
