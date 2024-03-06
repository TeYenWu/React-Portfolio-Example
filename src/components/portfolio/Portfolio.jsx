import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
        id:"featured",
        title:"Featured",
    },
    {
        id:"research",
        title:"Research",
    },
    {
        id:"web",
        title:"Web App",
    },
    {
        id:"design",
        title:"Design",
    }
  ];

  useEffect(() => {
    fetch('./data.json').then(response => response.json()).then(data => setData(data))
  }, [])
  
  return (
    <div className='portfolio' id = 'portfolio'> 
        <h1>Portfolio</h1>
        <ul>
            {list.map((item)=>(
                <PortfolioList 
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id = {item.id}
                ></PortfolioList>
            ))}
        </ul>
        <div className="container">
            {data[selected] && data[selected].map((d)=>{
                return (
                <div className="item">
                    <h3>{d.title}</h3>
                    <img src={d.img}></img>
                </div>
                )
            })}
            
        </div>
    </div>
  )
}

// 1. adding list and introduce map in jsx without adding container
// 2. importing and adding PortoflioList without active and setSelected
// 3. import and adding useEffect and useState for data (get featured data only)
// 4. add select feature by adding select state
// 5. end
{/* <div className="container">
            {data["featured"] && data["featured"].map((d)=>{
                return (
                <div className="item">
                    <h3>{d.title}</h3>
                    <img src={d.img}></img>
                </div>
                )
            })}
            
        </div>
    */}