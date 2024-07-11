import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';



const App = ()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}


const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path :"/about",
                element : <About/>
            },
            {
                path : "/projects",
                element : <Projects/>
            },
            {
                path : "/contact",
                element : <Contact/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>);