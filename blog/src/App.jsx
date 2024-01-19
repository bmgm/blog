import "./App.css";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import PostPage from "./components/pages/postpage/PostPage";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Write from "./components/pages/write/Write";
import TopBar from "./components/topbar/TopBar";

function App() {
  return (
    <>
      {/* <Home /> */}
      <TopBar />
      <Login />
      <Register />

    </>
  );
}

export default App;
