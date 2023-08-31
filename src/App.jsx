import "./App.css";
import React from "react";
import { Button, notification, Space } from "antd";
import Excersice1 from "./Excersice 1/Excersice1";
import Excersice2 from "./Excersice 2/Excersice2";
// import {GithubOutlined} from "@ant-design/icons"
// import {AndroidOutlined} from "@ant-design/icons"
// import { QqOutlined } from "@ant-design/icons";
function App() {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };
  return (
    <>
      {/* <button className="q-button q-button-primary">Add</button>
      <input className="q-input" type="text" placeholder="Search" />
      <h1 className="bg-rose-300">Hello</h1> */}

      {/* {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon("success")}>
          Success
        </Button>
        <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
        <Button onClick={() => openNotificationWithIcon("warning")}>
          Warning
        </Button>
        <Button onClick={() => openNotificationWithIcon("error")}>Error</Button>
      </Space>
      <GithubOutlined style={{ fontSize: 50, color: "pink" }} />
      <AndroidOutlined style={{ fontSize: 50, color: "aqua" }} />
      <QqOutlined style={{ fontSize: 100, color: "pink" }} /> */}
      {/* <Excersice1 /> */}
      <Excersice2 />
      
    </>
  );
}

export default App;
