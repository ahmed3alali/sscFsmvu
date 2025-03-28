import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import necessary dependencies from react-redux and redux-persist
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store"; // Adjust based on your actual store location

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
