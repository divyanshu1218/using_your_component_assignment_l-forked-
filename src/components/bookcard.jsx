// cart/bookcard.jsx
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div style={styles.card}>
      {/* Book Cover Image */}
      <img
        src={book.image}
        alt={book.title}
        style={styles.image}
      />
      <h3 style={styles.title}>{book.title}</h3>
      <p style={styles.author}>By: {book.author}</p>
      <p style={styles.description}>{book.description}</p>
      <p style={styles.year}>Published: {book.year}</p>
    </div>
  );
};

// Styles for the BookCard component
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    textAlign: "center", // Center-align content
  },
  image: {
    width: "100%", // Make the image responsive
    height: "200px", // Set a fixed height
    objectFit: "cover", // Ensure the image covers the area
    borderRadius: "8px", // Rounded corners for the image
    marginBottom: "16px", // Spacing below the image
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  author: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "8px",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px",
  },
  year: {
    fontSize: "14px",
    color: "#777",
  },
};

export default BookCard;