import "./Home.css";

// Components
import LikeContainer from "../../components/LikeContainer";
import PostItem from "../../components/PostItem";
import { Link } from "react-router-dom";

// Hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetPostMessage } from "../../hooks/useResetPostMessage";

// Redux
import { getAllPosts, like } from "../../slices/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const resetMessage = useResetPostMessage();

  const { user } = useSelector((state) => state.auth);
  const { posts, loading } = useSelector((state) => state.post);

  const handleLike = (post) => {
    dispatch(like(post._id));

    resetMessage();
  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (loading) return <p>Carregando...</p>;

  return <div>Home</div>;
};

export default Home;
