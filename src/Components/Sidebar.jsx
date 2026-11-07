import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Sidebar.css";

const Sidebar = ({pageName, pageLink}) => {
  return (
    <div className='sidebar'>
        
 <Link to={pageLink} className='sidebar-link' >{pageName}</Link>
         
    </div>
  )
}

export default Sidebar;