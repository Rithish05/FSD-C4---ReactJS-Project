import React from "react";
import "./StarRating.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function StarRating(props) {
  const [currentRating, setCurrentRating] = React.useState();

  React.useEffect(() => {
    setCurrentRating(currentRating);
  }, [currentRating]);

  return (
    <div className="rating" data-rating={currentRating}>
      {[...Array(+props.numberOfStars).keys()].map((n, index) => {
        let starColor = "black";
        if (index + 1 <= currentRating) {
          starColor = "yellow";
        }
        return (
          <StarBorderIcon
            key={index}
            color="inherit"
            className="star"
            style={{ color: starColor }}
            onClick={() => setCurrentRating(index + 1)}
          />
        );
      })}
    </div>
  );
}
