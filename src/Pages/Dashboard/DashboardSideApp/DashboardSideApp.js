import React, { useState } from 'react';
import { Collapse, Nav } from 'react-bootstrap';
import { Drawer } from 'react-bootstrap-drawer';
import 'react-bootstrap-drawer/lib/style.css';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './DashboardSideApp.css';

const DashboardSideApp = ({ url }) => {
  const [open, setOpen] = useState(false);
  const { admin } = useAuth();

  const handleToggle = () => setOpen(!open);

  return (
    <Drawer>
      <div className=" d-flex justify-content-between align-content-center">
        <h5 className="pt-4 text-info fw-bold">Dashboard</h5>
        <Drawer.Toggle onClick={handleToggle} />
      </div>

      <Collapse in={open}>
        <Drawer.Overflow>
          <Drawer.ToC className="dashboard-drawer fw-bold">
            <Nav.Link as={Link} to="/watches">
              Watches
            </Nav.Link>

            <Drawer.Nav>
              <Nav className=" user__dashboard d-flex flex-column justify-content-center fw-bold">
                <Nav.Link as={Link} to={`${url}/myOrders`}>
                  My Orders
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/review`}>
                  Review
                </Nav.Link>
                <Nav.Link as={Link} to={`${url}/payment`}>
                  Payment
                </Nav.Link>
              </Nav>
              {admin && (
                <Nav className="admin__dashboard d-flex flex-column justify-content-center fw-bold">
                  <Nav.Link as={Link} to={`${url}/addProducts`}>
                    Add Products
                  </Nav.Link>

                  <Nav.Link as={Link} to={`${url}`}>
                    Manage All Orders
                  </Nav.Link>
                  <Nav.Link as={Link} to={`${url}/manageProducts`}>
                    Manage Products
                  </Nav.Link>

                  <Nav.Link as={Link} to={`${url}/makeAdmin`}>
                    Make Admin
                  </Nav.Link>
                </Nav>
              )}
            </Drawer.Nav>
          </Drawer.ToC>
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  );
};

export default DashboardSideApp;
