import { Col, Image, Row, Typography } from "antd";

import LoginForm from "../../../components/auth/login/LoginForm";
import LogoIcon from '../../../assets/icons/logo.svg'
import { Link } from "react-router-dom";


const { Text, Link: AntdLink } = Typography

const Logo = () => (
    <Image alt="" src={LogoIcon} width="100%" preview={false} />
)

//? todo
// Login
// _ Logo
// _ LoginForm
// __ email form
// __ password form
// __ forgot password link
// __ login button
// _ Don’t have an account? Sign up
export default function Login() {
    return (
        <Row gutter={[0, 83]} style={{ paddingTop: '100px' }}>
            <Col span={24}>
                <Row justify="center">
                    <Col span={6}>
                        <Logo />
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row justify="center">
                    <Col span={20}>
                        <LoginForm />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}