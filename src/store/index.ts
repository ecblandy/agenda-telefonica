import { configureStore } from "@reduxjs/toolkit"
import contatosReducer from "./redux/contatos-reducer"
const store = configureStore({
  reducer: {
    contato: contatosReducer
  }
})
export default store
export type RootReducer = ReturnType<typeof store.getState>
