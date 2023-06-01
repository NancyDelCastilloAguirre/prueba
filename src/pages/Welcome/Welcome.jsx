import Navbar from "../../components/navbar/Navbar";
import "./welcome.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import app_1 from "../../images/2_2_1.png"
import IcoBOB from "../../images/IcoBOB.png"
import GSONA from "../../images/GSONA.png"
import GSONA2 from "../../images/GSONA2.png"
import GSONA3 from "../../images/GSONA3.png"
import IBOB from "../../images/IconBOB.png"
import SONA from "../../images/SONA.png"
import emailjs from "@emailjs/browser"
import Accordion from "../../components/Accordion/Accordion"
import template2 from "../../templates/templateW";


export default function Welcome() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [fvalido, setFvalido]=useState('')
  const [message, setMessage] = useState('');
  const [evalido, setEvalido]=useState('');
  const [nvalido, setNvalido]=useState("");
  const [enviado, setEnviado]=useState("")
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);


  const enviarEmail=(templateParams)=>{
    emailjs.send('service_qh9tq7f', 'template_owq4rfq', templateParams,"qm2j3dUCQPz5iPYT4")
      .then((response) => {
      },(error) => {
        console.log('Email no enviado...', error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!enviado.trim() || !name.trim() || !subject.trim() || !message.trim() || !isPhoneValid || !isEmailValid) {
        setFvalido("Por favor, complete todos los campos correctamente");
    } else {
        setFvalido("");
        setEnviado("Correo enviado correctamente")
        console.log(name, email, subject, phone, message);
        const emailTemplate = template2(name,email,subject,phone,message);
        enviarEmail(emailTemplate);
        console.log("Correo enviado con éxito");
        
      }
    
  }

  const handlePhoneChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setPhone(e.target.value)
      setIsPhoneValid(e.target.value.length == 10);
    }
  }
  
  const validatePhone = () => {
    if(phone.length < 10 || phone.length > 10){
      setNvalido("El número de teléfono debe tener 10 dígitos.")
    }
    else{
        setNvalido("")
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const validateEmail = (e) => {
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!re.test(email)) {
      setEvalido("Debes poner un e-mail válido")
    }
    else{
        setEvalido("")
        setIsEmailValid(re.test(e.target.value));

    }
  }
    const navigate = useNavigate();

    function goLogin(){
        navigate("/login");
    } 

    return (
        <>
        <header class="foi-header landing-header">
        <Navbar /> 
        <div class="container" id="section1">
                    <div class="header-content">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="wrapper">
                                    <div class="typing-demo">
                                        <h1 className="red-text">SONA.</h1>
                                    </div>
                                </div>
                                <p class="text-light">
                                Tu Sistema Operativo de Novedades y Anuncios
                                Politécnicos. Somos una plataforma que te ayuda a potenciar la
                                comunicación entre las instituciones y su comunidad.
                                </p>
                                <button class="btn btn-primary mb-4" onClick={goLogin}>Inicia aquí</button>
                            </div>
                            <div class="col-md-6">
                                <img src={app_1} alt="app" width="388px" className="img-float"  />
                            </div>
                        </div>
                    </div>
                </div>  
        </header>  
        <section class="py-5 mb-5">
            <div class="container" id="section2">
                <h2 class="titleRed">Agrega a SONA en tu pantalla de inicio</h2>
                <p class="text-muted mb-5">Pasos a seguir </p>
                <div class="row">
                    <div class="col-lg-4 mb-4">

                            <div class="card">
                            <img src={GSONA} alt="app" width="388px" className="img-g"  />
                            </div>

                    </div>
                    <div class="col-lg-4 mb-4">
                            <div class="card">
                            <img src={GSONA2} alt="app" width="388px" className="img-g"  />
                            </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="card">
                            <img src={GSONA3} alt="app" width="388px" className="img-g"  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section class="py-5 mb-5">
            <div class="container" id="section3">
                <h4 class="section-title"></h4>
                <div class="row">
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <h5 class="titleRed">Información actualizada</h5>
                        <p class="text-light">En SONA siempre tendrás información actualizada al momento.</p>
                        <h5 class="titleRed">Personalización</h5>
                        <p class="text-light">Personaliza tu perfil para el ámbito escolar.</p>
                    </div>
                    <div class="col-lg-4 mb-3 mb-lg-0">
                        <h5 class="titleRed">Comunicación</h5>
                        <p class="text-light">Mantén una conversación en tiempo real con los jefes de departamentos.</p>
                        <h5 class="titleRed">B.O.B</h5>
                        <p class="text-light">Comunícate con B.O.B. a cualquier hora en cualquier momento.</p>
                    </div>
                    <div class="col-lg-4">
                        <img src={IcoBOB} alt="app" width="388px" class="img-fluid" />
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5 mb-5">
        
        </section>
        <section class="py-5 mb-5">
    <div class="container" id="section4">
        <h2 class="titleRed">FAQ</h2>
        <p class="titleRed">Preguntas más frecuentes</p>
        <div class="row">
                <Accordion />
        </div>
    </div>
</section> 

        <main>
            <div class="container">
                <section class="page-header">
                    <h2 class="titleRed">Mesa de Ayuda</h2>
                    <h5 class="text-light">¿Aún tienes preguntas y/o dudas? Contáctanos!</h5>
                </section>
                <section class="contact-content">
                    <div class="contact-widget media">
                        <img src={SONA} alt="monitor" width="70px" />
                        <div class="media-body">
                            <h6 class="widget-title">Oficina de SONA</h6>
                            <p class="widget-content">sonaybob@gmail.com</p>
                        </div>
                    </div>
                    <div class="contact-widget media">
                    <img src={IBOB} alt="monitor" width="50px" />
                        <div class="media-body">
                            <h6 class="widget-title">Oficina de administración de BOB</h6>
                            <p class="widget-content">bobdatos@gmail.com</p>
                        </div>
                    </div>
                </section>
                <section class="contact-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label class="form-desc" for="name">Tu nombre <sup>*</sup></label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="Nombre *"onChange={e => setName(e.target.value)} />
                            </div>
                            <div class="form-group col-md-6">
                                <label class="form-desc" for="email">Tu e-mail <sup>*</sup></label>
                                <input type="email" id="email" class="form-control" name="email" placeholder="usuario@gmail.com" value={email} onChange={handleEmailChange} onBlur={validateEmail} />
                                <p>{evalido}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label class="form-desc" for="subject">Asunto <sup>*</sup></label>
                                <input type="text" class="form-control" id="name" name="subject" placeholder="¿De qué va tu consulta?" onChange={e => setSubject(e.target.value)} />
                            </div>
                            <div class="form-group col-md-6">
                                <label class="form-desc" for="phone">Tu número telefónico <sup>*</sup></label>                 
                                <input type="tel" id="phone" class="form-control" name="phone" placeholder="55-7662-9262" value={phone} onChange={handlePhoneChange} onBlur={validatePhone} pattern="[0-9]*" inputMode="numeric" />
                                <p>{nvalido}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-12">
                                <label class="form-desc" for="message">¿Cómo podemos ayudarte? <sup>*</sup></label>
                                <textarea name="message" id="message" class="form-control" rows="7" placeholder="Buen día, Me gustaría..." onChange={e => setMessage(e.target.value)}></textarea>
                                <p>{fvalido}</p><p>{enviado}</p>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary mb-4">Enviar</button>
                            <p class="form-footer-text">Tenemos un rango de respuesta entre 24 y 48 hrs.</p>
                        </div>
                    </form>
                </section>
            </div>
        </main>
        </>
    )
}
