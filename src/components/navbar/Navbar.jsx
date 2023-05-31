import "./navbar.css"
import SONA from "../../images/SONA.png"
import { Drawer, Space, Button} from 'antd';
import { useState } from "react";

export default function Navbar() {
  
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light foi-navbar">
            <a class="navbar-brand">
                <img src={SONA} alt="SONA" className="sonaIcon" />
            </a>
            <div>
            <button onClick={showDrawer} class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div>
                <Drawer
                    title= {`MENÚ`}
                    className="draw"
                    placement="right"
                    onClose={onClose}
                    visible={visible}
                >
                    <a class="navbar-brand">
                        <img src={SONA} alt="SONA" className="sonaIcon" />
                    </a>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a href="#section1" class="nav-link">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a href="#section2" class="nav-link">Móvil</a>
                            </li>
                            <li class="nav-item">
                                <a href="#section3" class="nav-link">Caracteristicas</a>
                            </li>
                            <li class="nav-item">
                                <a href="#section4" class="nav-link">Ayuda</a>
                            </li>
                        </ul>
                </Drawer>
            </div>
            </div>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a href="#section1" class="nav-link">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#section2" class="nav-link">Móvil</a>
                    </li>
                    <li class="nav-item">
                        <a href="#section3" class="nav-link">Caracteristicas</a>
                    </li>
                    <li class="nav-item">
                        <a href="#section4" class="nav-link">Ayuda</a>
                    </li>
                </ul>
            </div>
        </nav>      
    </>
  )
}
