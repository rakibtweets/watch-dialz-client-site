import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Fade from 'react-reveal/Fade';
import { Container, Table } from 'react-bootstrap';
import swal from 'sweetalert';

const MyOrders = () => {
  const { user } = useAuth();
  const [myOders, setMyOrders] = useState([]);

  useEffect(() => {
    const url = `https://fast-basin-80708.herokuapp.com/myBuyingList/${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyOrders(data);
      });
  }, [user?.email]);

  const handleCancelBooking = (id) => {
    // confirmation alert
    swal({
      title: 'Are you sure?',
      text: 'Your Booking You will be deleted',
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
              const remainingData = myOders?.filter(
                (bookList) => bookList?._id !== id
              );
              setMyOrders(remainingData);
              swal('Deleted Successfully!', 'Your Order cancel', 'success');
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div style={{ background: '#FFFFF', boxShadow: '0 0 5px 0 gray' }}>
        <h4 className="fw-bold text-center py-4">
          My <span className="text-info">Orders</span>{' '}
        </h4>
      </div>
      <h4 className="fw-bold text-center text-success my-3">
        Total Order: {myOders.length}
      </h4>

      <Container>
        <Table striped bordered hover responsive variant="light">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Watch Model</th>
              <th>Booking Date</th>
              <th>Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          {myOders?.map((myOder, index) => (
            <tbody key={myOder?._id}>
              <Fade left cascade>
                <tr>
                  <td>{index + 1}</td>
                  <td>{myOder?.buyerName}</td>
                  <td>{myOder?.email}</td>
                  <td>{myOder?.address}</td>
                  <td>{myOder?.watch?.modelName}</td>
                  <td>{myOder?.bookingDate}</td>
                  <td className=" fw-bold">$ {myOder?.watch?.pricing}</td>
                  <td className=" d-flex justify-content-between align-items-center gap-3">
                    <p
                      className={
                        myOder?.status === 'Pending'
                          ? 'text-danger fw-bold'
                          : 'text-success fw-bold'
                      }
                    >
                      {myOder?.status}
                    </p>
                    <button
                      onClick={() => handleCancelBooking(myOder?._id)}
                      className="btn bg-danger py-2 px-3 text-white fw-bold "
                      title="Delete"
                    >
                      X
                    </button>
                  </td>
                </tr>
              </Fade>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default MyOrders;
