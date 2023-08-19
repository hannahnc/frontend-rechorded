import { Route, Routes } from "react-router-dom";
// import DownloadPage from "../pages/DownloadPage";
import Homepage from "../pages/Homepage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import TransposePage from "../pages/TransposePage"
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {

    return <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/register" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/notes" element={<PrivateRoute><NotesPage /></PrivateRoute>}></Route>
        <Route path="/transpose" element={<PrivateRoute><TransposePage /></PrivateRoute>}></Route>
    </Routes>
}
