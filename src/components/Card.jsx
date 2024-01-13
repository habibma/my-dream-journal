import React from "react";
import mail from '../assets/envelope-solid.svg'

const Card = (props) => {
    console.log(props)
    return (
        <div className="card">
            <img src={`../images/${props.image}`} className="card--image" />
            <section className="card--descryption">
                <h2>{props.title}</h2>
                <span>{props.startDate}</span>
                <p className="card--description">{props.description}</p>
            </section>
            <section className="card--links">
                <p>{props.certificationUrl && <>Graduated from <b><a href={props.certificationUrl}>{props.certification}</a></b></>}{props.showcaseUrl && <> and you can see the result of my work <b><a href={props.showcaseUrl}>here</a></b></>}</p>
                {!props.certificationUrl && !props.showcaseUrl && <div className="card--mail"><img src={mail} alt="mail icon" /><p>habib.motavassel@gmail.com</p></div>}
            </section>
        </div>
    )
}

export default Card;