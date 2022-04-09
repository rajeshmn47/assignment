import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import LocalAtmRoundedIcon from '@material-ui/icons/LocalAtmRounded';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Rightbar from './rightbar'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

export const Maindiv=({patient })=>{
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
<div className='item'> 
    <HelpOutlineOutlinedIcon style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}}/>
<h2>Overview </h2>
    </div>
    <div className='item'>
        <EventNoteOutlinedIcon style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}}/>
<h2>Calender</h2>
    </div>
    <div className='item select'>
        <PersonOutlineOutlinedIcon style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}} />
<h2>Patient List</h2>
    </div>
    <div className='item'>
        <ChatRoundedIcon  style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}}/>
<h2>Messages</h2>
    </div>
    <div className='item'>
        <LocalAtmRoundedIcon  style={{color:'#C1C7CD',opacity:'0.9',height:'12px'}}/>
<h2>Payment Information</h2>
    </div>
    <div className='item'>
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
    <div style={{borderTop:'#cccccc',padding:'1vmax',height:'15vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
        <img src='https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcTOhoe7IEFtsPiHAD.jpg' 
        alt='' width='30' height='35' style={{borderRadius:'50%',marginRight:'8px'}}/>
        <div>
            <h5> Drg.Adam H.</h5>
            <h5 style={{color:'#B5BBC2',marginTop:'5px'}}>Dentist</h5>
        </div>
    </div>
    </div>
    </div>
   <Rightbar patient={patient}/>
</div>

        </>
    )
}

export default Maindiv