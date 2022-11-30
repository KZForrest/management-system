import { useState } from 'react'
import Comp1 from "@/components/Comp1"
import Comp2 from "@/components/Comp2"
import { Button } from 'antd'
import { UpCircleOutlined } from "@ant-design/icons"
import { Outlet, Link } from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Link to="/home"> Home </Link>  |
      <Link to="/about"> About </Link>  |
      <Link to="/user"> User </Link>  
      <Outlet></Outlet>
    </div>
  )
}

export default App
