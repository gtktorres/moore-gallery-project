import React from "react";
import Keyboard from '../../components/Project-Images/about-image.jpeg';
import Deskspace from '../../components/Project-Images/deskspace.png';
import Image from "next/image";
import ViewServices from "@/components/ViewServices";

const About = () => {
    return (
      <div style={{ background: 'hsla(240, 11%, 93%, 1)' }}>
        <main>
          <div className='container-about'>
            <div style={{ marginLeft: "5rem"}}>
              <div>
                <h2>
                  Let’s get in touch
                </h2>
              </div>
              <br />
              <br />
              <div>
                <p style={{fontWeight:"bold"}}>
                  Artist, Consultant, and Nature Enthusiast
                </p>
              </div>
              <br />
              <div>
                <p>
                  A native New Yorker turned Coloradan, I am a highly motivated programmer who enjoys data-driven work and getting hands-on with code. During my undergrad, I learned a variety of coding languages including Python, Java, and JavaScript. Learning C# during my time at FIS Global. Followed by frameworks such as ASP.NET, Winforms, and WPF. In my free time, I tell everyone I know the Broncos will make it to the playoffs. Check out my work at https://github.com/gtktorres. You can also follow me on Instagram @gtkt.dev.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={Keyboard}
                alt="Soft Corner Keyboard"
                width={500}
                height={500}
                style={{ position: "sticky", width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>         
        </main>
      
      <footer style={{ position: "relative", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Deskspace.src}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>            
            <div className="center" >
              <div><h2 style={{ color: "white", textAlign: "center"}}>Get Started</h2></div>
              <div style={{ fontSize: "1.5em", fontWeight: "100"}}>
                <ViewServices />
              </div>  
            </div>                 
        </footer>
      </div>
    );
}

export default About;