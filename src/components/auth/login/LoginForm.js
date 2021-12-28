import { Button, Col, Form, Input, message, Row, Typography } from "antd";
import md5 from "md5";
import { Link, useNavigate } from "react-router-dom";
import { onFetch } from "../../../helpers/onFetch";

const { Text, Link: AntdLink } = Typography

const onFinishFailed = (errorInfo) => {
    message.error({
        content: 'check your form',
        duration: 2
    })
    console.log('Failed:', errorInfo);
};

export default function LoginForm() {
    const navigate = useNavigate()
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log('Success:', values);

        const keyValue = {
            email_user: values.email,
            password_user: md5(values.password)
        }
        const link = 'auth/login'

        const data = await onFetch(keyValue, link);

        if (data.status === 'success') {
            console.log('auth', data?.auth);
            localStorage.setItem('auth', JSON.stringify(data?.auth))

            message.success({
                content: 'welcome',
                duration: 2
            })
            navigate('/');
        }
        if (data.status === 'failed') {
            console.log('status', data?.status);
            if (data?.info === 'email is not registered') {
                message.warn({
                    content: 'email is not registered',
                    duration: 2
                })
            }
            if (data?.info === 'email is correct, password is incorrect') {
                message.warn({
                    content: 'email is correct, password is incorrect',
                    duration: 2
                })
            }
        }
    };

    return (
        <Form
            name="login"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Row gutter={[0, 200]}>
                <Col span={24}>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Row span={24} justify="end">
                        <Col>
                            {/* <Link to="#"> */}
                            <AntdLink>Forgot Password ?</AntdLink>
                            {/* </Link> */}
                        </Col>
                    </Row>
                </Col>

                <Col span={24}>
                    <Row justify="center">
                        <Col span={20}>
                            <Form.Item
                            >
                                <Button style={{ width: "100%" }} type="primary" htmlType="submit">
                                    Log In
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col span={20}>
                            <Row justify="center">
                                <Col>
                                    <Text>Don’t have an account ? {' '}
                                        <Link to="/register">
                                            <AntdLink>Register</AntdLink>
                                        </Link>
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Form>
    )
}