import "./EditProfile.css";

import { uploads } from "../../utils/config";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { profile, resetMessage } from "../../slices/userSlice";

// Components
import Message from "../../components/Message";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { user, message, error, loading } = useSelector((state) => state.user);

  console.log(user);

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="edit-profile">
      <h2>Edite seus dados</h2>
      <p className="subtitle">
        Adicione uma imagem de perfil e conte mais sobre você ...
      </p>
      {/** preview da imagem */}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" disabled />
        <label>
          <span>Imagem de perfil:</span>
          <input type="file" />
        </label>
        <label>
          <span>Bio:</span>
          <input type="text" placeholder="Descrição do perfil" />
        </label>
        <label>
          <span>Quer alterar sua senha?</span>
          <input type="password" placeholder="Digite a nova senha" />
        </label>
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
};

export default EditProfile;
