import './rightbar.css'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
<div className='belowtopbar'>
    <div style={{display:'flex',alignItems:'center',width:'30%'}}>
    <h5>Patient's List</h5>
    <h4 style={{color:'#A8B2BA',display:'flex',alignItems:'center'}}><ArrowForwardIosIcon/>    Diane Cooper</h4>
</div>

      </div>  
      
   <div className='bottombar'>
       <div className='bottomleft'>
           <div className='bottomleftone'>
<div className='leftone'>
<img src='' alt='' width='40'/>
<h1 style={{color:'#303D4E',fontSize:'18px'}}>Diane cooper</h1>
<h5 style={{color:'#A8B2BA'}}>dianecooper@example.com</h5>
<div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
15
<h5 style={{color:'#A8B2BA'}}>Post</h5></div>  
<div style={{display:'flex',flexDirection:'column',borderLeft:'2px solid #A8B2BA',alignItems:'center',justifyContent:'center'}}> 
2<h5 style={{color:'#A8B2BA'}}>Upcoming</h5></div></div>
<button className='sndmsg'>Send Message</button>
</div>
<div className='rightone'>

</div>
           </div>
           <div className='bottomlefttwo'>
rajiya
           </div>
           </div>
       <div className='bottomright'>

       </div>
       </div>   
      </div>
        
        </>
    )
}

export default Rightbar