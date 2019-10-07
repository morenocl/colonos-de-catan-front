import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import axios from 'axios'


class DevelopmentCard extends React.Component {
    state = {
        card: []
      }
    
    componentDidMount() {
        axios.get(`http://demo5460123.mockable.io/player`)
        .then(res => {
        const card = res.data;
        this.setState({ card });
        })
        .catch("Bad Request");
      }

   render() {
       return (
           
         <Container>
             <ListGroup>
                {this.state.card.map(infoCards => infoCards.cards.map(singleCard => <ListGroup.Item>{singleCard}</ListGroup.Item>))}
             </ListGroup>
         </Container>
           
       )
   }
}

export default DevelopmentCard