import { RouterProvider } from "react-router"
import { router } from "./routes/AppRouter"
import ActionPrvider from "./context/actioncontext/ActionProvider"
import { ToastContainer } from "react-toastify"



function App() {
  return (

    <ActionPrvider>
      <RouterProvider router={router} />

      <ToastContainer theme="dark" closeOnClick pauseOnHover autoClose={1500} position="top-center" className='rounded-full p-0' />
    </ActionPrvider >



  )
}

export default App
