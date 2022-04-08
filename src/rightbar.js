import './rightbar.css'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const Rightbar=({patient})=>{
    console.log(patient)
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
    <h4 style={{color:'#A8B2BA',display:'flex',alignItems:'center'}}><ArrowForwardIosIcon/>{patient&&patient.name}</h4>
</div>

      </div>  
      
   <div className='bottombar'>
       <div className='bottomleft'>
           <div className='bottomleftone'>
<div className='leftone'>
<img src='https://cdn.fakercloud.com/avatars/vladyn_128.jpg' alt='' width='40'/>
<h1 style={{color:'#303D4E',fontSize:'18px'}}>{patient&&patient.name}</h1>
<h5 style={{color:'#A8B2BA'}}>dionecooper@example.com</h5>
<div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
{patient&&patient.Past}
<h5 style={{color:'#A8B2BA'}}>Past</h5></div> 
<div style={{backgroundColor:'#A8B2BA',width:'3px'}}>
    </div> 
<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}> 
{patient&&patient.Upcoming}<h5 style={{color:'#A8B2BA',textAlign:'center'}}>Upcoming</h5></div></div>
<button className='sndmsg'><h5>Send Message</h5></button>
</div>
<div className='rightone'>
    <div className='rightonesmall'>
<h3>Gender</h3>
<h5>{patient&&patient.Gender}</h5>
</div>
<div className='rightonesmall'>
<h3>Birthday</h3>
<h5>{patient&&patient.Birthday}</h5>
</div>
<div className='rightonesmall'>
<h3>Phone Number</h3>
<h5>(239)555-0108</h5>
</div>
<div className='rightonesmall'>
<h3>Street Address</h3>
<h5>JL.Diponegaro No.21</h5>
</div>
<div className='rightonesmall'>
<h3>City</h3>
<h5>Cilacap</h5>
</div>
<div className='rightonesmall'>
<h3>ZIP Code</h3>
<h5>657348</h5>
</div>
<div className='rightonesmall'>
<h3>Member Status</h3>
<h5>Active Member</h5>
</div>
<div className='rightonesmall'>
<h3>Registered Date</h3>
<h5>Feb 24th ,1997</h5>
</div>
</div>
           </div>
           <div className='bottomlefttwo'>
<div className='box'><div className='smallbox selbox'>Upcoming Appointments</div> 
<div className='smallbox'> Past Appointments</div>
<div className='smallbox'>Medical Records</div></div>

           </div>
           </div>
       <div className='bottomright'>
           <div className='bottomrightone'>
               <div style={{display:'flex',justifyContent:'space-between',padding:'1vmax'}}>
<h5 style={{color:'#303D4E'}}>Notes</h5>
<h5 style={{color:'#0D53FC'}}>See all</h5>
</div>
<div className='rightextreme'>
    <div className='ext'>
<h5>- This patient is lorem ipsum dolor sit amet</h5>
<h5>- Lorem ipsum dolor sit amet</h5>
<h5>- has alergic history with Cataflam</h5>
</div>
<div>
    <button className='savenote'>save note</button>
</div>

</div>
<h5 style={{marginTop:'10px'}}>Lorem ipsum dolor sit amet</h5>
<div style={{display:'flex',justifyContent:'space-between',padding:'0vmax 0.5vmax',alignItems:'center'}}>
<h5 style={{color:'#9EA8AF',display:'flex',alignItems:'center',fontSize:'10xpx'}}>
    <PersonOutlineOutlinedIcon style={{color:'#1F60FB',fontSize:'10px'}}/>Drag Mega Nanade</h5>
<h5 style={{color:'#9EA8AF;',fontSize:'8px'}}>20 Nov 19</h5>
</div>
           </div>
           <div className='bottomrighttwo'>

           </div>
       </div>
       </div>   
      </div>
        
        </>
    )
}

export default Rightbar