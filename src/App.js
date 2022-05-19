import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEvent from "./Components/Admin/AddEvent/AddEvent";
import AdminMain from "./Components/Admin/AdminMain/AdminMain";
import RegisteredUsers from "./Components/Admin/RegisteredUsers/RegisteredUsers";
import Blog from "./Components/Client/Blog/Blog";
import Donation from "./Components/Client/Donation/Donation";
import Events from "./Components/Client/Events/Events";
import Header from "./Components/Client/Header/Header";
import Home from "./Components/Client/Home/Home";
import Login from "./Components/Client/Login/Login";
import NotFound from "./Components/Client/NotFound/NotFound";
import Register from "./Components/Client/Register/Register";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="donation" element={<Donation></Donation>}></Route>
        <Route path="events" element={<Events></Events>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="admin" element={<AdminMain></AdminMain>}>
          <Route index element={<RegisteredUsers></RegisteredUsers>}></Route>
          <Route
            path="donner-list"
            element={<RegisteredUsers></RegisteredUsers>}
          ></Route>
          <Route path="add-event" element={<AddEvent></AddEvent>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
