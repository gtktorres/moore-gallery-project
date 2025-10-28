"use client";
import OrderAdd from '@/components/OrderAdd';
import Image from 'next/image';
import Art0 from '../../components/Project-Images/Connie Art/1E239547-B299-4780-9949-2BC2B4664FD9.jpeg';
import Art1 from '../../components/Project-Images/Connie Art/8E30BA39-0E48-4722-B812-38FF2D3E7844.jpeg';
import Art2 from '../../components/Project-Images/Connie Art/394BEFEB-8975-4D43-8364-2F25DFD153C9.jpeg';

const tutorials = [         //TODO: Create api route to fetch products from database
    {
        id: 1,
        image: Art0,
        name: "Tutorial 1: Getting Started",
        price: 19.99,
        description: "Learn the basics of our platform and how to get started.",
    },
    {
        id: 2,
        image: Art1,
        name: "Tutorial 2: Advanced Techniques",
        price: 29.99,
        description: "Dive deeper into advanced features and techniques.",
    },
    {
        id: 3,
        image: Art2,  
        name: "Tutorial 3: Expert Tips",
        price: 39.99,
        description: "Master the platform with expert tips and tricks.",
    },
];

const Tutorials = () => {
  return (
    <div>
        <main>
            <div className={`main-content`} style={{ margin:"6rem", marginTop: "2.5rem", textAlign: "center" }}>
                <h1 style={{color:"hsla(240, 69%, 46%, 0.90)"}}>More Tutorials Coming Soon!</h1>
            </div>
            <div className="container-tutorials" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginBottom:"6rem"}}>
                {tutorials.map((tutorial: {id: number; name: string; price: number; description: string; image: import("next/image").StaticImageData }) => (
                    <div className="tutorial-item" key={tutorial.id}>
                          
                            <div className="container-tutorial" style={{margin:"1rem", padding:"1rem", position:"relative", width:"90rem", height:"8rem", borderRadius:"10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", overflow:"hidden"}}>
                                <Image
                                    src={tutorial.image}
                                    alt={tutorial.name}
                                    unoptimized={true}
                                    fill={true}
                                    style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", objectFit: "cover" }}
                                />
                                <div className="tutorial-details" style={{position:"relative", zIndex:2, backgroundColor:"rgba(255, 255, 255, 0.8)", padding:"1rem", borderRadius:"10px", marginTop:"0.1rem", textAlign:"center"}}>
                                    {tutorial.description}
                                    <br />
                                    Price: ${tutorial.price}
                                    <OrderAdd item={tutorial} /> 
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </main>
    </div>
  );
}

export default Tutorials;