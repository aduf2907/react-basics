import { useLike } from "../hooks/useLike";

const LikeButton = () => {
  const { like, handleLike, handleUnlike } = useLike();

  return (
    <button onClick={like ? handleUnlike : handleLike}>
      {like ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
