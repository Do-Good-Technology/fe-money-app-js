import {
    useNavigate,
    useLocation,
} from "react-router-dom";
import {
    UnorderedListOutline,
    FolderOutline,
    UserOutline
} from 'antd-mobile-icons'
import { TabBar as TabBarAntdm } from 'antd-mobile'
import { Card } from "antd";
import { useEffect, useState } from "react";


const tabs = [
    {
        key: '/',
        title: 'Transactions',
        icon: <UnorderedListOutline />,
    },
    {
        key: '/wallet',
        title: 'Wallet',
        icon: <FolderOutline />,
        badge: '5',
    },
    {
        key: '/account',
        title: 'Account',
        icon: <UserOutline />
    },
]

export default function TabBar() {
    const [isHome, setIsHome] = useState(true);
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const setRouteActive = (value) => {
        navigate(value)
    }

    useEffect(() => {
        if (pathname === '/' || pathname === '/wallet' || pathname === '/account') {
            setIsHome(true)
        } else {
            setIsHome(false)
        }
    }, [pathname])

    if (isHome) {
        return (
            <Card bodyStyle={{ padding: "0" }}>
                <TabBarAntdm activeKey={pathname} onChange={value => setRouteActive(value)}>
                    {tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBarAntdm>
            </Card>
        )
    } else {
        return (
            <>you in other demension</>
        )
    }
}