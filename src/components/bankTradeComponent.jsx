
import PropTypes from 'prop-types';
import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const BankTradeComponent = ({
  offerH, requestH, trader, gives, takes
}) => (
  <Row>
    <Col xs={4}>
      <DropdownButton title="Offer" id="offer" onSelect={offerH}>
        <Dropdown.Item eventKey="brick">Brick (x4)</Dropdown.Item>
        <Dropdown.Item eventKey="lumber">Lumber (x4)</Dropdown.Item>
        <Dropdown.Item eventKey="wool">Wool (x4)</Dropdown.Item>
        <Dropdown.Item eventKey="grain">Grain (x4)</Dropdown.Item>
        <Dropdown.Item eventKey="ore">Ore (x4)</Dropdown.Item>
      </DropdownButton>
    </Col>
    <Col xs={4}>
      <DropdownButton title="Request" id="request" onSelect={requestH}>
        <Dropdown.Item eventKey="brick">Brick (x1)</Dropdown.Item>
        <Dropdown.Item eventKey="lumber">Lumber (x1)</Dropdown.Item>
        <Dropdown.Item eventKey="wool">Wool (x1)</Dropdown.Item>
        <Dropdown.Item eventKey="grain">Grain (x1)</Dropdown.Item>
        <Dropdown.Item eventKey="ore">Ore (x1)</Dropdown.Item>
      </DropdownButton>
    </Col>
    <Col xs={4}>
      <Button variant="success" onClick={trader} disabled={gives === '' || takes === '' || gives === takes}>Trade</Button>
    </Col>
  </Row>
);

export default BankTradeComponent;

BankTradeComponent.propTypes = {
  offerH: PropTypes.func.isRequired,
  requestH: PropTypes.func.isRequired,
  trader: PropTypes.func.isRequired,
  gives: PropTypes.string.isRequired,
  takes: PropTypes.string.isRequired,
};
