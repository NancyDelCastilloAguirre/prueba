import "./sidebar.css"
import IconoBOB from "./IconoBOB.png"
import { Home,Forum,Person,LocalDiningOutlined,BookmarkBorderOutlined,AccountCircle } from "@mui/icons-material"
import {Link} from "react-router-dom"
import Logout from "../logout/Logout"
import ModalHablarAdmi from "../modalestuto/ModalHablarAdmi"
import ModalHablarBOB from "../modalestuto/ModalHablarBOB"
import ModalGuardar from "../modalestuto/ModalGuardar"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                
                <Link  to="/home" style={{textDecoration:"none",color:"white"}}>
                  <Home className="sidebarIcon" />
                  <span className="sidebarListItemText">Inicio</span>
                </Link>  
            </li>
            <li className="sidebarListItem">
                
                <Link  to="/chat" style={{textDecoration:"none",color:"white"}}>
                  <Forum  className="sidebarIcon" />
                  <span className="sidebarListItemText">Chats</span>
                </Link>
                <div className="modales"><ModalHablarAdmi/></div>
            </li>
            <li className="sidebarListItem">
                
                <Link to="/bob" style={{textDecoration:"none",color:"white"}}>
                  <img src={IconoBOB} alt="Icono" className="iconBOB" />
                  <span className="sidebarListItemText">BOB</span>
                </Link>
                <div className="modales"><ModalHablarBOB/></div>
            </li>
            <li className="sidebarListItem">
                <Link to="/followed" style={{textDecoration:"none",color:"white"}}>
                  <Person className="sidebarIcon" />
                  <span className="sidebarListItemText">Seguidos</span>
                </Link>
            </li>
            <li className="sidebarListItem">
                
                <Link to="/saved" style={{textDecoration:"none",color:"white"}}>
                  <BookmarkBorderOutlined className="sidebarIcon" />
                  <span className="sidebarListItemText">Guardados</span>
                </Link>
                <div className="modales"><ModalGuardar/></div>
            </li>
            <li className="sidebarListItem">
                
                <Link to="/cafeteria" style={{textDecoration:"none",color:"white"}}>
                  <LocalDiningOutlined className="sidebarIcon" />
                  <span className="sidebarListItemText">Cafetería</span>
                </Link>
            </li>
        </ul>
        
      </div>
    </div>
  )
}
