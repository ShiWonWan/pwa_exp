import { Project, iProject } from './Project';

const estadias: iProject = {
    img: 'estadiasTSU',
    link: 'https://github.com/ShiWonWan/estadiasTSU',
    alt: 'Blockchain for record team activities'
}

const apiminecraft: iProject = {
    img: 'api_minecraft_flask',
    link: 'https://github.com/ShiWonWan/api_minecraft_flask',
    alt: 'Api Minecraft with Flask'
}

const simplehome: iProject = {
    img: 'SimpleHomePageCrud',
    link: 'https://github.com/ShiWonWan/SimpleHomePageCrud',
    alt: 'Simple Home Page with CRUD'
}

const betterhome: iProject = {
    img: 'HomePage',
    link: 'https://github.com/ShiWonWan/HomePage',
    alt: 'Better Home Page'
}

const bluep: iProject = {
    img: 'API-Flask-with-Blueprints',
    link: 'https://github.com/ShiWonWan/API-Flask-with-Blueprints',
    alt: 'API Flask with blueprints'
}

const blog: iProject = {
    img: 'BlogApp',
    link: 'https://github.com/ShiWonWan/BlogApp',
    alt: 'Blog App'
}

const mkad: iProject = {
    img: 'distance_to_mkad',
    link: 'https://github.com/ShiWonWan/distance_to_mkad',
    alt: 'Distance to the MKAD Road in Russia'
}

const imgapp: iProject = {
    img: 'ImagesCloudApp',
    link: 'https://github.com/ShiWonWan/ImagesCloudApp',
    alt: 'Images Cloud App'
}

const logreen: iProject = {
    img: 'LoginUIGreenFlutter',
    link: 'https://github.com/ShiWonWan/LoginUIGreenFlutter',
    alt: 'Login Green UI in Flutter'
}

const simplogin: iProject = {
    img: 'SimpleLoginUIFlutter',
    link: 'https://github.com/ShiWonWan/SimpleLoginUIFlutter',
    alt: 'Simple Login UI Flutter'
}

const simpletodo: iProject = {
    img: 'SimpleToDoApp',
    link: 'https://github.com/ShiWonWan/SimpleToDoApp',
    alt: 'Simple To Do App'
}

const usercrud: iProject = {
    img: 'Users_MERN_CRUD',
    link: 'https://github.com/ShiWonWan/Users_MERN_CRUD',
    alt: 'Users MERN Crud'
}

const projects: Array<iProject> = [
    estadias, apiminecraft, simplehome, betterhome,
    bluep, blog, mkad, imgapp, logreen, simplogin,
    simpletodo, usercrud
]

export const Projects = () => {
  return (
    <>
        <section className="projects">
            <h2>Projects.</h2>

            <div className="gallery">
                {
                    projects.map((project, index) => (
                        <Project
                            key={ index }
                            img={ project.img }
                            link={ project.link }
                            alt={ project.alt }
                        />
                    ))
                }
            </div>
            
        </section>
    </>
  )
}
