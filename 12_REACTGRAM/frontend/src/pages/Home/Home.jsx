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
  const resetMessage = useResetPostMessage(dispatch);

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

  return (
    <div id="home">
      {posts &&
        posts.map((post) => (
          <div key={post._id}>
            <PostItem post={post} />
            <LikeContainer post={post} user={user} handleLike={handleLike} />
            <Link className="btn" to={`/posts/${post._id}`}>
              Ver Mais
            </Link>
          </div>
        ))}
      {posts && posts.length === 0 && (
        <h2 className="no-posts">
          Ainda não há posts publicados.{" "}
          <Link to={`/users/${user._id}`}>Clique aqui</Link> e faça a primeira
          publicação!
        </h2>
      )}
    </div>
  );
};

export default Home;
