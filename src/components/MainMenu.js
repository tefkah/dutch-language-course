import React from "react";
import {Button, Card, Space} from "antd";
import "antd/dist/antd.css";

const MainMenu = (props) => {
  return (
    <div className="main-menu">
      <Card title="Select Mode">
        <div className="menu-buttons" >
          <Space direction = "vertical" style={{width : '30%'} }>
          <Button type="primary" onClick={() => props.updateMode(1)} size="large" block>Practice</Button>
          <Button type="default" onClick={() => props.updateMode(2)} size="large" block disabled>Test</Button>
          <Button type="default" onClick={() => props.updateMode(3)} size="large" block disabled>Learn</Button>
          </Space>
        </div>
      </Card>
    </div>
  );
}

export default MainMenu;