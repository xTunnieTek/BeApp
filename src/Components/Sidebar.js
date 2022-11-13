import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
const items = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation One - Link
      </a>
    ),
    key: "app",
    icon: <AppstoreOutlined />,
  },
];
function Sidebar() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        selectedKeys={[current]}
        mode="vertical"
        items={items}
      />
    </>
  );
}

export default Sidebar;
