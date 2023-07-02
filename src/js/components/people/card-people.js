import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getDataCard } from '../../services/star-wars.services';
import { Context } from '../../store/appContext';
import Placeholder from 'react-bootstrap/Placeholder';



function CardPeopleComponent(prop) {

  const [data, setData] = useState([])
  const { store, actions } = useContext(Context)
  const [ loading, setLoading ] = useState(true)

  useEffect(()=>{
    getDataCard(prop.obj.url).then(data=>{setData(data.result.properties)
    setLoading(false)
    actions.loadDataCharacter(data)})
  },[])


  if(loading)return(
    <>
    <Card className='card-width'>
        <Card.Img variant="top" src={prop.img} />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} />
            <Placeholder xs={6} />
            <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </>
  )


  return (
    <Card className='card-width'>
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>{prop.obj.name}</Card.Title>
        <Card.Text>
            <p>Gender: {data.gender}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Eye-Color: {data.eye_color}</p>
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Link to={"/characterdetail/" + prop.index}>
          <Button variant="outline-primary" obj={data}>Learn more!</Button>
        </Link>
        <Button variant="outline-warning" onClick={() =>{actions.addFavorite(prop.obj.name)}}><i className="fa-regular fa-heart"></i></Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPeopleComponent;