import { Col, Image, Row, Form as AntdForm, Typography } from 'antd'

import RegisterForm from '../../../components/auth/register/RegisterForm';
import LogoIcon from '../../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';

const { Text, Link: AntdLink } = Typography

const Logo = () => (
    <Image alt='' src={LogoIcon} width="50vw" preview={false} />
)

const ToLogin = () => (
    <Text>Have an Account ? {' '}
        <Link to="/login">
            <AntdLink>Log in</AntdLink>
        </Link>
    </Text>
)

//? Todo
// Register
// _ Logo
// _ RegisterForm
// _ ToLogin have account
export default function Register() {
    return (
        <Row justify="center" gutter={[0, 18]} style={{ paddingTop: '64px' }}>
            <Col span={24}>
                <Row justify='center'>
                    <Col>
                        <Logo />
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <RegisterForm />
                <Row justify='center'>
                    <Col >
                        <ToLogin />
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
            </Col>
        </Row>
    )
}