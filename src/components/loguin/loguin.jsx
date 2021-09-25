import React from 'react'
import { Login } from '@mui/icons-material';

export class loguin extends React.Component {

    constructor(props){
        super(props);
    }

  render() {
      return ( 
        <div className="base-contanier">
        <div className="header">loguin</div>
    	<div className="content">
        <div className="form">
        <div className="form-group">Usuario</div>
        <input type="text" name="usuario"/>
        </div>
        
        </div>
        </div> 
     )
  }
   
       
    
}

export default loguin;
