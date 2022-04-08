import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import LocalAtmRoundedIcon from '@material-ui/icons/LocalAtmRounded';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

export const Maindiv=()=>{
    return(
        <>
<div className='maindiv'>
    <div className="sidebar">
        <div className='topsid'>
            <div>
<h2>Zendentha</h2>
<p>cabut digu transpa</p>
</div>
<SettingsOutlinedIcon/>
        </div>
        <div>
<div className='item'> 
    <HelpOutlineOutlinedIcon/>
<h2>Overview </h2>
    </div>
    <div className='item'>
        <EventNoteOutlinedIcon/>
<h2>Calender</h2>
    </div>
    <div className='item select'>
        <PersonOutlineOutlinedIcon/>
<h2>Patient List</h2>
    </div>
    <div className='item'>
        <ChatRoundedIcon/>
<h2>Messages</h2>
    </div>
    <div className='item'>
        <LocalAtmRoundedIcon/>
<h2>Payment Information</h2>
    </div>
    <div className='item'>
        <SettingsOutlinedIcon/>
<h2>Settings</h2>
    </div>
    </div>
    <div>

    </div>
    </div>
    <div className="rightbar">

    </div>
</div>

        </>
    )
}

export default Maindiv