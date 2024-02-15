import profile from "../private/profile.jpg";

export default function HomePage(){
    return(
        <div className="container" style={{margin:"2vw"}}>
            <h1 style={{fontSize:"2.5vw"}}>Hello, I hope you're <span style={{color:"#CD7676"}}>blooming</span> today.</h1>

            <div className="left-text">

            </div>
            <div className="right-text">
                <img src={profile} style={{width:"15vw", height:"45vh", float:"right"}}></img>
            </div>
        </div>
    )
}