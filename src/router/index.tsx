import App from "../App"
import Home from "../views/Home"
import About from "../views/About"
import User from "../views/User"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import { lazy } from "react"
// const About = lazy (() => import("../views/About"))
// const User = lazy (() => import("../views/User"))
//懒加载需要加一层React.Suspense

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Navigate to="/home"/>}></Route>
                <Route path= "/home" element={<Home/>}></Route>
                <Route path= "/about" element={<About/>}></Route>
                <Route path= "/user" element={<User/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter