import React from 'react';
import Header from "./Header"
import Texto from "./texto"
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    abierto: true,
    esPadre: false, 
    nombre: '',
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  handleCheckboxChange = () => {
    this.setState({ esPadre: !this.state.esPadre});
  }

  render() {
    const modalStyles = {
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }

    return (
      <>
      <div className="container-fluid">
        <div className="App">
          <h1>Experiencia de usuario</h1>
          <Header />
          <h2>Importancia De la experiencia de Usuario</h2>
        <p id="texto">la experiencia de usuario, identificamos a las personas como usuarios de los diferentes sistemas digitales que se crean con el objetivo de que lleven a cabo acciones previamente identificadas como realizar un pedido, suscribirse a la newsletter, rellenar un formulario,etc.

        Para crear una experiencia de usuario adecuada es necesario conocer, estudiar y probar la forma en que los procesos y estructuras se unen para mostrar la información, junto a ese toque persuasivo y marketero indispensable para atraer y mantener al usuario.

        El objetivo principal de la experiencia de usuario es optimizar los procesos con la finalidad de que los usuarios conviertan y les resulte más fácil e intuitivo navegar por la web. 

        Hasta ahora hemos visto a grandes rasgos de qué trata la UX, sigue leyendo y conocerás más en detalle qué es la experiencia de usuario, para qué se utiliza y por qué es tan importante.</p>
        <h2>¿Qué es la experiencia de usuario o UX?</h2>
        <p id="texto">Definimos la experiencia de usuario como la experiencia resultante de la interacción de usuario con nuestra página web, app o programa. En otras palabras, la user experience habla de la sensación, experiencia y opinión que un usuario tiene después de probar un producto o servicio digital como una tienda online, una página web, un blog, etc.

        Para conseguir una buena experiencia de usuario es imprescindible conocer las posibilidades que tiene el usuario en nuestra plataforma con el fin de establecer rutas intuitivas junto a optimización de elementos ya existentes que lleven al usuario hacia nuestro objetivo. 

        Vamos a verlo con un ejemplo. Recuerda tu propio recorrido en cualquier página web: estás buscando un producto en concreto y el catálogo no está organizado. Encuentras el producto en una categoría en la que tú no lo habrías relacionado. Pero bien, lo has encontrado y te dispones a abrirlo. El tiempo de carga hasta ahora es alto, lo que aumenta tu impaciencia y frustración. Aún así añades el producto al carrito, pero cuando llegas al formulario de finalizar pago, no funciona correctamente por lo que te obliga a cumplimentarlo durante varias ocasiones.</p>
          
        </div></div>
        
        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>
            Bienvenido!
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="Nombre">Nombre</Label>
              <Input type="text" id="nombre" />
            </FormGroup>
            <FormGroup>
              <Input type="checkbox" id="padre" onChange={this.handleCheckboxChange} />
              <Label for="Padre">Eres padre de estudiante?</Label>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.abrirModal}>Ingresar</Button>
          </ModalFooter>
        </Modal>
        {this.state.esPadre && 
          <>
            <h2 id="texto">Como Ayuda esta clase a sus hijos?</h2>
            <p id = "texto">
            La clase de Experiencia de Usuario (UX, por sus siglas en inglés) puede brindar varios beneficios a tus hijos en el mundo digital y más allá. Aquí hay algunas formas en las que la educación en UX puede ser útil:

            Desarrollo de habilidades de pensamiento crítico: La UX se centra en comprender las necesidades y experiencias de los usuarios. Al enseñar a tus hijos sobre UX, les estás inculcando habilidades de observación y análisis crítico, ayudándoles a evaluar y comprender mejor los productos y servicios digitales.</p>
            <p id = "texto">Empatía y comprensión del usuario: La UX se basa en la empatía con los usuarios para crear productos que se adapten a sus necesidades. Al entender cómo piensan y se sienten los demás, tus hijos pueden desarrollar habilidades sociales importantes y aprender a diseñar soluciones que beneficien a la comunidad en general.</p>
            <p id = "texto">Pensamiento creativo y resolución de problemas: La UX implica encontrar soluciones creativas a los problemas de los usuarios. Esto puede ayudar a tus hijos a desarrollar habilidades de resolución de problemas y fomentar su creatividad al abordar desafíos desde diferentes perspectivas.</p>
            <p id="texto">Conciencia digital: A medida que los niños pasan más tiempo en entornos digitales, es crucial que comprendan cómo interactuar con la tecnología de manera positiva y segura. La UX incluye conceptos de usabilidad y accesibilidad que son fundamentales para garantizar una experiencia digital positiva para todos.</p>
            <p id="texto">Desarrollo de habilidades técnicas: Aunque la UX no se limita a la programación, la comprensión de cómo funcionan las interfaces de usuario y cómo se diseñan puede sentar las bases para el desarrollo de habilidades técnicas en campos relacionados con la tecnología.
            </p>
          </>
        }
        {!this.state.esPadre && 
          <>
            <h2 id="texto">Como se complementa esta clase a las demas clases de Ing. Sistemas?</h2>
            <p id = "texto">
            La clase de Experiencia de Usuario (UX) se integra de manera fundamental con diversas disciplinas de ingeniería en sistemas. En colaboración con la ingeniería de software, contribuye al desarrollo de interfaces de usuario efectivas, donde los ingenieros implementan los diseños concebidos por los profesionales de UX. En el ámbito de la 
            ingeniería de requisitos, la UX desempeña un papel esencial al identificar y comprender las necesidades de los usuarios, informando la documentación de requisitos. La ingeniería de sistemas se beneficia de los principios centrados en el usuario, incorporando consideraciones de usabilidad y eficiencia en el diseño global de sistemas. 
            La ingeniería de computación se ve complementada en el desarrollo front-end, donde la UX se enfoca, y ambos deben sincronizarse para una experiencia de usuario coherente. Los ingenieros de calidad del software incorporan pruebas de usabilidad para evaluar la experiencia del usuario, mientras que la gestión de proyectos considera la 
            planificación adecuada para la investigación y diseño de UX.
            </p>
          </>
        }
      </>
    )
  }
}

export default App;