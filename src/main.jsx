import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StateContextProvider } from "./Context/StateContext";
import store from "./store";
import { SignUpContextProvide } from "./Context/SignupContext";
import { ProSidebarProvider } from "react-pro-sidebar";
import 'swiper/swiper-bundle.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SignUpContextProvide>
      <BrowserRouter>
      <ProSidebarProvider>
          <StateContextProvider>
            <App />
          </StateContextProvider>
      </ProSidebarProvider>
      </BrowserRouter>
    </SignUpContextProvide>
  </Provider>
)