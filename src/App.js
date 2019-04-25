import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'animate.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    opacity:"1"
  },

});

function App(props) {
  const focusIn=()=>{
    changeFocus(true)
  }
  const focusOut=()=>{
    changeFocus(false)
  }
  const newPage=()=>{

  }
  const { classes } = props;
  const [focus,changeFocus]=useState(false)
  return (
    <React.Fragment>
    <div  style={{height:"100vh"}}>
      

      
          <div style={{height:"100vh",width:"100%" ,backgroundColor:"green",position:"relative",zIndex:"1"}}>        
              <div 
              style={{
                 position:"absolute",
                 width:"100px",
                 height:"100px", 
                 left:"50%",top:"20px",
                 backgroundColor:"white"}}>
                 test
              </div>
          </div>


      

       <Button variant="contained" color="primary" className={classes.button} onClick={newPage} >
                      Primary
       </Button>
      <div style={{display:"flex",flexDirection:"row"}}>
          <div style={{height:"300px",width:"300px", backgroundColor:"yellow",margin:"10px auto",position:"relative"}} onMouseEnter={focusIn} onMouseLeave={focusOut} >

          {focus?(<div style={{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,.5)",position:"absolute"}}  className="animated fadeInDown">  
                 <Button variant="contained" color="primary" className={classes.button} >
                      Primary
                 </Button>
            </div>):(<div></div>)}

      
          </div>
          <div style={{height:"300px",width:"300px", backgroundColor:"red",margin:"10px auto",position:"relative"}}>test1</div>
      </div>
      
    </div>

     </React.Fragment>
  );
}

export default withStyles(styles)(App);
