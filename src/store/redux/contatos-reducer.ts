import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Contato = {
  id: number
  nomeCompleto: string
  email: string
  tel: string
}

type ContatoType = {
  itens: Contato[]
}

const initialState: ContatoType = {
  itens: []
}

const contatoReducer = createSlice({
  name: "contato",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<Contato>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload.id)
      ]
    },
    salvar: (state, action: PayloadAction<Contato>) => {
      const indexTarefa = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      if (state.itens.length === 0) {
        // Se estiver vazio, o próximo ID será 0
        action.payload.id = 0
      } else {
        // Se não estiver vazio, obter o último ID e incrementar
        const ultimoItem = state.itens[state.itens.length - 1]
        action.payload.id = ultimoItem.id + 1
      }

      // Adicionar o novo contato ao array
      state.itens.push(action.payload)
    }
  }
})

export default contatoReducer.reducer
export const { remover, salvar, cadastrar } = contatoReducer.actions
