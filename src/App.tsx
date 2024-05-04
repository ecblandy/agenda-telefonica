import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import store from "./store"
import { GlobalStyle } from "./styles/style"
import Home from "./pages/home"
import Cadastro from "./pages/cadastro"

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
