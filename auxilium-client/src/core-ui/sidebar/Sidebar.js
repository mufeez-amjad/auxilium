import React from "react";
import { Layout, Menu, Icon } from "antd";
import styled from "styled-components";
import { Borrowers } from "../borrowers/Borrowers";
import { Dashboard } from "../dashboard/Dashboard";
import { Settings } from "../settings/Settings";

const { Header, Content, Footer, Sider } = Layout;

const Container = styled.div`
  margin: 10px;
`;

export class Sidebar extends React.Component {
  state = {
    collapsed: false,
    chosenIndex: 0
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
            <Menu.Item
              key="0"
              onClick={() => this.setState({ chosenIndex: 0 })}
            >
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item
              key="1"
              onClick={() => this.setState({ chosenIndex: 1 })}
            >
              <Icon type="book" />
              <span>Borrowers</span>
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => this.setState({ chosenIndex: 2 })}
            >
              <Icon type="setting" />
              <span>Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={{
            minWidth: "1000px",
            color: "white",
            backgroundColor: "white"
          }}
        >
          <Container>
            {(this.state.chosenIndex === 0 && <Dashboard />) ||
              (this.state.chosenIndex === 1 && <Borrowers />) || <Settings />}
          </Container>
          <Footer style={{ textAlign: "center" }}>Auxilium</Footer>
        </Layout>
      </Layout>
    );
  }
}
