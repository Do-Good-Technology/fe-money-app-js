import { Affix } from "antd";

/**
 * 
 * @param {React.ReactNode} Node
 * @returns {ReactReactNode} Node
 */
export default function MaFloat({ children }) {
  return (
    <Affix style={{ position: "absolute", bottom: "80px", right: "16px" }}>
      {children}
    </Affix>
  );
}
