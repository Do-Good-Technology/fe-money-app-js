import { Affix, Button, Typography } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

/**
 * 
 * @param {link} link
 * @param {text} text
 * @returns {Node} node
 */
export default function MaFloatButton({ link, text = "" }) {
  return (
    <Affix style={{ position: "absolute", bottom: "80px", right: "16px" }}>
      <Link to={link}>
        <Button
          type="primary"
          shape="round"
          icon={<PlusOutlined />}
          size="large"
        >
          {text}
        </Button>
      </Link>
    </Affix>
  );
}
