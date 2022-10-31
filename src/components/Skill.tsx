import { IconType } from "react-icons/lib"

export interface iSkill {
    Icon: IconType
    completed: number
    bgcolor: string
}



export const Skill = ({ Icon, completed, bgcolor } : iSkill) => {
  return (
    <>
    <div className="skill">
        <span className="skillDesc"><Icon /></span>
        <div className="skillContainer">
            <div className="skillFillerBar" style={{
                width: `${completed}%`,
                backgroundColor: bgcolor
            }}>
                <span className="skillBar">{`${completed}%`}</span>
            </div>
        </div>
    </div>
    </>
  )
}