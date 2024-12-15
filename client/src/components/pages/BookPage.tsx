import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookPage.css";
import axios from "axios";
import baseURL from "../baseURL";
import RippleEffect from "../ui/rippleEffect/RippleEffect";

interface Params {
  id: string;
}

const BookPage: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${baseURL}/api/books/searchBookById/${id}`
        );
        console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      {book ? (
        <div className="bookPage">
          <div className="bookPageImageContainer">
            <img
              className="bookPageImage"
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              alt={book.title}
            />
          </div>
          <div className="">
            <h2 className="bookPageTitle">{book.title}</h2>
            <p className="bookPageAuthorHeading">Author: {book.author_name}</p>
            <p className="bookPagePublishHeading">
              Publish Date: {book.publish_date[0]}
            </p>
          </div>
        </div>
      ) : (
        <div className="bookPageLoading">
          <RippleEffect />
        </div>
      )}
    </div>
  );
};

export default BookPage;
