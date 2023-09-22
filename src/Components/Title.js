// LOGO
import logo from './logo.png';


// this below is known as named export
const Title=()=>{
    /* if we click on image now it will reload the page*/
    return (<a href="/"><img src={logo} alt="logo" className="logo"></img></a>)
}

// HEADER COMPONENTS
export const Header_components=()=>{
    return(
        <div className="header">
            <Title></Title>
           
            {/* nav bar */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>

                    
                </ul>
                
            </div>
        </div>
    );
}


