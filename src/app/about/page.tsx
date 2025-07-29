import React from "react";
import artright from '../../components/Project-Images/about-image.jpeg';
import artbottom from '../../components/Project-Images/about-image-footer.jpeg';
import artbottomleft from '../../components/Project-Images/about-image-footer-left.jpeg';
import Image from "next/image";
import instagram from '../../components/Project-Images/instagram_socialnetwork_20033.png';
import Link from "next/link";

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
                src={artright}
                alt="art-right"
                width={500}
                height={500}
                style={{ position: "sticky", width: "75%", height: "75%", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",  marginTop: "min(5rem, 15%)", marginLeft: "5rem" }}
              />
            </div>
          </div>         
        </main>
      
      <footer>
        <div className="container-about" 
          style={{
            //maxWidth: `min(1200px, 100%)`,
            //padding: `min(2rem, 5vw)`,
            //display: "flex",
            //justifyContent: "center",
            //alignItems: "center",
            marginTop: "min(5rem, 15%)"
          }} >
              {/* <div style={{ fontSize: "1.5em", fontWeight: "100"}}>
                <ViewServices />
              </div>  
              */}
            <div>
              <Image
                src={artbottomleft}
                alt="art-right"
                width={500}
                height={500}
                style={{ position: "sticky", width: "75%", height: "75%", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", marginLeft: `min(15rem, 15%)`, marginRight: "5rem"}}
              />
            </div>
            <div>
              <Image
                src={artbottom}
                alt="art-right"
                width={500}
                height={500}
                style={{ position: "sticky", width: "75%", height: "75%", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", marginRight: `min(15rem, 15%)`, marginLeft: "5rem" }}
              />
            </div>  
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h2 style={{ color: "black", fontSize: "2rem" }}>
              Moore Gallery
              </h2>
              <div style={{ marginTop: "2.5rem"}}>
              <Link href="https://instagram.com/co_nnie9206">
                <Image src={instagram} height="25" alt="Commerce Management Solution" />{" "}
              </Link>
              <Link href="https://instagram.com/co_nnie9206">
                <Image src={instagram} height="25" alt="Commerce Management Solution" />{" "}
              </Link>
              <Link href="https://instagram.com/co_nnie9206">
                <Image src={instagram} height="25" alt="Commerce Management Solution" />{" "}
              </Link>
              </div>                   
          </div>
           <div>
            <p style={{ textAlign: "center", marginTop: "2rem", color: "black" }}>
              © {new Date().getFullYear()} Moore Gallery. All rights reserved.
            </p>
          </div>              
        </footer>
      </div>
    );
}

export default About;