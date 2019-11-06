import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

class ActionList extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    actions: props.actions,
	};
    }

    renderAction(action, remove) {
	return(
	    <tr>
	      <td> {action} </td> <td> <Button variant="outline-warning" onClick={remove}>X</Button> </td>
	    </tr>
	);
    }

    remove(action) {
	this.setState({
	    actions: this.state.actions.filter((a) => a !== action),
	});
    }

    add(action) {
	this.setState({
	    actions: this.state.actions.push(action),
	});
    }

    sendOut() {
	this.setState({
	    actions: [],
	});
    }
    
    actionsToTable(actions) {
	return(
	    <Table>
	      <tbody>
		{actions.map((a) => this.renderAction(a, ()=>{this.remove(a)}))}
	      </tbody>
	    </Table>
	);
    }

    render() {
	return (
	        <Container>
		  {this.actionsToTable(this.state.actions)}
		  <Button onClick={() => {this.sendOut()}}>Send</Button>
		</Container>
	);
    }
}


export default ActionList;

ActionList.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
