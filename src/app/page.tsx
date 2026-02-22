import '../styles/globals.css'
import Image from 'next/image';
//import LearnMore from '@/components/LearnMore';
const videoUrl = ('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnlzNHNhYTlvanh0ZHB2cWRmeTdoeGxoMHZqNmZwd2lpbWM0Nm5lNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1d5KycX3jcCyhGicqO/giphy.gif');

export default function page() {
  return (
    <div>
      <main>
        <div className='container-home'>
          <div className='top' style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginTop:"6rem"}}>
              <Image
                src={videoUrl}
                alt="Video"
                width={1000}
                height={500}
                unoptimized={true}
                style={{borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}}
              />
          </div>
          <div className="middle" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", margin:"1rem", padding:"5rem"}}><h2 style={{color:"hsla(240, 11%, 93%, 0.902)"}}></h2></div>
          {/* <div className="my-button-home" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <LearnMore /> 
          </div> */}
        </div>
      </main>
    </div>
  );
}
