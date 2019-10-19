import React from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormText from 'react-bootstrap/FormText';
import PropTypes from 'prop-types';

import Error from '../Error';

import './Signup.css';


const Signup = (props) => {
    const {
        data, handleSubmit, handleInputChange,
    } = props;
    const {
        username, password, loading, errorMessage, formErrors,
    } = data;

    const userForm = (
        <FormGroup bssize="large">
            <FormLabel>
                Username
      </FormLabel>
            <FormControl
                autoFocus
                name="username"
                onChange={handleInputChange}
                type="text"
                value={username}
            />
            <FormText className="text-muted">
                {formErrors.username}
            </FormText>
        </FormGroup>
    );

    const passForm = (
        <FormGroup bssize="large">
            <FormLabel>
                Password
      </FormLabel>
            <FormControl
                name="password"
                onChange={handleInputChange}
                type="password"
                value={password}
            />
            <FormText className="text-muted">
                {formErrors.password}
            </FormText>
        </FormGroup>
    );

    const button = (
        <Button
            block
            bssize="large"
            disabled={loading}
            type="submit"
        >
            {loading ? 'Loading...' : 'Registrar'}
        </Button>
    );

    return (
        <div className="Signup">
            {errorMessage && <Error message={errorMessage} />}
            <form onSubmit={handleSubmit}>
                {userForm}
                {passForm}
                {button}
            </form>
        </div>
    );
};

export default Signup;


Signup.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        errorMessage: PropTypes.string.isRequired,
        formErrors: PropTypes.shape({
            username: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
};
