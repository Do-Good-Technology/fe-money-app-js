import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import md5 from "md5";

const { Text, Link: AntdLink } = Typography;

const onClickFinish = ({ form }) => {
  console.log("getFieldsValue", form.getFieldsValue());

  let formValues = form.getFieldsValue();
  const newPassword = md5(form.getFieldValue("password"));

  console.log("formValues", formValues);

  formValues = {
    ...formValues,
    confirm: "",
    password: newPassword
  };

  console.log("new formValues", formValues);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
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
  const [form] = Form.useForm();

  return (
    <Row justify="center">
      <Col span={20}>
        <Form
          name="register"
          form={form}
          // onFinish={onFinish}
          onFinish={() => onClickFinish({ form })}
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
            // {...tailFormItemLayout}
          >
            <Checkbox>
              <Text>
                I agree with <AntdLink>the Terms and Conditions</AntdLink>
              </Text>
            </Checkbox>
          </Form.Item>
          <Row justify="center">
            <Col span={20}>
              <Form.Item
              // {...tailFormItemLayout}
              >
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
