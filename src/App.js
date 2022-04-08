import logo from './logo.svg';
import './App.css';
import Container from './container'
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
const [patient,setPatient]=useState()
useEffect(()=>{
async function getpatient(){
  const data=await axios.get('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
  console.log(data.data[0])
  setPatient(data.data[0])
}
getpatient()
},[])
  return (
 <Container patient={patient}/>
  );
}

export default App;
