import React, { useState } from 'react';
import { Breadcrumb, Layout} from 'antd';
import { Outlet } from "react-router-dom";
import MainMenu from "@/components/MainMenu"

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <MainMenu />
            </Sider>
            {/* 右边内容 */}
            <Layout className="site-layout">
                {/* 右边头部 */}
                <Header className="site-layout-background" style={{ paddingLeft: '16px' }} >
                    {/* 面包屑 */}
                    <Breadcrumb style={{ lineHeight: "64px" }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/* 右边白色盒子 */}
                <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
                    {/* 窗口部分 */}
                    <Outlet></Outlet>

                </Content>
                {/* 右边底部 */}
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: "48px" }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;