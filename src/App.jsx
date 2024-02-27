import { useDispatch } from "react-redux";
import { getToken } from "./utils/localstorage";
import { useEffect } from "react";
import { fetchUser } from "./redux/slices/authSlice";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const token = getToken();
  useEffect(() => {
    dispatch(fetchUser(token));
  }, [token, dispatch]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
