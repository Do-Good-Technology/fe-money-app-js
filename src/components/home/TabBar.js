import { Button } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'


const tabs = [
    {
        key: 'home',
        title: '首页',
        icon: <AppOutline />,
    },
    {
        key: 'todo',
        title: '我的待办',
        icon: <UnorderedListOutline />,
        badge: '5',
    },
    {
        key: 'message',
        title: '我的消息',
        icon: <MessageFill />
    },
    {
        key: 'personalCenter',
        title: '个人中心',
        icon: <UserOutline />,
    },
]

export default function TabBar() {
    return (
        <>
            <hr />
            <Link to="/" >
                <Button>
                    Transactions
                </Button>
            </Link>
            <Link to="/wallet" >
                <Button>
                    Wallet
                </Button>
            </Link>
            <Link to="/account" >
                <Button>
                    Account
                </Button>
            </Link>
            <TabBar>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </>
    )
}