import ProjectCard from "./ProjectCard"
import { projectsList } from "./projectsList"

function Projects(){
    return(
        <div className="projectsTab">
            {
                projectsList.map(element => 
                    <ProjectCard img={element.img} 
                                name={element.name} 
                                description={element.description}
                                demo={element.demo}
                                repo={element.repo}/>
                )   
            }
        </div>
    )
}

export default Projects