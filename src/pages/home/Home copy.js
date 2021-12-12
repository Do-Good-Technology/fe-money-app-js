import { Button, Tabs } from "antd";
import { NavBar, TabBar } from 'antd-mobile'
import {
    Route,
    Routes,
    Switch,
    useHistory,
    useNavigate,
    useLocation,
    MemoryRouter as Router,
} from 'react-router-dom'
import {
    AppOutline,
    MessageOutline,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'
// import styles from './demo2.less'

const Bottom = () => {
    // const history = useHistory()
    const navigate = useNavigate();
    const location = useLocation()
    const { pathname } = location

    const setRouteActive = (value) => {
        // history.push(value)
        navigate(value);
    }

    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '/todo',
            title: '我的待办',
            icon: <UnorderedListOutline />,
        },
        {
            key: '/message',
            title: '我的消息',
            icon: <MessageOutline />,
        },
        {
            key: '/me',
            title: '个人中心',
            icon: <UserOutline />,
        },
    ]

    return (
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
}

function Home() {
    return <div>首页</div>
}

function Todo() {
    return <div>我的代办</div>
}

function Message() {
    return <div>我的消息</div>
}

function PersonalCenter() {
    return <div>个人中心</div>
}

export default function App() {
    const navigate = useNavigate();
    return (
        <>
            <Button onClick={() => navigate('/homeasd')}>onClick</Button>
            <Router initialEntries={['/home']}>
                <div className="app">
                    <div className="top">
                        <NavBar>配合路由使用</NavBar>
                    </div>
                    <div className="body">
                        <Routes>
                            {/* <Route exact path='/home'>
                            <Home />
                        </Route> */}
                            <Route path='/home' element={<Home />} />
                            <Route exact path='/todo' element={<Todo />} />
                            <Route exact path='/message' element={<Message />} />
                            <Route exact path='/me' element={<PersonalCenter />} />
                        </Routes>
                    </div>
                    <div className="bottom">
                        <Bottom />
                    </div>
                </div>
            </Router>
        </>
    )
}