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
import {
  getPostById,
  like,
  resetMessage,
  comment,
} from "../../slices/postSlice";

const Post = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const resetPostMessage = useResetPostMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { post, loading, error, message } = useSelector((state) => state.post);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => {
    dispatch(like(post._id));

    resetPostMessage();
  };

  const handleComment = (e) => {
    e.preventDefault();

    const commentData = {
      comment: commentText,
      id: post._id,
    };

    dispatch(comment(commentData));

    setCommentText("");
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
      <div className="comments">
        {post.comments && (
          <>
            <h3>Comentários: ({post.comments.length})</h3>
            <form onSubmit={handleComment}>
              <input
                type="text"
                placeholder="Insira o seu comentário..."
                onChange={(e) => setCommentText(e.target.value)}
                value={commentText || ""}
              />
              <input type="submit" value="Comentar" />
            </form>
            {post.comments.length === 0 && <p>Não há comentários...</p>}
            {post.comments.map((comment, index) => (
              <div className="comment" key={index}>
                <div className="author">
                  {comment.userImage && (
                    <img
                      src={`${uploads}/users/${comment.userImage}`}
                      alt={comment.userName}
                    />
                  )}
                  <Link to={`/users/${comment.userId}`}>
                    <p>{comment.userName}</p>
                  </Link>
                </div>
                <p>{comment.comment}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
