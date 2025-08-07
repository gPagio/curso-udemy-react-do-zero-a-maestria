import "./Search.css";

// Hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetPostMessage } from "../../hooks/useResetPostMessage";
import { useQuery } from "../../hooks/useQuery";

// Components
import LikeContainer from "../../components/LikeContainer";
import PostItem from "../../components/PostItem";
import { Link } from "react-router-dom";

// Redux
import { searchPosts, like } from "../../slices/postSlice";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const dispatch = useDispatch();
  const resetMessage = useResetPostMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { posts, loading } = useSelector((state) => state.post);

  const handleLike = (post) => {
    dispatch(like(post._id));

    resetMessage();
  };

  useEffect(() => {
    dispatch(searchPosts(search));
  }, [dispatch, search]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div id="search">
      <h2>Você está buscando por: {search}</h2>
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
          Não foram encontrados resultados para sua busca.
        </h2>
      )}
    </div>
  );
};

export default Search;
