import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import { Drawer, Button} from 'antd';
import './Sections/Navbar.css';

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%',fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>
      <div className="menu__logo">
  <a href="/" style={{}}>HuniCode</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
        </Button>
        <Drawer
          title="Sidebar"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar