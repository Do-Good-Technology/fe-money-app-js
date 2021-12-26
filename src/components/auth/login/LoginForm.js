import { Button, Col, Form, Input, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Text, Link: AntdLink } = Typography

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function LoginForm() {
    const [form] = Form.useForm();

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
                            // {...tailFormItemLayout}
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