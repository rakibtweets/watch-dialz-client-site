import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageProducts = () => {
  const [watches, setWatches] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    fetch('https://fast-basin-80708.herokuapp.com/allWatches')
      .then((res) => res.json())
      .then((data) => {
        setWatches(data);
        setIsloading(false);
      });
  }, [isloading]);

  // DELETE Product

  const handleDeleteProduct = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Your Order You will be deleted',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://fast-basin-80708.herokuapp.com/deleteProduct/${id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingProduct = watches?.filter(
                (orderList) => orderList?._id !== id
              );
              setWatches(remainingProduct);
              swal(
                'Deleted Successfully!',
                'Product has been deleted',
                'success'
              );
            }
          });
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
          Manage <span className="text-info">Products</span>{' '}
        </h5>
      </div>
      <div className="text-center">
        {isloading ? (
          <Spinner className="mt-3" animation="border" variant="danger" />
        ) : (
          <Container className="mb-5">
            <Row xs={1} md={2} lg={3} className="gx-3 gy-4">
              {watches.map((watch) => (
                <Col key={watch._id} className=" d-block d-lg-flex">
                  <Card className="watch-card">
                    <Card.Img className="card-img" src={watch?.watchImg} />
                    <Card.Body className=" text-center py-3 ">
                      <h5 className=" text-success fw-bold">
                        {watch?.modelName}
                      </h5>
                      <h6 className=" text-secondary fw-bold">
                        {watch?.brand}
                      </h6>
                      <h5 className=" fw-bold"> $ {watch?.pricing}</h5>
                      <h6 className=" fw-bold text-secondary">
                        {' '}
                        {watch?.availability}
                      </h6>
                    </Card.Body>
                    <Button
                      onClick={() => handleDeleteProduct(watch?._id)}
                      className="btn btn-danger "
                    >
                      Delete
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </div>
    </>
  );
};

export default ManageProducts;
