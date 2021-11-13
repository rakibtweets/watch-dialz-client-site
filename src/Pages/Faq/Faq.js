import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faq = () => {
  return (
    <>
      <Container className="pb-5">
        <h3 className="text-center fw-bold my-4">
          Faq <span className="text-info">Question</span>{' '}
        </h3>
        <Accordion className=" w-75 mx-auto" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span className="text-info fw-bold">
                When do I receive my order?
              </span>
            </Accordion.Header>
            <Accordion.Body className="text-secondary">
              When placing the order, a day of shipment is indicated. After the
              order has been placed, the same delivery time will also be stated
              on the order confirmation. It is therefore never possible that
              during the order, the shipping day on the website, is different
              than on the order confirmation.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className="text-info fw-bold">
                I now see the longer delivery time of (a part of) my order. How
                can I cancel it?
              </span>
            </Accordion.Header>
            <Accordion.Body className="text-secondary">
              If the order has a longer delivery time than you had previously
              seen, it is of course possible to cancel (a part of) the order.
              For this you can contact our customer service. They will cancel
              the order for you. The purchase amount will be back on your bank
              account within two working days. When an order has already been
              shipped, it can no longer be cancelled.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <span className="text-info fw-bold">
                When will I receive the invoice for my order?
              </span>
            </Accordion.Header>
            <Accordion.Body className="text-secondary">
              When you have paid for the order, you will not automatically
              receive an invoice for your order. If you wish to receive an
              invoice, this can be done in two ways.The first way is through
              your account at our store. When you log in to your account you can
              see your orders and download the invoice.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <span className="text-info fw-bold">
                When do I receive my order?
              </span>
            </Accordion.Header>
            <Accordion.Body className="text-secondary">
              When placing the order, a day of shipment is indicated. After the
              order has been placed, the same delivery time will also be stated
              on the order confirmation. It is therefore never possible that
              during the order, the shipping day on the website, is different
              than on the order confirmation.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <span className="text-info fw-bold">
                When do I receive my order?
              </span>
            </Accordion.Header>
            <Accordion.Body className="text-secondary">
              When placing the order, a day of shipment is indicated. After the
              order has been placed, the same delivery time will also be stated
              on the order confirmation. It is therefore never possible that
              during the order, the shipping day on the website, is different
              than on the order confirmation.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Faq;
