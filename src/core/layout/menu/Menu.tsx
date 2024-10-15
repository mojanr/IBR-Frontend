"use client"

import { Menu as AntdMenu, type MenuProps } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'auth',
    label: 'Auth',
    // icon: <MailOutlined />,
    children: [
      {
        key: '/main/auth/user',
        label: <Link href="/main/auth/user"> User </Link>,
      },
    ],
  },
  {
    key: 'assesment',
    label: 'Assesment',
    // icon: <MailOutlined />,
    children: [
      {
        key: '/main/assesment/appearance',
        label: <Link href="/main/assesment/appearance"> Appearance </Link>,
      },
      {
        key: '/main/assesment/game-management',
        label: <Link href="/main/assesment/game-management"> Game Management </Link>,
      },
      {
        key: '/main/assesment/mechanical-court',
        label: <Link href="/main/assesment/mechanical-court"> Mechanical Court </Link>,
      },
      // {
      //   key: '/main/assesment/play-calling',
      //   label: <Link href="/main/assesment/play-calling"> Play Calling </Link>,
      // },
    ],
  },
  {
    key: 'event',
    label: <Link href="/main/event"> Event </Link>,
  },
];

const Menu = () => {

  // use pathname
  const pathname = usePathname()

  return (
    <AntdMenu
      // onClick={onClick}
      // style={{ width: 256 }}
      defaultSelectedKeys={[pathname]}
      defaultOpenKeys={[pathname]}
      mode="inline"
      items={items}
    />
  );
}

export default Menu;