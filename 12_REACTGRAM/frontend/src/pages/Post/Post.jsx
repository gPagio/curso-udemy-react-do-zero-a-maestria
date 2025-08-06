import "./Post.css";

import { uploads } from "../../utils/config";

// Components
import PostItem from "../../components/PostItem";
import Message from "../../components/Message";
import { Link } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../slices/postSlice";

const Post = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { post, loading, error, message } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div id="post">
      <PostItem post={post}></PostItem>
    </div>
  );
};

export default Post;
