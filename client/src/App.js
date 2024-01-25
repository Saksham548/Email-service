import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ViewEmail from "./components/ViewEmail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/viewmail/:s/:to/:date/:b/:i" element={<ViewEmail />} />
        </Routes>
      </BrowserRouter>
      {/* <Main /> */}
    </>
  );
}

export default App;
