"use client";
import OrderAdd from '@/components/OrderAdd';
const tutorials = [         //TODO: Create api route to fetch products from database
    {
        id: 1,
        name: "Tutorial 1: Getting Started",
        price: 19.99,
        description: "Learn the basics of our platform and how to get started.",
    },
    {
        id: 2,
        name: "Tutorial 2: Advanced Techniques",
        price: 29.99,
        description: "Dive deeper into advanced features and techniques.",
    },
    {
        id: 3,  
        name: "Tutorial 3: Expert Tips",
        price: 39.99,
        description: "Master the platform with expert tips and tricks.",
    },
];

const Tutorials = () => {
  return (
    <div>
        <main>
            <div className={`main-content`} style={{ marginBottom:"6rem", marginTop: "2.5rem", textAlign: "center" }}>
                <h1 style={{color:"hsla(240, 69%, 46%, 0.90)"}}>More Tutorials Coming Soon!</h1>
            </div>
            <div className="container-tutorials" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginBottom:"6rem"}}>
                {tutorials.map((tutorial: {id: number; name: string; price: number; description: string;}, index) => (
                    <div key={index} className="tutorial-item" style={{margin:"1rem", padding:"1rem", border:"1px solid #ccc", borderRadius:"8px", width:"60%"}}>
                        <h2 style={{color:"hsla(240, 69%, 46%, 0.90)"}}>{tutorial.name}</h2>
                        <p style={{color:"hsla(240, 76%, 42%, 0.70)"}}>{tutorial.description}</p>
                        <p style={{color:"hsla(240, 76%, 42%, 0.70)"}}>Price: ${tutorial.price}</p>
                        <OrderAdd item={tutorial} /> 
                    </div>
                ))}
            </div>
        </main>
    </div>
  );
}

export default Tutorials;