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
// nome da entidade é auth e a ação é register (entidade/ação)
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const data = await authService.registerUser(user);

    if (data.error) {
      return thunkAPI.rejectWithValue(data.erros[0]);
    }
    return data;
  }
);

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
    // Executa quando a função criada com o createAsyncThunk
    // retorna uma resposta de erro (rejected), ou seja,
    // ocorreu algum problema durante a requisição e ela foi
    // rejeitada. O erro retornado estará disponível em action.payload.
    builder
      // Executa quando a propriedade da função criada
      // com o createAsyncThunk seja pending, ou seja,
      // foi enviada mas ainda não se obteve uma resposta
      .addCase(register.pending, (state) => {
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
      // Executa quando a função criada com o createAsyncThunk
      // retorna uma resposta de erro (rejected), ou seja,
      // ocorreu algum problema durante a requisição e ela foi
      // rejeitada. O erro retornado estará disponível em action.payload.
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
