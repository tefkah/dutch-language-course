import React from "react";
import {Button, Card, Space, Row, Col} from "antd";
import "antd/dist/antd.css";

const MainMenu = (props) => {
  return (
    <div className="main-menu">
      <Card title="Select Mode">
        <div className="menu" >
          <Space direction = "vertical">
            <Row className = "menu-row"><Button type="primary" onClick={() => props.updateMode(1)} size="large" block>Practice</Button></Row>
            <Row className = "menu-row"><Button type="default" onClick={() => props.updateMode(2)} size="large" block disabled>Test</Button></Row>
            <Row className = "menu-row"><Button type="default" onClick={() => props.updateMode(3)} size="large" block disabled>Learn</Button></Row>
          </Space>
        </div>
      </Card>
    </div>
  );
}

export default MainMenu;