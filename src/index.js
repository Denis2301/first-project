import reportWebVitals from "./reportWebVitals";
// import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./StoreContext";
import { Provider } from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rerenderEntireThree = (store) => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
};
rerenderEntireThree(store);
store.subscribe(() => {
    rerenderEntireThree(store);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
