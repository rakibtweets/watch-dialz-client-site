import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import swal from 'sweetalert';

const ManageAllOrders = () => {
  const [manageOders, setManageOrders] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    fetch('https://fast-basin-80708.herokuapp.com/manageAllOrders')
      .then((res) => res.json())
      .then((data) => {
        setManageOrders(data);
      });
  }, [isUpdated]);

  // handle Deleting Order
  const handleCancelOrder = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Your Order You will be deleted',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://fast-basin-80708.herokuapp.com/deleteOrders/${id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingData = manageOders?.filter(
                (orderList) => orderList?._id !== id
              );
              setManageOrders(remainingData);
              swal('Deleted Successfully!', 'Your booking canceld', 'success');
            }
          });
      }
    });
  };

  //handle Approve Order
  const handleApproveOrder = (id) => {
    setIsUpdated(false);
    const updatedOrder = manageOders.find((orderList) => orderList._id === id);
    updatedOrder.status = 'Approved';

    fetch(`https://fast-basin-80708.herokuapp.com/manageAllOrders/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal('Approved', 'Your Booking Approved', 'success');
          setIsUpdated(true);
        }
      });
  };

  return (
    <>
      <div
        style={{ background: '#FFFFF', boxShadow: '0 0 5px 0 gray' }}
        className="d-block w-100 mb-5"
      >
        <h5 className="py-4 text-center fw-bold">
          Manage <span className="text-info">All Orders</span>{' '}
        </h5>
      </div>
      <Container fluid>
        <Table striped bordered hover responsive variant="light">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Booking Date</th>
              <th>Watch Model</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {manageOders?.map((orders, index) => (
            <tbody key={orders?._id}>
              <Fade left cascade>
                <tr>
                  <td>{index + 1}</td>
                  <td>{orders?.buyerName}</td>
                  <td>{orders?.email}</td>
                  <td>{orders?.address}</td>
                  <td>{orders?.bookingDate}</td>
                  <td>{orders?.watch?.modelName}</td>
                  <td>$ {orders?.watch?.pricing}</td>
                  <td className="d-flex justify-content-center gap-2">
                    <p
                      className={
                        orders?.status === 'Pending'
                          ? 'text-danger fw-bold'
                          : 'text-success fw-bold'
                      }
                    >
                      {orders?.status}
                    </p>
                  </td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={() => handleApproveOrder(orders?._id, index)}
                        className="btn btn-success p-2 text-white fw-bold"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleCancelOrder(orders?._id)}
                        className="btn bg-danger py-2 px-3 text-white fw-bold"
                        title="Delete"
                      >
                        x
                      </button>
                    </div>
                  </td>
                </tr>
              </Fade>
            </tbody>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default ManageAllOrders;
