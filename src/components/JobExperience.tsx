import { FiCalendar, FiClock } from "react-icons/fi";
import { FaRegBuilding, FaBriefcase } from "react-icons/fa";

export interface Job {
    title: string
    company: string
    type: string
    intervalDate: string
    description: string
    imageFileName?: string | null
    leftLogo: boolean
}

export const JobExperience = ({ title, company, type, intervalDate, description, imageFileName = null, leftLogo }: Job) => {
    return (
        <>
            <div className="JobExperience">

                {
                    imageFileName !== null && leftLogo
                        ?
                        <img
                            src={require(`../images/jobs/${imageFileName}`)}
                            alt={`Work ${title}`}
                            className="imageJob"
                        />
                        :
                        null

                }
                <ul>
                    <li style={{
                        fontWeight: 'bold'
                    }}><p><FaBriefcase /> {title}</p></li>
                    <li style={{
                        fontStyle: 'italic'
                    }}><p><FaRegBuilding /> {company}</p></li>
                    <li><p><FiClock /> {type}</p></li>
                    <li><p><FiCalendar /> {intervalDate}</p></li>
                    <li><p>{description}</p></li>
                </ul>
                {
                    imageFileName !== null && !leftLogo
                        ?
                        <img
                            src={require(`../images/jobs/${imageFileName}`)}
                            alt={`Work ${title}`}
                            className="imageJob"
                            style={{
                                marginLeft: '2rem'
                            }}
                        />
                        :
                        null

                }
            </div>
        </>
    )
}
