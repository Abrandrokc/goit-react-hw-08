import { Link } from "react-router-dom";

export default function HomePage() {
    return <div>
        <h1>Phone list app</h1>
        <p>Its app create to save phone number.
            Just <span> <Link to="/login">try</Link></span> </p>
    </div>
}