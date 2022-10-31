export interface iProject {
    img: string
    link: string
    alt: string
}


export const Project = ({ img, link, alt}: iProject) => {
  return (
    <>
        <div className="project">
            <a href={ link }>
                <img
                    src={ require(`../images/projects/${img}.webp`) }
                    alt={ `Project ${alt}` }
                />
            </a>
        </div>
    </>
  )
}
