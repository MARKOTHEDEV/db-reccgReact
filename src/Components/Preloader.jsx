import PreloaderImage from "../Images/94.gif"
const Preloader =(props)=>{


    return (
        <div className="preloader" style={{"width":"100%","height":"100vh",
            position:"fixed","top":"0",left:0,"display":`${props.show?"flex":"none"}`,justifyContent:"center",alignItems:'center',
            zIndex:"100000000","backgroundColor":"white",
            // "transition":"1.2s all ease-in-out"
        }}>
            <div style={{textAlign:"center"}}>
            <img src={PreloaderImage}  style={{margin:"0 auto"}}/>
            <p>Loading Relax And God Bless You..</p>
            </div>
        </div>
    )
}


export default Preloader