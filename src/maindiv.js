import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import LocalAtmRoundedIcon from '@material-ui/icons/LocalAtmRounded';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Rightbar from './rightbar'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import {useState,useEffect} from 'react'

export const Maindiv=({patient })=>{
    const [selected,setSelected]=useState('patientlist')

const handleclick=(item)=>{
setSelected(item)
}
    return(
        <>
<div className='maindiv'>
    <div className="sidebar">
        <div>
        <div className='topsid'>
            <div>
<h2>Zendentha</h2>
<p>cabut digu transpa</p>
</div>
<SettingsOutlinedIcon style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}}/>
        </div>
        <div>
<div className={selected==='overview'?'item select':'item'} onClick={()=>setSelected('overview')}> 
    <HelpOutlineOutlinedIcon style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}}/>
<h2>Overview </h2>
    </div>
    <div className={selected==='calender'?'item select':'item'} onClick={()=>setSelected('calender')}>
        <EventNoteOutlinedIcon style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}}/>
<h2>Calender</h2>
    </div>
    <div className={selected==='patientlist'?'item select':'item'} onClick={()=>setSelected('patientlist')}>
        <PersonOutlineOutlinedIcon style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}} />
<h2>Patient List</h2>
    </div>
    <div className={selected==='messages'?'item select':'item'} onClick={()=>setSelected('messages')}>
        <ChatRoundedIcon  style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}}/>
<h2>Messages</h2>
    </div>
    <div className={selected==='payment'?'item select':'item'} onClick={()=>setSelected('payment')}>
        <LocalAtmRoundedIcon  style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}}/>
<h2>Payment Information</h2>
    </div>
    <div className={selected==='settings'?'item select':'item'} onClick={()=>setSelected('settings')}>
        <SettingsOutlinedIcon  style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}}/>
<h2>Settings</h2>
    </div>
    </div>
   
   
    </div>
    <div>
    <div>
        <h5 style={{color:'#B5BBC2',padding:'1vmax',display:'flex',alignItems:'center',width:'100%',justifyContent:'flex-start'}}>
             <ErrorOutlineOutlinedIcon style={{fontSize:'14px',marginRight:'1vw'}}/> Help ?</h5>
   </div>     
    <div style={{borderTop:'2px solid #EDEDEE',padding:'1vmax',height:'6vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
        <img src='https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcTOhoe7IEFtsPiHAD.jpg' 
        alt='' width='30' height='35' style={{borderRadius:'50%',marginRight:'8px'}}/>
        <div>
            <h5> Drg.Adam H.</h5>
            <h5 style={{color:'#B5BBC2',marginTop:'5px'}}>Dentist</h5>
        </div>
    </div>
    </div>
    </div>
   {selected==='patientlist'?<Rightbar patient={patient}/>:<div style={{display:'flex',color:'#B5BBC2',fontWeight:'700',height:'100%',justifyContent:'center',alignItems:'center',width:'100%'}}>sorry nothing to show yet</div>}
</div>

        </>
    )
}

export default Maindiv