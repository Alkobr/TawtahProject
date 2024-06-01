import "./App.css";
import { MantineProvider } from "@mantine/core";
import HomePage from "./Page/HomePage/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AuthContextProvider from "./Context/Auth/AuthContextProvider";
import LogIn from "./Page/LogIn/LogIn";
import Signup from "./Page/SignUp/Signup";

const TokenChecker = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/LogIn" />;
  }
  return children;
};

function App() {
  return (
    <MantineProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/HomePage"
              element={
                <TokenChecker>
                  <NavBar/>
                  <HomePage />
                </TokenChecker>
              }
            />
            <Route path="/SignUp" element={<Signup/>}/>
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/" element={<Navigate to="/HomePage" />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </MantineProvider>
  );
}

export default App;
