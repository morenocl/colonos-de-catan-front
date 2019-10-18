import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-named-as-default
import { actionLabels } from './ActionUtils';
import { ActionType } from '../../utils/ApiTypes';


const mapStateToProps = (state, ownProps) => ({
  actions: state.Game.actions,
  C: ownProps.C,
  actionOnClick: state.Actions.actionOnClick,
  type: ownProps.type,
});

// Renders the component C (a Button by default)
// with the appropriate label, disable and onClick.
const ActionButton = (props) => {
  const { actions, C, type } = props;
  const { actionOnClick } = props;
  const { id } = useParams();

  const a = actions.find((x) => x.type === type);
  const onClick = actionOnClick(id, type)(a && a.payload);

  return (
    <C
      onClick={onClick}
      size="sm"
    >
      {actionLabels[type]}
    </C>
  );
};

export default connect(mapStateToProps)(ActionButton);


ActionButton.propTypes = {
  type: PropTypes.string.isRequired,
  C: PropTypes.elementType,
  actions: PropTypes.arrayOf(ActionType).isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

ActionButton.defaultProps = {
  C: Button,
};
