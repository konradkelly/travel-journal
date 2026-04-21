import locationMarker from "./assets/location marker.png"
import './Entry.css'

export default function Entry(props) {
    console.log(props)
    return (
        <article className="journal-entry">
            <div className="main-image-container">    
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="entry-content">
                <div className="location-icon">
                    <img src={locationMarker} alt="map marker icon" />
                    <span className="country">{props.country}</span>
                    <a href={props.googleMapsLink}> View on Google Maps</a>
                </div>
                <h2 className="entry-title">{props.title}</h2> 
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>           
            </div>
        </article>
    ) 
}