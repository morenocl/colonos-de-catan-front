import React from 'react';


const Waiting = ({ room, onClick, }) => {
    const { maxPlayers, name, owner, players } = room;
  
    return (
      <>
        <Container>
          {/* Datos */}
        </Container>
        <Button disabled={!onClick} onClick={onClick}>
          Start game
        </Button>
      </>
    );
  };