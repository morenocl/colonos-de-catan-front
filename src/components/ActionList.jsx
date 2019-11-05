import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

const renderAction = (action) => (
    <tr>
      <td> {action} </td> <td> <Button variant="outline-warning">X</Button> </td>
    </tr>
);

const actionsToTable = (actions) => (
    <Table>
      <tbody>
	{actions.map((a) => renderAction(a))}
      </tbody>
    </Table>
);

const ActionList = ({ actions }) => (
    <Container>
      {actionsToTable(actions)}
    </Container>
);

export default ActionList;

ActionList.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
