import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import LocalAtmRoundedIcon from '@material-ui/icons/LocalAtmRounded';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Rightbar from './rightbar'

export const Maindiv=({patient })=>{
    return(
        <>
<div className='maindiv'>
    <div className="sidebar">
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
    <div>

    </div>
    </div>
   <Rightbar patient={patient}/>
</div>

        </>
    )
}

export default Maindiv