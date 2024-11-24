import { IconButton, Rating } from "@mui/material";
import { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const Feedback = () => {
  const [thumbs, setThumbs] = useState(null);
  const [rating, setRating] = useState(null);

  const handleThumbsUp = () => setThumbs("up");
  const handleThumbsDown = () => setThumbs("down");

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  return (
    <div className="feedback-container">
      <div className="thumbs">
        <IconButton onClick={handleThumbsUp}>
          <FaThumbsUp
            style={{
              color: thumbs === "up" ? "green" : "gray", // Apply green color if thumbs up is selected, gray if not
              cursor: "pointer", // Change cursor to pointer to indicate it's clickable
            }}
          />
        </IconButton>
        <IconButton onClick={handleThumbsDown}>
          <FaThumbsDown
            style={{
              color: thumbs === "down" ? "red" : "gray", // Apply red color if thumbs down is selected, gray if not
              cursor: "pointer", // Change cursor to pointer to indicate it's clickable
            }}
          />
        </IconButton>
      </div>
      <div className="rating">
        <Rating
          name="feedback-rating"
          value={rating}
          onChange={handleRatingChange}
          max={5}
        />
      </div>
    </div>
  );
};

export default Feedback;
