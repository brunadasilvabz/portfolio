import {Carousel, Card, Button} from 'react-bootstrap';
import "../styles/components/slide.scss";
import gatito1 from '../images/gatito1.jpg';
import gatito2 from '../images/gatito2.jpg';
import gatito3 from '../images/gatito3.jpg';
// import gatito4 from '../images/gatito4.jpg';


const SlideBigScreen = () => {
    return (
      
      <Carousel className='carousel carousel-dark' interval={null}>

        {/* 1ST SLIDE */}

      <Carousel.Item className='carousel_item'>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={gatito1} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className='card_body-div'>
              <Button className='button' variant="primary">Go somewhere</Button>
              <Button className='button' variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={gatito1} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className='card_body-div'>
              <Button className='button' variant="primary">Go somewhere</Button>
              <Button className='button' variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={gatito1} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className='card_body-div'>
              <Button className='button' variant="primary">Go somewhere</Button>
              <Button className='button' variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
      </Carousel.Item>

        {/* 2ND SLIDE */}

      <Carousel.Item className='carousel_item'>
      <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={gatito2} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className='card_body-div'>
              <Button className='button' variant="primary">Go somewhere</Button>
              <Button className='button' variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={gatito2} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className='card_body-div'>
              <Button className='button' variant="primary">Go somewhere</Button>
              <Button className='button' variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={gatito2} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className='card_body-div'>
              <Button className='button' variant="primary">Go somewhere</Button>
              <Button className='button' variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
        </Carousel.Item>

        {/* 3ND SLIDE */}

      <Carousel.Item className='carousel_item'>
      <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={gatito3} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className='card_body-div'>
              <Button className='button' variant="primary">Go somewhere</Button>
              <Button className='button' variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={gatito3} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className='card_body-div'>
              <Button className='button' variant="primary">Go somewhere</Button>
              <Button className='button' variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={gatito3} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className='card_body-div'>
              <Button className='button' variant="primary">Go somewhere</Button>
              <Button className='button' variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideBigScreen;