import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';


type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem('栏目1', '/page1', <PieChartOutlined />),
//     getItem('栏目2', '/page2', <DesktopOutlined />),
//     getItem('User', 'page3', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];


//登陆请求到数据后，就可以跟items这个数组进行匹配
const items: MenuItem[] = [
    {
        label: '栏目1',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: '栏目2',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: '栏目3',
        key: '/page3',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目301',
                key: '/page3/page301'
            },
            {
                label: '栏目302',
                key: '/page3/page302'
            },
            {
                label: '栏目303',
                key: '/page3/page303'
            }
        ]
    },
    {
        label: '栏目4',
        key: '/page4',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目401',
                key: '/page4/page401'
            },
            {
                label: '栏目402',
                key: '/page4/page402'
            },
            {
                label: '栏目403',
                key: '/page4/page403'
            }
        ]
    }
]

const Comp: React.FC = () => {
    const navigateTo = useNavigate();
    const currentRoute = useLocation();
    //严格模式的组件都会加载两次
    console.log("------",currentRoute.pathname);


    const menuClick = (e: { key: string }) => {
        // console.log("clicked", e.key);
        //点击要跳转到对应的路由 编程式导航, hook
        navigateTo(e.key)
    }

    //拿着curerntRoute.pathname跟items数组的每一项children的key值进行对比，如果相等就要上一级的Key
    let firstOpenKey:string = "";
    //在这里进行对比
    function findKey(obj:{key:string}) {
        return obj.key === currentRoute.pathname 
    }

    //多对比的是多个children
    for(let i=0; i<items.length; i++){
        //判断是否可以找到/是否存在对象
        if(items[i]!['children'] && items[i]!['children'].length >0 && items[i]!['children'].find(findKey)){
            firstOpenKey = items[i]!.key as string;
            break;
        }
    }

    const [openKeys, setOpenKeys] = useState([firstOpenKey]);

    const handleOpenChange = (keys: string[]) => {

        setOpenKeys([keys[keys.length - 1]]);
        console.log(openKeys)
    }

    return (
        <Menu theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline" items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            openKeys={openKeys}
        />
    )
}

export default Comp;