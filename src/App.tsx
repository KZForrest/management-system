import { useEffect } from 'react'
import { useRoutes, useLocation, useNavigate } from "react-router-dom"
import router from "./router"
import { message } from "antd"

function ToPage1(){
  const navigateTo = useNavigate();
  useEffect(()=> {
    navigateTo("/page1")
  },[])
  return <div></div>
}

function ToLogin(){
  const navigateTo = useNavigate();
  useEffect(()=> {
    navigateTo("/login")
    message.warning("您还没有登陆")
  },[])
  return <div></div>
}


function BeforeRouterEnter(){
  const outlet = useRoutes(router);
  
  //如果访问的是登陆页面，并且有token，跳转到首页
  //如果访问的不是登陆页面，并且没有token，跳转到登陆页
  //其余都可以正常放行

  const location = useLocation();
  let token = localStorage.getItem("kzf-react-management-token");

  if(location.pathname==="/login" && token){
    //不能直接navigateTo, 因为需要BeforeRouterEnter是一个正常的jsx组件
    return <ToPage1 />
  }

  if(location.pathname!=="/login" && !token){
    //不能直接navigateTo, 因为需要BeforeRouterEnter是一个正常的jsx组件
    return <ToLogin />
  }


  return outlet
}

function App() {
  const outlet = useRoutes(router)

  return (
    <div className="App">
      {/* <Link to="/home"> Home </Link>  |
      <Link to="/about"> About </Link>  |
      <Link to="/user"> User </Link>   */}
      <BeforeRouterEnter />
    </div>
  )
}

export default App
