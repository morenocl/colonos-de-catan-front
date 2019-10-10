import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import Lobby, { LobbyDetails } from '../src/lobbies/Lobby';


// This connects enzyme to the react adapter.
configure({ adapter: new Adapter() });

describe('Lobby', () => {
  it('should render without crashing', () => {
    const lobby = {
      id: 1, name: 'name', owner: 'owner', players: ['player'], max_players: 1,
    };
    const l = shallow(<Lobby lobby={lobby} />);

    expect(l.isEmptyRender()).to.be.false;
  });

  it('should show card body', () => {
    const lobby = {
      id: 1, name: 'name', owner: 'owner', players: ['player'], max_players: 1,
    };
    const l = shallow(<Lobby lobby={lobby} />);

    const cardBody = (
      <Accordion.Collapse eventKey={lobby.id}>
        <Card.Body>
          <LobbyDetails
            owner={lobby.owner}
            players={lobby.players}
            maxPlayers={lobby.max_players}
            // Not testing selection function.
          />
        </Card.Body>
      </Accordion.Collapse>
    );

    const result = l.children()
      .containsMatchingElement(cardBody);

    expect(result, l.debug()).to.be.true;
  });

  it('should show card header', () => {
    const lobby = {
      id: 1, name: 'name', owner: 'owner', players: ['player'], max_players: 1,
    };
    const l = shallow(<Lobby lobby={lobby} />);

    const cardHeader = (
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={lobby.id}
        >
          {lobby.name}
        </Accordion.Toggle>
      </Card.Header>
    );

    const result = l.children()
      .containsMatchingElement(cardHeader);

    expect(result, l.debug()).to.be.true;
  });
});
