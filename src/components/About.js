// use Link with Routes to prevent page load and make it instant
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default About
