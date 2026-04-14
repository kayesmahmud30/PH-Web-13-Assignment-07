import { RouterProvider } from "react-router";
import { router } from "./routes/AppRouter";
import ActionProvider from "./context/actionContext/ActionProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ActionProvider>
      <RouterProvider router={router} />

      <ToastContainer />
    </ActionProvider>
  );
}

export default App;
