import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';

export const Maindiv=()=>{
    return(
        <>
<div className='maindiv'>
    <div className="sidebar">
        <div>
<div> 
    <HelpOutlineOutlinedIcon/>
<h2>Overview </h2>
    </div>
    <div>
        <EventNoteOutlinedIcon/>
<h2>Calender</h2>
    </div>
    <div className='item select'>
<h2>Patient List</h2>
    </div>
    <div className='item'>
<h2>Messages</h2>
    </div>
    <div className='item'>
<h2>Payment Information</h2>
    </div>
    <div className='item'>
<h2>Overview</h2>
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