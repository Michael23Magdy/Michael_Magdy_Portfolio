import { createContext, useState } from "react"
import TabsBar from './TabsBar'
import Skills from "./Skills/Skills";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";


function chooseTab(activeTab){
    if(activeTab == 'Home') return <Home />
    else if(activeTab == 'Skills') return <Skills />
    else if(activeTab == 'Projects') return <Projects />
}

export const activeTabContext = createContext();

function ContentBox(){
    const [activeTab, setActiveTab] = useState('Home');

    return(
        <div className="contentBox">
            <activeTabContext.Provider value={{activeTab, setActiveTab}}>
                <TabsBar />
            </activeTabContext.Provider>
            <div className="tabContentContainer">
                {chooseTab(activeTab)}
            </div>
        </div>
    )
}

export default ContentBox