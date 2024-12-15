const axios = require("axios");

const getSearchBooks = async (req, res) => {
  let { searchQuery } = req.body;
  searchQuery = searchQuery ? searchQuery.toLowerCase() : null;
  const results = [];
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?title=${searchQuery}`
    );

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      const books = response.data.docs;

      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery)
      );

      filteredBooks.forEach((book) => {
        const author =
          book.author_name && book.author_name.length > 0
            ? book.author_name[0]
            : null;
        const publishDate =
          book.publish_date && book.publish_date.length > 0
            ? book.publish_date[0]
            : null;

        results.push({
          title: book.title,
          author: author,
          publish_date: publishDate,
          ratings: book.ratings_count,
          cover_id: book.cover_i,
          key: book.key,
        });
      });

      res.status(200).json({ message: "success", success: true, results });
    } else {
      console.error("Failed to fetch search results:", response.statusText);
      res
        .status(response.status)
        .json({ success: false, error: response.statusText });
    }
  } catch (err) {
    console.error("Error fetching search results: ", err.message);
    res.status(500).json({ error: "Internal Server Error", success: false });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=/works/${id}`
    );
    res.status(200).json(response.data.docs[0]);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBooksByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?subject=${category}`
    );
    res.status(200).json(response.data.docs);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getSearchBooks, getBookById, getBooksByCategory };
