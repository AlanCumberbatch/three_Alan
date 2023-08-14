import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  createFromIconfontCN
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

import WebGPULogo from '@/assets/webGPU.svg';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const MyCustomIcon = createFromIconfontCN({
  scriptUrl: WebGPULogo,// '@/assets/webGPU.svg', // 您的 SVG 图标链接
});

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const getItems = (links) => {
  const lists = links.map((link, index) => {
    /*
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
      type?: 'group',
    */
    if (link.children) {
      const children = link.children.map( child => {
        return getItem(child.name, link.id+'/'+child.value, null);
      })
      return getItem(link.name, link.id, null, children )
    } else {
      return getItem(link.name, link.id, null )
    }
  })

  return [getItem('3D', 'sub', null, lists)];
}

const App: React.FC = ({ links }) => {
  const [menus, setMenus] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  const menuClick = ({ item, key, keyPath, domEvent }) => {
    console.log('%c [ key ]-89', 'font-size:13px; background:pink; color:#bf2c9f;', key)
    // window.location.href = '/three';
    window.location.href = '/'+key;
    console.log('%c [ menuClick -- 点击 MenuItem 调用此函数 ]-88', 'font-size:13px; background:pink; color:#bf2c9f;')
  }
  // const menuOnSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
  //   console.log('%c [ menuOnSelect -- 被选中时调用 ]-88', 'font-size:13px; background:pink; color:#bf2c9f;')
  // }
  // const menuOnDeselect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
  //   console.log('%c [ menuOnDeselect -- 取消选中时调用，仅在 multiple 生效 ]-88', 'font-size:13px; background:pink; color:#bf2c9f;')
  // }
  const menuOnOpenChange = (openKeys: string[]) => {
    console.log('%c [ menuOnOpenChange -- SubMenu 展开/关闭的回调 ]-88', 'font-size:13px; background:pink; color:#bf2c9f;')
  }

  useEffect(() => {
    const items = getItems(links);
    console.log('%c [ items ]-82', 'font-size:13px; background:pink; color:#bf2c9f;', items)
    setMenus(items)
  }, [links])


  return (
    <div style={{ width: 256 }}>
      {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={menus}
        onClick={menuClick}
        // onSelect={menuOnSelect}
        // onDeselect={menuOnDeselect}
        onOpenChange={menuOnOpenChange}
        // expandIcon= (props: SubMenuProps & { isSubMenu: boolean }) => ReactNode
      />

    </div>
  );
};

export default App;