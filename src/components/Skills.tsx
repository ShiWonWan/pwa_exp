import { Skill, iSkill } from "./Skill"
import { FaPython, FaReact, FaLinux, FaPhp } from "react-icons/fa"
import { AiOutlineConsoleSql } from "react-icons/ai"
import { SiMongodb } from "react-icons/si"

const linux: iSkill = {
    Icon: FaLinux,
    completed: 94,
    bgcolor: '#f5e347'
}

const python: iSkill = {
    Icon: FaPython,
    completed: 92,
    bgcolor: '#3820d4'
}

const db: iSkill = {
    Icon: AiOutlineConsoleSql,
    completed: 87,
    bgcolor: '#c4146f'
}

const mongo: iSkill = {
    Icon: SiMongodb,
    completed: 85,
    bgcolor: '#1c943e'
}

const react: iSkill = {
    Icon: FaReact,
    completed: 78,
    bgcolor: '#1cf7ff'
}

const php: iSkill = {
    Icon: FaPhp,
    completed: 65,
    bgcolor: '#601c87'
}

const skills: Array<iSkill> = [
    linux,
    python,
    db,
    mongo,
    react,
    php
]

export const Skills = () => {
  return (
    <>  
        <section className="skills">
            <h2>Skills.</h2>

            {
                skills.map((skill, index) => (
                    <Skill 
                        key={ index }
                        Icon={ skill.Icon }
                        completed={ skill.completed }
                        bgcolor={ skill.bgcolor }
                    />
                ))
            }
            
        </section>
    </>
  )
}
