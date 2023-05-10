import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import style from './Team.module.css'
import {useNavigate} from 'react-router-dom'

function GroupExample() {

    const navigate = useNavigate()
    function gototeam () {
        navigate('/team')
    }

  return (
    <div className={style.TrainersCards}>
<div className={style.Team}>
    <h2> Meet Our Team </h2> 
    <p> "Experience the difference with our team of expert trainers who are dedicated to helping you reach your fitness goals." </p>
    </div>
<CardGroup className = {style.trainersContainer}>
      <Card className={style.TrainersProfile}>
        <Card.Img variant="top" className={style.TrainersPicture} src="https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body className={style.TrainersInfo}>
            <h3> Trainer's name: John Smith </h3>
            <p> Specialization: Weight training </p>
            <p> Experience: 5 years </p>
        </Card.Body>
      </Card>
      <Card className={style.TrainersProfile}>
        <Card.Img variant="top" className={style.TrainersPicture} src="https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body className={style.TrainersInfo}>
            <h3> Trainer's Name: Sarah Johnson</h3>
            <p>Specialization: Cardiovascular fitness </p>
            <p> Experience: 3 years  </p>
        </Card.Body>
      </Card>
      <Card className={style.TrainersProfile}>
        <Card.Img variant="top" className={style.TrainersPicture} src="https://images.pexels.com/photos/6456140/pexels-photo-6456140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
        <Card.Body className={style.TrainersInfo}>
            <h3> Trainer's Name: Michael Lee</h3>
            <p> Specialization: Sports-specific training </p>
            <p>Experience: 7 years</p>
        </Card.Body>
      </Card>
    </CardGroup>
    <div className={style.Tbtn}>
    <Button onClick={gototeam} variant="outline-success">Know Your Trainers</Button>

    </div>
    </div>
  );
}

export default GroupExample;