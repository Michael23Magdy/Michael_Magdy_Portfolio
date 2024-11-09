import SkillCard from "./SkillCard"
import { skillsList } from "./skillsList"

function Skills(){
    return(
        <div className="skillsTab">
            {
                skillsList.map(element => 
                    <SkillCard img={element.img} skill={element.skill}/>
                )   
            }
        </div>
    )
}

export default Skills