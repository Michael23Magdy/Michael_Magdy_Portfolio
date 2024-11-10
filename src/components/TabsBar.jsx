import { useContext } from "react"
import { activeTabContext } from "./ContentBox"

function TabsBar(){
    const {activeTab, setActiveTab} = useContext(activeTabContext);

    return(
        <div className="tabs">
            <button className={activeTab=='Home'?'active':'inactive'} onClick={() => setActiveTab('Home')}>Home</button>
            <button className={activeTab=='Skills'?'active':'inactive'} onClick={() => setActiveTab('Skills')}>Skills</button>
            <button className={activeTab=='Projects'?'active':'inactive'} onClick={() => setActiveTab('Projects')}>Projects</button>
        </div>
    )
}

export default TabsBar