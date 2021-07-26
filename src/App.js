import React,{useState, useEffect} from 'react';


import 'rsuite/dist/styles/rsuite-default.css';
import { Modal,Avatar,Icon } from 'rsuite';
import { Button,} from 'rsuite'
import useModelState from './helper';
import './profile.css'





function App() {
  
 

  const [state,setState] = useState([])
  const [index, getIndex] = useState([])
  const { isOpen, open, close } = useModelState();
  const [pstate, getPstate]= useState([])
 


useEffect(() => {
jasonapi()
},[])


const api = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=json"
  const jasonapi = async () =>{
   
         const data = await fetch(api);
         const orgdata = await data.json();
       

       setState(orgdata.results[0])
      
        
          }
         
        const getalldata = (i) => {
          open()
          getIndex(i)
          getPstate(state[i])
          
        }
        const getclose = () => {

          close()
          getPstate([])
        }
      
  return (
    < >
  
   {state.map((el,i) => {
     return <> 
     <div>
     <Avatar  key={i}>
      <Icon key={i} icon="user" />
    </Avatar>
          <p key={i} >Created At-{el.created}</p>
      <h1  key={i}>{el.first} {el.last}</h1>
      

     <button key={i} onClick= {() => {getalldata(i) }}>know me</button>
     </div>
     <Modal size="xs" show={isOpen} onHide={close}>
        <Modal.Header>Profile info</Modal.Header>
        <Modal.Body>
       <p>{pstate.first}{pstate.last}</p>
        <p>{pstate.email}</p>
        <p>{pstate.address}</p>
       <p>{pstate.created}</p>
     
        </Modal.Body>
        <Modal.Footer>
          <Button
            block
            appearance="primary"
            onClick={getclose}
           
          >
           close
          </Button>
        </Modal.Footer>
      </Modal>
    
      </>
   })}
  
    </>
  );
}

export default App;
