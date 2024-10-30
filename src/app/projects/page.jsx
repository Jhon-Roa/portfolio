'use client'

import Link from "next/link"

const styles = {
  mainDiv: "bg-[url('./images/backgroundProjects.jpg')] bg-cover bg-center min-w-screen min-h-screen max-w-screen max-h-screen overflow-x-hidden",
  container: "container mx-auto p-6",
  scrollContainer: "max-h-[calc(100vh-4rem)] overflow-y-auto",
  projectsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:m-12 gap-6",
  projectLink: "transition-transform hover:scale-105",
  projectCard: "h-full flex flex-col bg-black opacity-70 hover:opacity-90 transition justify-center  backdrop-blur-sm  transition-colors rounded-lg p-6",
  cardHeader: "flex items-center justify-between mb-2",
  cardTitle: "text-xl font-bold",
  cardDescription: "text-white text-sm mb-4",
  tagsContainer: "flex flex-wrap gap-2",
  tag: "px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm",
  icon: "text-2xl"
}

const projects = [
  {
    title: "Cotization Page",
    description: "An application created for a user to calculate the cost of creating an app by answering a form; the page was based on the website www.cuantocuestamiapp.co",
    githubUrl: "https://github.com/Jhon-Roa/cotization-page",
    tags: ["Javascript"]
  },
  {
    title: "Portfolio",
    description: "Portfolio created with the intention of showcasing my skills up to the present day when the portfolio was made.",
    githubUrl: "https://github.com/Jhon-Roa/portfolio",
    tags: ["React", "Next.js", "TailwindCss"]
  },
  {
    title: "Companies management system",
    description: "Full-stack project developed in a team, where all our programming skills were put to the test. The project is based on creating a management and sales system for services from various companies through role management using Spring Security.",
    githubUrl: "https://github.com/JuanRojasAguilar/companies-management-system",
    tags: ["Java", "Next.js", "Spring-boot", "PosgreSql"]
  },  
  {
    title: "Basic Store",
    description: "A small full-stack project connecting the backend with the frontend and using the Shadcn component library.",
    githubUrl: "https://github.com/Jhon-Roa/Basic_Store",
    tags: ["React", "Spring-boot", "PosgreSql"]
  },  
  {
    title: "Farmacy Project",
    description: "Java backend project implementing hexagonal architecture with vertical slicing, connecting to the database while adhering to SOLID principles.",
    githubUrl: "https://github.com/Jhon-Roa/firstproject",
    tags: ["Java"]
  }, 
  {
    title: "Journey Project",
    description: ".NET backend project aimed at creating an API to calculate flight trajectories, using a DDD architecture and CQRS pattern.",
    githubUrl: "https://github.com/Jhon-Roa/journeyProject",
    tags: ["C#", ".NET"]
  },  
]

export default function Projects() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.container}>
        <div className={styles.scrollContainer}>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <Link 
                key={index} 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <div className={styles.projectCard}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <i className='bx bxl-github text-2xl'></i>
                  </div>
                  <p className={styles.cardDescription}>{project.description}</p>
                  <div className={styles.tagsContainer}>
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={styles.tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}