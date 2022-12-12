import { ChangeEvent, useEffect, useState } from "react"
import styles from "./login.module.scss"
import initLoginBg from "./init.ts"
import { Input, Space, Button } from 'antd'
import "./login.less"


const view = () => {

    //加载完这个组件之后,加载背景
    useEffect(() => {
        initLoginBg();
        window.onresize = function () { initLoginBg() };
    }, [])

    //获取用户输入的信息
    const [usernameVal, setUsernameVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [captchaVal, setCaptchaVal] = useState("");
    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        //获取用户输入值
        // console.log(e.target.value);
        setUsernameVal(e.target.value);
    }
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordVal(e.target.value);
    }
    const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCaptchaVal(e.target.value);
    }

    //点击登陆按钮事件
    const gotoLogin = () => {
        console.log(usernameVal, passwordVal, captchaVal);
    }



    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: "block" }}></canvas>

            {/* 登陆盒子 */}
            <div className={styles.loginBox + " loginbox"}>
                {/* 标题部分 */}
                <div className={styles.title}>
                    <h1>KZForrest&nbsp;·&nbsp;通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="用户名" onChange={usernameChange} />
                        <Input.Password placeholder="密码" onChange={passwordChange} />
                        <div className="captchaBox">
                            <Input placeholder="验证码" onChange={captchaChange} />
                            <div className="captchaImg">
                                <img src="" alt="" />
                            </div>
                        </div>
                        <Button type="primary" className="loginBtn" block onClick={gotoLogin}> 登陆 </Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default view 