import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowCircleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ProjectCard(props){

    return(
        <div className="projectCard">
            <img src={props.img} alt="" />
            <div className="details">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <div className="links">
                <a href={props.repo} ><FontAwesomeIcon icon={faGithub}/></a>
                <a href={props.demo} ><FontAwesomeIcon icon={faArrowCircleRight}/></a>
            </div>
        </div>
    )
}

export default ProjectCard