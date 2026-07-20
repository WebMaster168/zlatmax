import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store"; 
import { router } from "./app/router";
import { Provider } from "react-redux";
 
ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);