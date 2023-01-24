import {Carousel, Card, Button} from 'react-bootstrap';
import "../styles/components/slide.scss";
import rickMorty from '../images/rickymorty.jpg';
import adaCards from '../images/adacards.jpg';
import alohomora from '../images/alohomora.png';
import pillow from '../images/pillows.jpg';
import anonymous from '../images/anonymous.jpg';


const SlideBigScreen = () => {
    return (
      
      <Carousel className='carousel carousel-dark' interval={null}>

        {/* 1ST SLIDE */}

      <Carousel.Item className='carousel_item'>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={rickMorty} />
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
            <Card.Img className="img" variant="top" src="https://via.placeholder.com/100/" />
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
            <Card.Img className="img" variant="top" src={anonymous} />
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
            <Card.Img className="img" variant="top" src={alohomora} />
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
            <Card.Img className="img" variant="top" src={adaCards} />
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
            <Card.Img className="img" variant="top" src={pillow} />
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

      {/* <Carousel.Item className='carousel_item'>
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
      </Carousel.Item> */}
    </Carousel>
  );
}

export default SlideBigScreen;