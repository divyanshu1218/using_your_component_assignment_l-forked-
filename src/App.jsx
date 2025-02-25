// App.jsx
import React from "react";
import BookCard from "./components/bookcard"; // Import the BookCard component

const App = () => {
  // Sample books data with image URLs
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
      year: 1925,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700317474i/202368563.jpg", // Example image URL
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about the serious issues of rape and racial inequality, told through the eyes of a young girl.",
      year: 1960,
      image: "https://images3.penguinrandomhouse.com/cover/9781933771106", // Example image URL
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel set in a totalitarian society ruled by the Party and its leader, Big Brother.",
      year: 1949,
      image: "https://tse2.mm.bing.net/th?id=OIP.IIIPIPZYMBOJgxFfWGRtBAHaHa&rs=1&pid=ImgDetMain", // Example image URL
    },
  

  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <h1 style={styles.header}>Digital Library</h1>

      {/* Books Container */}
      <div style={styles.booksContainer}>
        {/* Map through the books array and render a BookCard for each book */}
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

// Styles for the App component
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f0f0f0",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  booksContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px", // Adds spacing between cards
  },
};

export default App;