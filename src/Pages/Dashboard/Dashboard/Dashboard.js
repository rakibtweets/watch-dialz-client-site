import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardSideApp from '../DashboardSideApp/DashboardSideApp';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProducts/AddProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col /* as={DashboardSideApp}  */ sm={12} md={3} lg={3}>
          <DashboardSideApp url={url} />
        </Col>
        <Col sm={12} md={9} lg={9}>
          <Switch>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </Route>
            <Route exact path={`${path}`}>
              <ManageAllOrders />
            </Route>
            <Route path={`${path}/addProducts`}>
              <AddProducts />
            </Route>
            <Route path={`${path}/myOrders`}>
              <MyOrders />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
