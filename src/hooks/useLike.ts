import { useState } from "react";

export const useLike = () => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(true);
  };

  const handleUnlike = () => {
    setLike(false);
  };

  return {
    like,
    handleLike,
    handleUnlike,
  };
};
