
function SkillCard(props){

    return(
        <div className="skillCard">
            <img src={props.img} alt="" />
            <p>{props.skill}</p>
        </div>
    )
}

export default SkillCard