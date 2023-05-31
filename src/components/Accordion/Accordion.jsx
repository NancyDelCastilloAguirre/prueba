import React, { useState } from 'react';
import "./Accordion.css"
function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div 
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>
      {isOpen && (
        <div className="accordion-content">
          {content}
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const data = [
    { title: '¿Qué es B.O.B?' , content: 'B.O.B es nuestra inteligencia artificial que, además de estar disponible día y noche, es entrenada a base de información que se actualiza constantemente por los administradores de SONA.' },
    { title: '¿Quiénes son los administradores?', content: 'Los administradores de SONA son los jefes de departamento de cada área escolar, de modo que, ellos crean sus propias publicaciones y puedes comunicarte con ellos directamente.' },
    { title: '¿Cómo actualizan a B.O.B?', content: 'Los administradores de SONA suben archivos PDF al sistema SONA y B.O.B se encarga de leer los archivos, aprovechando al máximo la información proporcionada, listo para comunicarlo al usuario.' },
    { title: '¿Cómo puedo personalizar mi perfil en SONA?', content: 'Dentro de SONA, tienes tu propio perfil como distintas redes sociales, tienes foto de perfil y de portada, tu carrera técnica, tu semestre actual y además de una descripción tuya.' },
    { title: '¿Cómo puedo enterarme de las distintas funciones de SONA?', content: 'Dentro de SONA te ofrecemos modales que te enseñaran un vídeo de cómo hacer ciertas acciones (dependiendo de tu elección).' },

    // Puedes agregar más preguntas y respuestas aquí...
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          {data.map((item, index) => 
            <Accordion key={index} title={item.title} content={item.content} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
