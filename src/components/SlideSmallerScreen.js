/* eslint-disable react/jsx-no-target-blank */
import {Carousel, Card} from 'react-bootstrap';
import "../styles/components/slide.scss";
import rickMorty from '../images/rickymorty.png';
import adaCards from '../images/adacards.png';
import alohomora from '../images/alohomora.png';
import pillow from '../images/pillows.png';
import anonymous from '../images/anonymous.jpg';
import breakingBad from '../images/breakingbad.png';

const SlideSmallerScreen = () => {
    return (
        <Carousel className='carousel carousel-dark' interval={null}>
            <Carousel.Item  className='carousel_item'>
            <Card className='card'>
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
              <button className='button' variant="primary"><a className='btn-link' href='https://github.com/brunadasilvabz/modulo-3-evaluacion-final-brunadasilvabz' target="_blank">Código</a></button>
              <button className='button' variant="primary"><a className='btn-link' href='https://brunadasilvabz.github.io/modulo-3-evaluacion-final-brunadasilvabz/' target="_blank">Web</a></button>
            </div>
          </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item  className='carousel_item'>
            <Card className='card'>
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
              <button className='button' variant="primary"><a className='btn-link' href='https://github.com/brunadasilvabz/modulo-2-evaluacion-final-brunadasilvabz' target="_blank">Código</a></button>
              <button className='button' variant="primary"><a className='btn-link' href='https://brunadasilvabz.github.io/modulo-2-evaluacion-final-brunadasilvabz/' target="_blank">Web</a></button>
            </div>
          </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item  className='carousel_item'>
            <Card className='card'>
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
              <button className='button' variant="primary"><a className='btn-link' href='https://github.com/brunadasilvabz/modulo-1-evaluacion-final-brunadasilvabz ' target="_blank">Código</a></button>
              <button className='button' variant="primary"><a className='btn-link' href='https://brunadasilvabz.github.io/modulo-1-evaluacion-final-brunadasilvabz/' target="_blank">Web</a></button>
            </div>
          </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item  className='carousel_item'>
            <Card className='card'>
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
              <button className='button' variant="primary"><a className='btn-link' href='https://github.com/brunadasilvabz/project-promo-r-module-4-team-5-brunadasilvabz' target="_blank">Código</a></button>
              <button className='button' variant="primary"><a className='btn-link' href='https://project-promo-r-module-4-team-5-production.up.railway.app/' target="_blank">Web</a></button>
            </div>
          </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item  className='carousel_item'>
            <Card className='card'>
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
              <button className='button' variant="primary"><a className='btn-link' href='https://github.com/brunadasilvabz/project-promo-r-module-2-team-2-brunadasilvabz' target="_blank">Código</a></button>
              <button className='button' variant="primary"><a className='btn-link' href='http://beta.adalab.es/project-promo-r-module-2-team-2/' target="_blank">Web</a></button>
            </div>
          </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item  className='carousel_item'>
            <Card className='card'>
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
              <button className='button' variant="primary"><a className='btn-link' href='https://github.com/brunadasilvabz/project-promo-r-module-1-team-5-brunadasilvabz' target="_blank">Código</a></button>
              <button className='button' variant="primary"><a className='btn-link' href='http://beta.adalab.es/project-promo-r-module-1-team-5/' target="_blank">Web</a></button>
            </div>
          </Card.Body>
                </Card>
                
            </Carousel.Item>
            {/* <Carousel.Item  className='carousel_item'>
            <Card className='card'>
                <div className='card_imgWrapper'>
                    <Card.Img className="img" variant="top" src={pillow} />
                </div>
                <Card.Body className='card_body'>
                    <Card.Title className='card_body-title'>Card Title</Card.Title>
                    <Card.Text className='card_body-text'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content. Some quick example text to build.
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

export default SlideSmallerScreen;