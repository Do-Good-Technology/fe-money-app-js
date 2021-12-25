import { Col, Image, Row, Form as AntdForm } from 'antd'

import LogoIcon from '../../../assets/icons/logo.svg';

const Logo = () => (
    <Image alt='' src={LogoIcon} width="50vw" preview={false} />
)

const Form = () => {
    return (
        // <Form
        //     name="register"

        // >

        // </Form>
        <></>
    )
}

//? Todo
// Register
// _ Logo
// _ Form
export default function Register() {
    return (
        <Row justify="center" style={{ paddingTop: '100px' }}>
            <Col span={12}>
                <Logo />
            </Col>

        </Row>
    )
}