import React from 'react';
import MainScreen from "./screens/MainScreen";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

const store= configureStore();

console.disableYellowBox = true;//rebuild to activate

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
