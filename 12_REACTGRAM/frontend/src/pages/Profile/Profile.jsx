import "./Profile.css";

import { uploads } from "../../utils/config";

// Components
import Message from "../../components/Message";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";

// Hooks
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getUserDetails } from "../../slices/userSlice";
import {
  publishPost,
  resetMessage,
  getUserPosts,
  deletePost,
  updatePost,
} from "../../slices/postSlice";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.user);
  const { user: userAuth } = useSelector((state) => state.auth);
  const {
    posts,
    loading: loadingPost,
    message: messagePost,
    error: errorPost,
  } = useSelector((state) => state.post);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editImage, setEditImage] = useState("");

  const newPostForm = useRef();
  const editPostForm = useRef();

  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (title) {
      formData.append("title", title);
    }

    if (image) {
      formData.append("image", image);
    }

    dispatch(publishPost(formData));

    setTitle("");

    // Se der algum problema tirar esse setImage
    setImage("");

    resetComponentMessage();
  };

  const handleFile = (e) => {
    const image = e.target.files[0];

    setImage(image);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    resetComponentMessage();
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const postData = {
      title: editTitle,
      id: editId,
    };

    dispatch(updatePost(postData));

    resetComponentMessage();
  };

  const hideOrShowForms = () => {
    newPostForm.current.classList.toggle("hide");
    editPostForm.current.classList.toggle("hide");
  };

  const handleEdit = (post) => {
    if (editPostForm.current.classList.contains("hide")) {
      hideOrShowForms();
    }

    setEditId(post._id);
    setEditTitle(post.title);
    setEditImage(post.image);
  };

  const handleCancelEdit = () => {
    hideOrShowForms();
  };

  useEffect(() => {
    dispatch(getUserDetails(id));
    dispatch(getUserPosts(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="profile">
      <div className="profile-header">
        {user.profileImage && (
          <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
        )}
        <div className="profile-description">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
      {id === userAuth._id && (
        <>
          <div className="new-post" ref={newPostForm}>
            <h3>Compartilhe algum momento seu:</h3>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Título para a foto:</span>
                <input
                  type="text"
                  placeholder="Insira um título"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title || ""}
                />
              </label>
              <label>
                <span>Imagem:</span>
                <input type="file" onChange={handleFile} />
              </label>
              {!loadingPost && <input type="submit" value="Postar" />}
              {loadingPost && (
                <input type="submit" value="Aguarde..." disabled />
              )}
            </form>
          </div>
          <div className="edit-post hide" ref={editPostForm}>
            <p>Editando:</p>
            {editImage && (
              <img src={`${uploads}/posts/${editImage}`} alt={editTitle} />
            )}
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                placeholder="Insira o novo título"
                onChange={(e) => setEditTitle(e.target.value)}
                value={editTitle || ""}
              />
              <input type="submit" value="Salvar" />
              <button className="cancel-btn" onClick={handleCancelEdit}>
                Cancelar Edição
              </button>
            </form>
          </div>
          {errorPost && <Message type="error" message={errorPost} />}
          {messagePost && <Message type="success" message={messagePost} />}
        </>
      )}
      <div className="user-posts">
        <h2>Posts publicados:</h2>
        <div className="posts-container">
          {posts &&
            posts.map((post) => (
              <div className="post" key={post._id}>
                {post.image && (
                  <img
                    src={`${uploads}/posts/${post.image}`}
                    alt={post.title}
                  />
                )}
                {id === userAuth._id ? (
                  <div className="actions">
                    <Link to={`/posts/${post._id}`}>
                      <BsFillEyeFill />
                    </Link>
                    <BsPencilFill onClick={() => handleEdit(post)} />
                    <BsXLg onClick={() => handleDelete(post._id)} />
                  </div>
                ) : (
                  <Link className="btn" to={`posts/${post._id}`}>
                    Ver
                  </Link>
                )}
              </div>
            ))}
          {posts.length === 0 && <p>Nenhum post publicado!</p>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
