import './rightbar.css'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';

export const Rightbar=()=>{
    return(
        <>
        <div className='rightbar'>
<div className='topbar'>
<div className='lefttop'>
<PersonOutlineOutlinedIcon style={{color:'#1F60FB'}}/>
<h5>Diane Cooper</h5>
</div>
<div className='righttop'>
    <div className='search'>
        <SearchOutlinedIcon style={{fontSize:'12px'}}/>
<input type='text' className='searchinput' placeholder='search'/>
</div>
<div className='plus'>
+
</div>
<div className='notify'>
    <div className='reddot'>

    </div>
<NotificationsIcon/>
</div>
</div>
</div>
        </div>
        
        </>
    )
}

export default Rightbar