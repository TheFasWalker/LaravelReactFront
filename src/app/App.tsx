import { Provider } from "react-redux";
import { Navigation } from "./navigation/Navigation";
import { setupStore } from "../entities/store/store";

const store = setupStore()
function App() {
  return (
    <Provider store={store}>
        <Navigation/>
        </Provider>

  );
}

export default App;
