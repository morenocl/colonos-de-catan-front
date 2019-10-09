import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'


import { playerHand } from '../utils/Api';

export default function Resources() {

    // Constant declared just for testing purposes. It should be deleted before release
    const id = 1;

    const [page, setPage] = useState(undefined);

    const showResources = (Resources) => setPage(
        <ListGroup as="ul">
            {Resources.resources.map((singleResource,i) => <ListGroup.Item as="li" key={i} variant="primary">{singleResource}</ListGroup.Item>)}
        </ListGroup>
    );

    const showError = () => setPage(
        <Alert variant="danger">
        <Alert.Heading>
            Error
        </Alert.Heading>
        There was an error requesting data from server.
        Check your internet connection.
        </Alert>,
    );

    useEffect(() => playerHand(id, showResources, showError), []);

    return (
        <div>
            {page}
        </div>
    );

}