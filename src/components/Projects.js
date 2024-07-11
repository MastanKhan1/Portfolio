import { Link } from "react-router-dom";
import '../styles/projects.css'


const projects = [
    {
        title : "Todo App",
        description : "Front end React App",
        info : "Handled input, displaying todos and storing todos using Redux",
        url : "https://github.com/MastanKhan1/ToDoApp"
    },
    {
        title : "News Portal",
        description : "Front end React App",
        info : "Handled data from NewsAPI, Shimmer and isOnline",
        url : "https://github.com/MastanKhan1/NewsPortal"
    },
    {
        title : "My Portfolio",
        description : "Front end App",
        info : "Handled multiple pages",
        url : "https://mastankhan1.github.io/My_Portfolio/"
    },
    {
        title : "Harmony",
        description : "Front end App",
        info : "Handled multiple pages",
        url : "https://mastankhan1.github.io/harmony_frontEnd/"
    },
]


const ProjectCard = ({title, description, info, url})=>{
    return(
        <>
            <Link to={url}>
                <div className="projects-item">
                    <h3>{title}</h3>
                    <h5>{description}</h5>
                    <p>{info}</p>
                </div>
            </Link>
        </>
    )
}

const Projects = ()=>{
    console.log(projects);
    return(
        <>
        <div className="projects">
            <h1>Here are some of my Projects</h1>
            <div className="projects-container">
                    
                    {
                        projects?.map(item=>{
                            return(
                                <>
                                <ProjectCard {...item}/>
                                </>
                            )
                        })
                    }
                </div>
        </div>
        </>
    )
}

export default Projects;