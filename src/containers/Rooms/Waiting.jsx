import React from 'react';


const Waiting = ({ rooms }) => {
  const { id } = useParams(); // o capaz = match.params.id
  // (buscar en la documentacion de react-router)
  const room = getLobby(); //GET /room/<id>

  // Guardar gameId=null en el estado
  // guardar error=false
  // Setear un timer que haga get del roomStatus y guarde la respuesta en gameId
  // hay que ver si somos el dueño o no
  const onClick = () => {
    startGame(id, setGameId, setError(true));
  };

  if (error)
    return (<Error />);

  if (gameId)
    return (<Redirect to={`/game/${gameId}`} />);

  return (
    <WaitingScreen room={room} onClick={iAmOwner ? onClick : null} />
  );
};

export default Waiting;
