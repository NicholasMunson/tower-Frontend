import React from 'react';
import CustomNavBar from './CustomNavBar'
import { PageHeader } from 'react-bootstrap'
import '../styles/header.css'

function Header(props){
    return ( 
    <div>   
        <PageHeader> 
            <div className="my-bevs-header">My Bevs</div>
            <CustomNavBar textColorChange={props.textColorChange} />
        </PageHeader>
    </div>  
    )
}
    
export default Header
