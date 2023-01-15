import React from 'react'
// design
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


// Router
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="login" icon={<MailOutlined />}>
        <Link to="/login">Login</Link>
      </Menu.Item>

      <Menu.Item key="register" icon={<AppstoreOutlined />}>
        <Link to="/register">Register</Link>
      </Menu.Item>

      <Menu.Item key="home" icon={<SettingOutlined />}>
      <Link to="/home">Home</Link>
      </Menu.Item>

    </Menu>
  );
};

export default Navbar