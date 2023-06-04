import "./sidebarAdmin.css"
import { Home,Forum,AccountCircle, Analytics, PictureAsPdfOutlined,LocalDiningOutlined } from "@mui/icons-material"
import Share from "../share/Share"
import ShareFood from "../shareFood/ShareFood"
import Logout from "../logout/Logout"
import {Link} from "react-router-dom"
import ModalActualizarBOB from "../modalestuto/ModalActualizarBOB"
import ModalPublicar from "../modalestuto/ModalPublicar"

export default function SidebarAdmin() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                
                <Link  to="/homeadmin" style={{textDecoration:"none",color:"white"}}>
                  <Home className="sidebarIcon" />
                  <span className="sidebarListItemText">Inicio</span>
                </Link>
            </li>
            <li className="sidebarListItem">
                
                <Link  to="/chat" style={{textDecoration:"none",color:"white"}}>
                  <Forum  className="sidebarIcon" />
                  <span className="sidebarListItemText">Chats</span>
                </Link>
            </li>
            <li className="sidebarListItem">
                
                <Link  to="/bobadmin" style={{textDecoration:"none",color:"white"}}>
                  <PictureAsPdfOutlined  className="sidebarIcon" />
                  <span className="sidebarListItemText">PDFBOB</span>
                </Link>
                <ModalActualizarBOB/>
            </li>
            <li className="sidebarListItem">
                
                <Link  to="/estadisticas" style={{textDecoration:"none",color:"white"}}>
                  <Analytics  className="sidebarIcon" />
                  <span className="sidebarListItemText">Estadisticas</span>
                </Link>
            </li>
            <li className="sidebarListItem">
                
                <Link  to="/cafeteriaAdmin" style={{textDecoration:"none",color:"white"}}>
                  <LocalDiningOutlined  className="sidebarIcon" />
                  <span className="sidebarListItemText">Cafeteria</span>
                </Link>
            </li>
        </ul>
        <Share /> <ModalPublicar/>
        
      </div>
    </div>
  )
}
