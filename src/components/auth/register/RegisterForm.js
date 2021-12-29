import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Typography,
  message
} from "antd";
import md5 from "md5";
import { useNavigate } from "react-router-dom";
import { onFetch } from "../../../helpers/onFetch";

const { Text, Link: AntdLink } = Typography;

const onFinishFailed = (errorInfo) => {
  message.error({
    content: "check your form",
    duration: 2
  });
};

//? todo
// RegisterForm
// _ name
// _ email
// _ password
// _ confirm password
// _ I agree with the Terms and Conditions
// _ Sign Up button
export default function RegisterForm() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {

    const keyValue = {
      name_user: values.name,
      email_user: values.email,
      password_user: md5(values.password)
    };
    const link = "auth/register";

    const data = await onFetch(keyValue, link);

    if (data?.status === "success") {
      localStorage.setItem("auth", JSON.stringify(data?.auth));

      message.success({
        content: "New Account Successfully Registered, Welcome",
        duration: 2
      });
      navigate("/");
    }

    if (
      data?.status === "failed" &&
      data?.info === "email already has registered"
    ) {
      message.warn({
        content: "email already has registered",
        duration: 2
      });
    }
  };

  return (
    <Row justify="center">
      <Col span={20}>
        <Form
          name="register"
          form={form}
          onFinish={onFinish}
          // onFinish={() => onClickFinish({ form })}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
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
                message: "Please input your password!"
              }
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!"
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement"))
              }
            ]}
          >
            <Checkbox>
              <Text>
                I agree with <AntdLink>the Terms and Conditions</AntdLink>
              </Text>
            </Checkbox>
          </Form.Item>
          <Row justify="center">
            <Col span={20}>
              <Form.Item>
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                >
                  Register
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
    // <>uy regiter form</>
  );
}
