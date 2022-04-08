import Maindiv from "./maindiv"

export const Container=({patient})=>{
    return(
        <>
        <div className='container'>
<Maindiv patient={patient}/>
        </div>
        
        </>
    )
}

export default Container