import { JobExperience, Job } from './JobExperience';

export const Experience = () => {

    const tgcJob: Job = {
        title: 'Software Development Engineer',
        company: 'Tecnologia de Gestion y Comunicacion SA de CV',
        type: 'Fulltime',
        intervalDate: 'sept. 2021 - may. 2022',
        description: 'I worked as a fullstack software engineer, using Oracle technologies, under CMMI 5, always having a substantial control of each development done, also, based on TSP/PSP. \nUsing git, time control (process dashboard), agile methodology with SCRUM, and JIRA to manage each requirement.',
        imageFileName: 'tgc.png',
        leftLogo: true
    }

    const vortemJob: Job = {
        title: 'Full Stack Developer',
        company: 'Vortem Consulting',
        type: 'Fulltime',
        intervalDate: 'may. 2022 - actually',
        description: 'I work developing, implementing, improving and creating ERP\'s for financial systems, using Odoo, Python, ORM, Postgres, HTML5, CSS3, JavaScript (ES6), and a lot of creativity and problem-solving, dealing directly with the client and consultants.',
        imageFileName: 'vortem.png',
        leftLogo: true
    }

    const utchJob: Job = {
        title: 'Blockchain for record team activities',
        company: 'Technological University of Chihuahua',
        type: 'Freelance professional',
        intervalDate: 'may. 2021 - aug. 2021',
        description: 'I developed a Client-Server application implementing Blockchain, python flask framework, react and Mongo, for recording sensors activities (like temperature, humidity, etc.)\nThis was my Tesis-Like project for graduate as a superior technician.',
        imageFileName: 'utch.png',
        leftLogo: true
    }

    const jobs: Array<Job> = [ vortemJob, tgcJob, utchJob ]

  return (
    <> 
        <section className="experience" id="experience">
            <h2>Experience.</h2>

            {
                jobs.map((job, index) => (
                    <JobExperience 
                        key = { index }
                        title = { job.title }
                        company = { job.company }
                        type = { job.type }
                        intervalDate = { job.intervalDate }
                        description = { job.description}
                        imageFileName = { job.imageFileName }
                        leftLogo = { job.leftLogo }
                    />
                ))
            }
            <p style={{
                textAlign: 'center',
                fontSize: '1.5rem'
            }}>❤️ All of my work is made with love ❤️</p>


        </section>
    </>
  )
}
