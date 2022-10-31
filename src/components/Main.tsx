import { Banner } from './Banner'
import { AboutMe } from './AboutMe'

import { TopWaves } from './Extra'
import { Experience } from './Experience'
import { Skills } from './Skills'
import { Languages } from './Languages'
import { Projects } from './Projects'


export const Main = () => {
  return (
    <>
      <div className="bannerContainer">
        <Banner />
      </div>
      <TopWaves/>
      <AboutMe />
      <hr className='spe'/>
      <Experience />
      <hr className='spe'/>
      <Skills />
      <hr className='spe'/>
      <Languages />
      <hr className='spe'/>
      <Projects />
    </>
  )
}
