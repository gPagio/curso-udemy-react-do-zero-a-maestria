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
import { getPostById, like } from "../../slices/postSlice";

const Post = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { post, loading, error, message } = useSelector((state) => state.post);

  const handleLike = () => {
    dispatch(like(post._id));
  };

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div id="post">
      <PostItem post={post}></PostItem>
      <LikeContainer
        post={post}
        user={user}
        handleLike={handleLike}
      ></LikeContainer>
    </div>
  );
};

export default Post;
