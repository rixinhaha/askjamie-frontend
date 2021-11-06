import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Pages from "./pages";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>

  );
}

export default App;
