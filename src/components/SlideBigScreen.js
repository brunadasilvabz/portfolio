import {Carousel, Card} from 'react-bootstrap';
import "../styles/components/slide.scss";
import rickMorty from '../images/rickymorty.png';
import adaCards from '../images/adacards.png';
import alohomora from '../images/alohomora.png';
import pillow from '../images/pillows.png';
import anonymous from '../images/anonymous.jpg';
import breakingBad from '../images/breakingbad.png';


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
            <Card.Title className='card_body-title'>Rick and Morty</Card.Title>
            <Card.Text className='card_body-text'>
            Buscador de personajes con filtros por nombre y especie. Además, al hacer click en los personajes, aparece una página con sus detalles. Proyecto individual.
            </Card.Text>
            <Card.Text className='card_body-text'>
              HTML, SASS, API, React
            </Card.Text>
            <div className='card_body-div'>
              <button className='button' variant="primary">Código</button>
              <button className='button' variant="primary">Web</button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={breakingBad} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Breaking Bad</Card.Title>
            <Card.Text className='card_body-text'>
            Buscador de personajes con filtrado por nombre y con funcionalidad de guardado en favoritos con LocalStorage. Proyecto individual.
            </Card.Text>
            <Card.Text className='card_body-text'>
              HTML, SASS, API, JavaScript
            </Card.Text>
            <div className='card_body-div'>
              <button className='button' variant="primary">Código</button>
              <button className='button' variant="primary">Web</button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={anonymous} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Anonymous Proxy</Card.Title>
            <Card.Text className='card_body-text'>
              Web no funcional. Diseño predeterminado recibido a través de Zeplin para poder practicar maquetación (flex, grid, etc). Proyecto individual.
            </Card.Text>
            <Card.Text className='card_body-text'>
              HTML, SASS
            </Card.Text>
            <div className='card_body-div'>
              <button className='button' variant="primary">Código</button>
              <button className='button' variant="primary">Web</button>
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
            <Card.Title className='card_body-title'>Alohomora Cards</Card.Title>
            <Card.Text className='card_body-text'>
              Página para crear tarjetas de presentación personalizadas. Migración de un código heredado a React y creación de nuestro propio servidor. Proyecto grupal.
            </Card.Text>
            <Card.Text className='card_body-text'>
              HTML, SASS, React, SQL
            </Card.Text>
            <div className='card_body-div'>
              <button className='button' variant="primary">Código</button>
              <button className='button' variant="primary">Web</button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={adaCards} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Adacards</Card.Title>
            <Card.Text className='card_body-text'>
              Página para crear tarjetas de presentación. Trabajamos maquetación y funcionalidades para customizar la tarjeta. Proyecto grupal.
            </Card.Text>
            <Card.Text className='card_body-text'>
              HTML, SASS, JavaScript
            </Card.Text>
            <div className='card_body-div'>
              <button className='button' variant="primary">Código</button>
              <button className='button' variant="primary">Web</button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src={pillow} />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Pillow Heads</Card.Title>
            <Card.Text className='card_body-text'>
              Página de presentación de nuestro equipo. Trabajamos solo la maquetación con un diseño predeterminado recibido a través de Zeplin. Proyecto grupal.
            </Card.Text>
            <Card.Text className='card_body-text'>
              HTML, SASS
            </Card.Text>
            <div className='card_body-div'>
              <button className='button' variant="primary">Código</button>
              <button className='button' variant="primary">Web</button>
            </div>
          </Card.Body>
        </Card>
        </Carousel.Item>

        {/* 3ND SLIDE */}

      {/* <Carousel.Item className='carousel_item'>
      <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src="#" />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text className='card_body-text'>
              HTML, SASS, React
            </Card.Text>
            <div className='card_body-div'>
              <Button className='button' variant="primary">Go somewhere</Button>
              <Button className='button' variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src="#" />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text className='card_body-text'>
              HTML, SASS, React
            </Card.Text>
            <div className='card_body-div'>
              <Button className='button' variant="primary">Go somewhere</Button>
              <Button className='button' variant="primary">Go somewhere</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <div className='card_imgWrapper'>
            <Card.Img className="img" variant="top" src="#" />
          </div>
          <Card.Body className='card_body'>
            <Card.Title className='card_body-title'>Card Title</Card.Title>
            <Card.Text className='card_body-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text className='card_body-text'>
              HTML, SASS, React
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