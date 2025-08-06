import "./Post.css";

import { uploads } from "../../utils/config";

// Components
import PostItem from "../../components/PostItem";
import LikeContainer from "../../components/LikeContainer";
import Message from "../../components/Message";
import { Link } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useResetPostMessage } from "../../hooks/useResetPostMessage";

// Redux
import { getPostById, like, resetMessage } from "../../slices/postSlice";

const Post = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const resetPostMessage = useResetPostMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { post, loading, error, message } = useSelector((state) => state.post);

  const handleLike = () => {
    dispatch(like(post._id));

    resetPostMessage();
  };

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  /*Resetar a mensagem quando o componente for desmontado
    para que ao voltar para outra pagina que tambem use o
    componente de mensagem seja exibida uma mensagem do
    componente atual.*/
  useEffect(() => {
    return () => {
      dispatch(resetMessage());
    };
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div id="post">
      <PostItem post={post}></PostItem>
      <LikeContainer
        post={post}
        user={user}
        handleLike={handleLike}
      ></LikeContainer>
      <div className="message-container">
        {error && <Message type="error" message={error} />}
        {message && <Message type="success" message={message} />}
      </div>
    </div>
  );
};

export default Post;
