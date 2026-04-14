import { RouterProvider } from "react-router";
import { router } from "./routes/AppRouter";
import ActionPrvider from "./context/actioncontext/ActionProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ActionPrvider>
      <RouterProvider router={router} />

      <ToastContainer position="top-center" />
    </ActionPrvider>
  );
}

export default App;
