import starpic from '../assets/icon-ratings.png'
import { Link } from 'react-router'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ card }) => {

    useEffect(() => {
        AOS.init({ 
            duration: 1000
        });
    }, []);

    console.log(card)
    return (
        <div data-aos="zoom-in" className="card bg-base-100 p-1 h-80 w-full shadow-lg">
            <figure>
                <img
                    src={card.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{card.skillName}</h2>
                <div className="card-actions flex justify-between items-center">
                    <div className="card-actions">
                        <div className="badge font-bold p-4 badge-outline"><img className='size-4' src={starpic} alt="" />{card.rating}</div>
                        <div className="badge font-bold p-4 badge-outline">Price: ${card.price}</div>
                    </div>
                    <Link to={`details/${card.skillId}`} className='btn btn-primary'>View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card