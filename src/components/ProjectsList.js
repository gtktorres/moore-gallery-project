"use client"; // this is a client component 👈🏽
import '../styles/client.css';
import Link from "next/link";
import Graphs from "../components/Project-Images/graph_access.png";
import Warhammer from "../components/Project-Images/warhammer.png";
import Toxic from "../components/Project-Images/toxic.png";
import Repaycycle from "../components//Project-Images/repaycycle.png";
import InteractiveStory from "../components//Project-Images/InteractiveStory.png";
import CommerceManagement from "../components//Project-Images/in progress.png";
import github from "../components//Project-Images/github.ico";
import Image from "next/image";

const ProjectsList = () => {
    return (
      <div className="Projects" style={{ maxWidth: '75%',backgroundColor: 'hsla(240, 11%, 93%, 0.902)', padding: '2rem' }}>
          <h5>Projects</h5>
        <div className="Border" style={{ backgroundColor: 'hsla(240, 11%, 93%, 0.902)', padding: '2rem' }}>
          <h3>
             Commerce Management Solution – IN PROGRESS
            <Link href="https://github.com/gtktorres/ComMan">
              <Image src={github} height="25" alt="Commerce Management Solution" />{" "}
            </Link>
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={CommerceManagement}
              width="300"
              height="300"
              alt="Commerce Management Solution"
            />
          </div>
          <ul>
            <li>
              This project involves creating a fully functional online shopping platform that allows 
              users to browse products, manage their shopping carts, and complete purchases. It also 
              includes an inventory management system to help store owners keep track of their products.
            </li>
            <li>
              With C#, HTML and CSS for the frontend and backend and MySQL and MSSMS for the database, 
              this application will provide a comprehensive solution for both customers and store owners 
              by keeping track of inventory and sales.
            </li>
          </ul>
        </div>
        <div className="Border" style={{ backgroundColor: 'hsla(240, 11%, 93%, 0.902)', padding: '2rem' }}>
          <h3>
            Old-School DnD Interactive Story
            <Link href="https://github.com/gtktorres/StoneMarbel-Old-School-MERNG">
              <Image src={github} height="25" alt="old-school DnD" />{" "}
            </Link>
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={InteractiveStory}
              width="300"
              height="300"
              alt="old-school DnD"
            />
          </div>
          <ul>
            <li>
              Worked on a team of 2 that provides an interactive fiction
              application that allows a user to make choices that allow for
              treasure and glory.
            </li>
            <li>
              Implemented with Express and GraphQL for the backend and a mix of
              Twine(Snowman) and React for the frontend. MongoDB for the
              database.
            </li>
          </ul>
        </div>
        <div className="Border" style={{ backgroundColor: 'hsla(240, 11%, 93%, 0.902)', padding: '2rem' }}>
                <h3>
                  Making Graphs More Accessible
                  <Link href="https://github.com/gtktorres/Making-Graphs-Accessible">
                    <Image src={github} height="25" alt="Make Graphs Accessible" />{" "}
                  </Link>
                </h3>
                <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={Graphs} height="300" alt="Make Graphs Accessible" />
                  </div>
                  <ul>
                    <li>
                      This app extracts data represented by five types of charts 
                      commonly found in STEM textbooks. Making graphs accessible 
                      to millions of students with a learning difference or 
                      disability that prevents a person from reading conventional print.
                    </li>
                    <li>
                      Implemented with Python and Tensorflow, the Graph data
                      provided for the competition trained the model in order to
                      make reading graphs accessible to millions of students with 
                      a learning difference or disability.
                    </li>
                  </ul>
            </div>
        <div className="Border" style={{ backgroundColor: 'hsla(240, 11%, 93%, 0.902)', padding: '2rem' }}>
                <h3>
                Javascript Automation for GW Purchases
                  <Link href="https://github.com/gtktorres/Javascript-Automation-for-GW-Purchases">
                    <Image src={github} height="25" alt="JS Automation" />{" "}
                  </Link>
                </h3>
                <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={Warhammer} height="300" alt="JS Automation" />
                  </div>
                  <ul>
                    <li>
                      When you know what you want, but have to deal with scalpers!
                    </li>
                    <li>
                      Implemented with Javascript, Reactjs, dotenv, and puppeteer-core, the data
                      provided to assist automation was procured through the use of 
                      Headless Recorder and debugged to provide a quick way to purchase items
                      when scalpers have a tendency to buyout online stock.
                    </li>
                  </ul>
            </div>    
        <div className="Border" style={{ backgroundColor: 'hsla(240, 11%, 93%, 0.902)', padding: '2rem' }}>
                <h3>
                  Toxic Comment Model
                  <Link href="https://github.com/GueTorres/Toxic-Comment-Model">
                    <Image src={github} height="25" alt="Toxic Model" />{" "}
                  </Link>
                </h3>
                <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={Toxic} height="300" alt="Toxic Model" />
                  </div>
                  <ul>
                    <li>
                      Can identify toxicity in online conversations, where
                      toxicity is defined as anything rude, disrespectful or
                      otherwise likely to make someone leave a discussion.
                    </li>
                    <li>
                      Implemented with Python and Tensorflow, the English data
                      provided for the competition trained the model in order to
                      predict toxicity from Wikipedia talk page comments in
                      several different languages.
                    </li>
                  </ul>
            </div>
            <div className="Border" style={{ backgroundColor: 'hsla(240, 11%, 93%, 0.902)', padding: '2rem' }}>
                <h3>
                  Repaycycle
                  <Link href="https://github.com/GueTorres/RePayCycle">
                    <Image src={github} height="25" alt="Repaycycle" />{" "}
                  </Link>
                </h3>
                <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={Repaycycle} height="300" alt="Repaycycle" />
                  </div>   
                  <ul>
                    <li>
                      Our application is designed to associate with upgraded
                      versions of reverse vending recycling machines similar to
                      those found at supermarkets as well as a user&#39;s bank
                      account.
                    </li>
                    <li>
                      A user would log into the app, associate with the specific
                      machine they wish to use, effectively creating a situation
                      where recycling is not only convenient, but also
                      profitable.
                    </li>
                  </ul>
            </div>
        </div>
    );
}

export default ProjectsList;