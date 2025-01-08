import { Layout, Menu, MenuProps } from "antd";
import {
  DashboardFilled,
  ProfileFilled,
  UserAddOutlined,
} from "@ant-design/icons";
import { createElement } from "react";
import { Outlet } from "react-router-dom";

const { Content, Header, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "01",
    label: "Dashboard",
    icon: createElement(DashboardFilled),
  },
  {
    key: "02",
    label: "Profile",
    icon: createElement(ProfileFilled),
  },
  {
    key: "03",
    label: "User Management",
    icon: createElement(UserAddOutlined),
    children: [
      {
        key: "04",
        label: "Create Admin",
      },
      {
        key: "05",
        label: "Create Student",
      },
      {
        key: "06",
        label: "Create Faculty",
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>PH University</h1>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
