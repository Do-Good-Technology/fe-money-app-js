import {
    useNavigate,
    useLocation,
} from "react-router-dom";
import {
    AppOutline,
    MessageFill,
    UnorderedListOutline,
    FolderOutline,
    UserOutline
} from 'antd-mobile-icons'
import { TabBar as TabBarAntdm } from 'antd-mobile'


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
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const setRouteActive = (value) => {
        navigate(value)
    }

    return (
        <TabBarAntdm activeKey={pathname} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBarAntdm>
    )
}