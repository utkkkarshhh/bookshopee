import React from "react";
import "./SearchResult.css";

type Props = {
  title: string;
  author: string;
  image: string;
};

const SearchResult = (props: Props) => {
  return (
    <React.Fragment>
      <div className="searchResult">
        <div className="searchResultTextDetails">
          <div className="searchResultTitle">{props.title}</div>
          <div className="searchResultAuthor">
            {props.author ? props.author : "No information available"}
          </div>
        </div>
        <div className="searchResultImage">
          {props.image ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${props.image}-L.jpg`}
              alt="Book Cover"
            />
          ) : (
            <p className="searchResultCoverUnavailable">No cover available</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchResult;
