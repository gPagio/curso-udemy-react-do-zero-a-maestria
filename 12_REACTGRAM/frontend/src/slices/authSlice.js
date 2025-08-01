import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

// Tenta resgatar item do localStorage do navegador
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  error: false,
  success: false,
  loading: false,
};

// Registrar um usuario e logar no sistema
// Vamos criar uma função com o createAsyncThunk, onde o
// nome da entidade é auth e a ação é register (entidade/ação).

// O dispatch envia uma ação para o Redux, que irá
// atualizar o estado da aplicação com os dados informados
// no payload. O thunkAPI é um objeto que contém várias
// propriedades e métodos úteis, como rejectWithValue
// para retornar um erro específico caso ocorra algum problema
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const data = await authService.registerUser(user);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  authService.logoutUser();
  return;
});

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const data = await authService.loginUser(user);

  if (data.errors) {
    return thunkAPI.rejectWithValue(data.errors[0]);
  }
  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,

  // Posso passar várias funções no reducer, seu uso
  // clássico é para resetar states para os valores padrão
  reducers: {
    // Função reset para resetar os states
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },

  // Fazem parte das execuções na API trabalhando
  // com os estados atuais da execução. Com o
  // builder, podemos adicionar vários cases
  // para cada situação
  extraReducers: (builder) => {
    builder
      // Executa quando a propriedade da função criada
      // com o createAsyncThunk seja pending, ou seja,
      // foi enviada mas ainda não se obteve uma resposta
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      // Executa quando a função criada com o createAsyncThunk
      // retorna uma resposta bem-sucedida (fulfilled), ou seja,
      // a requisição foi concluída com sucesso e temos os dados
      // de retorno disponíveis em action.payload
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      })
      // Executa quando a função criada com o createAsyncThunk
      // retorna uma resposta de erro (rejected), ou seja,
      // ocorreu algum problema durante a requisição e ela foi
      // rejeitada. O erro retornado estará disponível em action.payload.
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
