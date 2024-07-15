import { Provider } from "react-redux";
import { store } from "./store";
import Root from "./src/components/App";
export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
