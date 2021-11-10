import React, { useState } from 'react';
import { Collapse, Nav } from 'react-bootstrap';
import { Drawer } from 'react-bootstrap-drawer';
import 'react-bootstrap-drawer/lib/style.css';
import { Link } from 'react-router-dom';

const DashboardSideApp = ({ url }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <Drawer>
      <div className=" d-flex justify-content-between align-content-center">
        <h5 className=" pt-3">Dashboard</h5>
        <Drawer.Toggle onClick={handleToggle} />
      </div>

      <Collapse in={open}>
        <Drawer.Overflow>
          <Drawer.ToC>
            <Nav.Link as={Link} to="/watches">
              Watches
            </Nav.Link>

            <Drawer.Nav>
              <Nav className=" d-flex flex-column justify-content-center ">
                <Nav.Link as={Link} to={`${url}/addProducts`}>
                  Add Products
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}`}>
                  Manage Orders
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/makeAdmin`}>
                  Make Admin
                </Nav.Link>
              </Nav>
            </Drawer.Nav>
          </Drawer.ToC>
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  );
};

export default DashboardSideApp;
