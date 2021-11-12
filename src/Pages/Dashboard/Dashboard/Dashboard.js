import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardSideApp from '../DashboardSideApp/DashboardSideApp';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProducts/AddProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from '../../Hooks/useAuth';
import UserReviews from '../UserReviews/UserReviews';
import Payment from '../PayMent/Payment';
import ManageProducts from '../ManageProducts/ManageProducts';

const Dashboard = () => {
  const { admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col /* as={DashboardSideApp}  */ sm={12} md={3} lg={3}>
          <DashboardSideApp url={url} />
        </Col>
        <Col sm={12} md={9} lg={9}>
          <Switch>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>
            {admin ? (
              <Route exact path={`${path}`}>
                <ManageAllOrders />
              </Route>
            ) : (
              <Route exact path={`${path}`}>
                <MyOrders />
              </Route>
            )}
            <AdminRoute path={`${path}/addProducts`}>
              <AddProducts />
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts />
            </AdminRoute>
            <Route path={`${path}/myOrders`}>
              <MyOrders />
            </Route>
            <Route path={`${path}/review`}>
              <UserReviews />
            </Route>
            <Route path={`${path}/payment`}>
              <Payment />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
