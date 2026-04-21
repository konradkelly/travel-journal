import globe from "./assets/globe.png"
import './Header.css'

export default function Header() {
    return (
    <header>
        <img src={globe} alt="Globe" />
        <h1>my travel journal</h1>
    </header>
    )
}