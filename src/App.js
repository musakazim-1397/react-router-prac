import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import NotificationContext from "./components/store";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./components/reduxStore";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

function App() {
  const notificationCtx = useContext(NotificationContext);
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counterState);
  setTimeout(() => {
    notificationCtx.setNotification("New notification");
  }, 2000);

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default App;
