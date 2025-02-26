import { useGet } from "../../hooks/useGet"
import style from "./EstateCard.module.scss"
import { NavLink } from "react-router";


export function EstateCard ( {imgSrc, address, city, type, energy, space, price, id }) {

    return (
        <NavLink to={`/details/${id}`}>
        
        <section className={style.card}>   

                    <img src={imgSrc}></img>
                    <h3>{address}</h3>
                    <p>{city}</p>
                    <p>{type}</p>
                    <div>
                        <h4>{energy}</h4>
                        <h4>{space}</h4>
                        <h3>{price}</h3>
                    </div>
        </section>
        </NavLink>
    )
}