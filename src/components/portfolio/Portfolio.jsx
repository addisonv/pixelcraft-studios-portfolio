import "./portfolio.scss";
import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";
import {
    websitesPortfolio, 
    uiuxPortfolio, 
    graphicDesginPortfolio, 
    videographyPortfolio, 
    artworkPortfolio, 
    photographyPorfolio} from "../../data";

export default function Portfolio() {
    const [selected,setSelected] = useState("websites")
    const [data,setData] = useState([])
    const list = [
        {
            id: "uiuxprojects",
            title: "UI/UX Projects",
        },
        {
            id: "websites",
            title: "Websites",
        },
        {
            id: "graphicdesign",
            title: "Graphic Design",
        },
        {
            id: "artwork",
            title: "Artwork",
        },
        {
            id: "videography",
            title: "Videography",
        },
        {
            id: "photography",
            title: "Photography",
        }
    ];

    useEffect(()=>{

        switch(selected){
            case "uiuxprojects":
                setData(uiuxPortfolio);
                break;
            case "websites":
                setData(websitesPortfolio);
                break;
            case "graphicdesign":
                setData(graphicDesginPortfolio);
                break;
            case "artwork":
                setData(artworkPortfolio);
                break;
            case "videography":
                setData(videographyPortfolio);
                break;
            case "photography":
                setData(photographyPorfolio);
                break;
                default:
                    setData(uiuxPortfolio);
        }

    }, [selected])

    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    key={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <div className="items" key={d.id}>
                    <img src={d.img} alt="Portfolio Data"/>
                    <a href={d.a} target="_blank" rel="noreferrer">{d.title}</a>
                </div>
                 ))}
            </div>
        </div>
    )
}