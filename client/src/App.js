import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ActivationPage, LoginPage, SignupPage } from "./routes/Routes.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
