import '../styles/about.css'
import {useState} from 'react';
import Slider from './Slider';


const arr = [
    {
        name : "Summary",
        info : [{
            description : "I am an enthusiastic developer, looking for an opportunity where I can utilize my skills in building a real world project.",
            aim : "Aim to improve my skills and understand about the real world project."
        }]
    },
    {
        name : "Education",
        info : [{
            description : "Bangalore University, Chemistry",
            aim : "2018-2022"
        },
        {
            description : "B G S P U College",
            aim : "2015-2017"
        }
        ]
    },
    {
        name : "Skills",
        info : [{
            description : "Front-end",
            aim : "Html, CSS, JavaScript, React, Tailwind"
        },{
            description : "Back-end",
            aim : "Java, Nodejs, Expresss, MySQL, MongoDB"
        }]
    }
]

const About = ()=>{
    return(
        <>            
        <div className='about'>
            <h1 className='abt-heading'>Things You Need To Know About Me</h1>
            <Slider slideArr = {arr}/>
        </div>
        </>
    )
}

export default About;