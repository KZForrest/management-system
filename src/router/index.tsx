import App from "../App"
import Home from "../views/Home"
import { Navigate } from "react-router-dom"
import React, { lazy } from "react"
// const About = lazy (() => import("../views/About"))
// const User = lazy (() => import("../views/User"))
const Page1 = lazy (() => import("../views/Page1"))
const Page2 = lazy (() => import("../views/Page2"))
const Page301 = lazy (() => import("../views/Page301"))
//懒加载需要加一层React.Suspense

const withLoadingComponent = (comp:JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    //嵌套路由
    {
        path: "/",
        element:<Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children:[
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/page3/page301",
                element: withLoadingComponent(<Page301 />)
            }
        ]
    },
    {
        path:"*",
        element:<Navigate to="/page1" />
    }
]

export default routes