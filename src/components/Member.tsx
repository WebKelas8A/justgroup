import "@/components/style.scss";
import Data from "@/components/Data";
import Card from "@/components/Card";

export default function Member(){
    const dataComp = Data.map((data:any)=>{
        return(
            <Card 
                key={data.key}
                nama={data.nama}
                img={data.img}
                role={data.role}
                logo={data.logo}
                desc={data.desc}
            />
        )
    })
    
    return(
        <div className="grid" id="member">
            <h1 className="place-self-center text-2xl font-bold lg:text-6xl">Our Members!</h1>
            <div className="h-screen grid">
                <div className="place-self-center gap-5 grid grid-cols-1 z-0 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-16">
                    {dataComp}
                </div>
            </div>
        </div>
    );
}