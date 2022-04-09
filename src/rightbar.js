import './rightbar.css'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';

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
    <h4 style={{color:'#A8B2BA',display:'flex',alignItems:'center',fontSize:'16px'}}><ArrowForwardIosIcon/>{patient&&patient.name}</h4>
</div>

      </div>  
      
   <div className='bottombar'>
       <div className='bottomleft'>
           <div className='bottomleftone'>
<div className='leftone'>
<img src='https://images.networthlist.org/images/32/anne-hathaway.jpg' alt=''height='50' width='45' className='mainimg'/>
<h1 style={{color:'#303D4E',fontSize:'18px'}}>{patient&&patient.name}</h1>
<h5 style={{color:'#A8B2BA'}}>dionecooper@example.com</h5>
<div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
{patient&&patient.Past}
<h5 style={{color:'#A8B2BA'}}>Past</h5></div> 
<div style={{backgroundColor:'#A8B2BA',width:'1px'}}>
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

         
<div className='appointmentscontainer'>
<div className='topbarappointment'>
<div style={{display:'flex',justifyContent:'space-between',padding:'1vmax',alignItems:'center'}}>
<h5 style={{color:'#303D4E'}}>Root Canal Treatment</h5>
<h5 style={{color:'#7B828D',backgroundColor:'#FFFFFF',height:'vh',padding:'10px',fontSize:'12px'}}>Show 
Previous Treatment</h5>
</div>
</div>
<div className='bottombarappointment'>
    <div className='linecir'>
        <div className='line'></div>
<div className='linecircle'>

</div>
<div className='line'></div>
    
    
        <div className='line'></div>
<div className='linecircle'>

</div>
<div className='line'></div>
<div className='line'></div>
<div className='linecircle'>

</div>
<div className='line'></div>
    </div>
 
    <div className='appointmentlist'>
        <div className='appointment'>
<div className='app'>
    <h5 style={{fontSize:'14px'}}>26 Nov '19</h5>
    <h5 style={{fontSize:'10px',color:'#B5BBC2'}}>09:00-10:00</h5>
</div>

<div className='app'>
<h5 style={{fontSize:'10px',color:'#B5BBC2'}}>Treatment</h5>
<h5>Open Access</h5>
</div>
<div className='bar'></div>
<div className='app'> <h5 style={{fontSize:'10px',color:'#B5BBC2'}}>Dentist</h5>
<h5>Drag Adam H</h5></div>
<div className='app'> <h5 style={{fontSize:'10px',color:'#B5BBC2'}}>Nurse</h5>
<h5>Jessicamila</h5></div>
<div className='app last'> <NoteAddOutlinedIcon style={{fontSize:'10px',marginRight:'5px'}}/>
<h5>Note</h5></div>

        </div>
        <div className='appointment'>
        <div className='app'>
    <h5 style={{fontSize:'14px'}}>12 Dec '19</h5>
    <h5 style={{fontSize:'10px',color:'#B5BBC2'}}>09:00-10:00</h5>
</div>

<div className='app'>
<h5 style={{fontSize:'10px',color:'#B5BBC2'}}>Treatment</h5>
<h5>Root Canal prep</h5>
</div>
<div className='bar'></div>
<div className='app'> <h5 style={{fontSize:'10px',color:'#B5BBC2'}}>Dentist</h5>
<h5>Drag Adam H</h5></div>
<div className='app'> <h5 style={{fontSize:'10px',color:'#B5BBC2'}}>Nurse</h5>
<h5>Jessicamila</h5></div>
<div className='app last'> <NoteAddOutlinedIcon style={{fontSize:'10px',marginRight:'5px'}}/>
<h5>Note</h5></div>

</div>
    
</div>
</div>
</div>
</div>
           </div>
       <div className='bottomright'>
           <div className='bottomrightone'>
               <div style={{display:'flex',justifyContent:'space-between',padding:'1vmax'}}>
<h5 style={{color:'#303D4E'}}>Notes</h5>
<h5 style={{color:'#0D53FC',}}>See All</h5>
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
<h5 style={{marginTop:'10px',color:'#3A4657'}}>Lorem ipsum dolor sit amet</h5>
<div style={{display:'flex',justifyContent:'space-between',padding:'0vmax 0.5vmax',alignItems:'center'}}>
<h5 style={{color:'#9EA8AF',display:'flex',alignItems:'center',fontSize:'10px'}}>
    <PersonOutlineOutlinedIcon style={{color:'#1F60FB',fontSize:'12px'}}/>Drag Mega Nanade</h5>
<h5 style={{color:'#9EA8AF',fontSize:'10px'}}>20 Nov 19</h5>
</div>
           </div>
           <div className='bottomrighttwo'>
           <div style={{display:'flex',justifyContent:'space-between',padding:' 0.7vmax 1vmax',alignItems:'center',fontSize:'14px'}}>
<h5 style={{color:'#303D4E',display:'flex',alignItems:'center'}}>Files / Documents</h5>
<h5 style={{color:'#0D53FC',display:'flex',alignItems:'center',fontSize:'12px'}}><FileCopyOutlinedIcon style={{fontSize:'12px'}} /> Add Files</h5>
</div>
           <div style={{display:'flex',justifyContent:'space-between',padding:'0.7vmax 1vmax',alignItems:'center',fontSize:'14px'}}>
<h5 style={{color:'#303D4E',display:'flex',alignItems:'center'}}><PictureAsPdfOutlinedIcon style={{fontSize:'12px'}}/>  Check Up Result.pdf</h5>
<h5 style={{color:'#0D53FC',display:'flex',alignItems:'center',fontSize:'10px'}}>123kb</h5>
</div>
<div style={{display:'flex',justifyContent:'space-between',padding:'0.7vmax 1vmax',alignItems:'center',fontSize:'14px'}}>
<h5 style={{color:'#303D4E',display:'flex',alignItems:'center'}}><PictureAsPdfOutlinedIcon style={{fontSize:'12px'}}/>  Dental X Ray Result2.pdf</h5>
<h5 style={{color:'#0D53FC',display:'flex',alignItems:'center',fontSize:'10px'}}><DeleteOutlineOutlinedIcon style={{fontSize:'10px'}}/>
<AddCircleOutlineOutlinedIcon style={{fontSize:'10px'}}/>
</h5>
</div>
<div style={{display:'flex',justifyContent:'space-between',padding:'0.7vmax 1vmax',alignItems:'center',fontSize:'14px'}}>
<h5 style={{color:'#303D4E',display:'flex',alignItems:'center'}}><PictureAsPdfOutlinedIcon style={{fontSize:'12px'}}/>  Medical Prescriptions.pdf</h5>
<h5 style={{color:'#0D53FC',display:'flex',alignItems:'center',fontSize:'10px'}}>87kb</h5>
</div>
<div style={{display:'flex',justifyContent:'space-between',padding:'0.7vmax 1vmax',alignItems:'center',fontSize:'14px'}}>
<h5 style={{color:'#303D4E',display:'flex',alignItems:'center',whiteSpace:'nowrap',}}><PictureAsPdfOutlinedIcon style={{fontSize:'12px'}}/>Dental X-Ray Result.pdf</h5>
<h5 style={{color:'#0D53FC',display:'flex',alignItems:'center',fontSize:'5px'}}><DeleteOutlineOutlinedIcon style={{fontSize:'10px'}}/>
<AddCircleOutlineOutlinedIcon style={{fontSize:'10px'}}/>
</h5>
</div>

           </div>
       </div>
       </div>   
      </div>
        
        </>
    )
}

export default Rightbar