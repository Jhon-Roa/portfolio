'use client'
import { useState, useEffect } from 'react'

const styles = {
    mainDiv: "overflow-hidden bg-[url('./images/background.jpg')] bg-cover bg-center min-w-screen min-h-screen max-w-screen max-h-screen",
    arrowLeft: "absolute left-2 top-1/2 -translate-y-1/2 text-3xl cursor-pointer text-white z-10",
    arrowRight: "absolute right-2 top-1/2 -translate-y-1/2 text-3xl cursor-pointer text-white z-10",
    carouselContent: "flex justify-center items-center  w-full h-full",
    firstSecondDiv: "grid pt:grid-rows-2 ls:grid-cols-2 w-screen h-screen animate-slidein",
    thirdDiv: "flex flex-col justify-center overflow-auto ls:mt-16 ls:lg:mt-0 4 w-screen h-screen animate-slidein ",
    infoDiv: "flex justify-center flex-col mt-14 mb-2 lg:my-32 lg:mx-12 lg:px-4 px-1 mx-2 bg-black rounded-xl opacity-50 hover:opacity-75 shadow-lg transition",
    prfessionalObjetiveDiv: "flex justify-center flex-col mb-2 lg:px-6 px-2 lg:mx-10 mx-1 bg-black rounded-xl opacity-50 hover:opacity-75 shadow-lg transition",
    title: "text-fuchsia-100 text-3xl lg:text-6xl font-bold pb-4",
    mainParagraph: " lg:text-2xl pl-2 lg:pl-6 text-sm text-justify",
    subTitle: "text-fuchsia-100 text-1xl lg:text-3xl font-bold pb-2 pt-4 ",
    subParagraph: " lg:text-2xl pl-2 lg:pl-6 text-sm text-justify pb-4"

}

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [animation, setAnimation] = useState('')

    const items = [
        <div className={styles.firstSecondDiv}>
            <div className={styles.infoDiv}>
                <h1 className={styles.title}>Who Am I?</h1>
                <p className={styles.mainParagraph}>Did you know that you can program without ever
                     leaving the terminal? My name is Jhon, and 
                     I'm a passionate Full Stack Developer who 
                     enjoys finding creative solutions and 
                     exploring different approaches, including 
                     using powerful terminal-based tools. I like 
                     to describe myself as a curious person, always 
                     eager to learn new technologies and understand 
                     how things work. This mindset drives me to stay 
                     up-to-date with the latest trends in development 
                     and continuously expand my skills.</p>
            </div>
            <div className={styles.infoDiv}>
                <h2 className={styles.subTitle}>How I You Like to Be Called?</h2>
                <p className={styles.subParagraph}>I would like to be known as Jhon, the developer 
                    who consistently puts forth his best effort, even in the smallest of tasks.</p>
                <h2 className={styles.subTitle}>How Would You Like to Be Remembered?</h2>
                <p className={styles.subParagraph}>I hope to be remembered as someone who was always 
                there for others, even when not physically present.</p>
                <h2 className={styles.subTitle}>What Would You Like People to Think When You Step Forward?</h2>
                <p className={styles.subParagraph}>I would like people to feel a sense of calm and 
                    reassurance when I step onto the stage, knowing that I am ready to share my thoughts 
                    with clarity and confidence.</p>
            </div>
        </div>,

        <div className={styles.firstSecondDiv}>
            <div className={styles.infoDiv}>
                <h1 className={styles.title}>Mission</h1>
                <p className={styles.mainParagraph}>I develop scalable and efficient solutions focused on the 
                    backend, with an emphasis on creating REST APIs. My goal is to collaborate with programmers 
                    dedicated to web application development, bringing my adaptability and focus to the table. 
                    I offer my services through professional platforms and my portfolio, always seeking to deeply 
                    understand how things work in order to optimize each project and successfully tackle new challenges.</p>
            </div>
            <div className={styles.infoDiv}>
                <h1 className={styles.title}>Vision</h1>
                <p className={styles.mainParagraph}>To be a leading professional in backend software development, 
                    recognized for providing scalable, efficient, and high-quality solutions. I aspire to collaborate 
                    with companies and programmers on challenging projects, contributing an analytical and adaptable 
                    approach that optimizes processes and systems. My goal is to stay at the forefront of technological 
                    development, expanding my impact and constantly adapting to market needs.</p>
            </div>
        </div>,
        
        <div className={styles.thirdDiv}>
            <div className={styles.prfessionalObjetiveDiv}>
            <h2 className={styles.subTitle}>Pursue a Degree</h2>
            <p className={styles.subParagraph}>One of my main objectives right now is to continue my studies, and I believe my next goal is to obtain a degree 
            in Data Science engineering.</p>
            </div>
            <div className={styles.prfessionalObjetiveDiv}>
            <h2 className={styles.subTitle}>Learn New Technologies</h2>
            <p className={styles.subParagraph}>As a junior developer, I aspire to learn more technologies because the programming world is vast, and it is 
            essential to stay updated by continually exploring new advancements.</p>
            </div>
            <div className={styles.prfessionalObjetiveDiv}>
            <h2 className={styles.subTitle}>Improve My Soft Skills</h2>
            <p className={styles.subParagraph}>One of the most important aspects of the programming field is being a good person and communicator. This is an 
            area where I recognize I have weaknesses, so I am continually working to improve my skills and become better.</p>
            </div>
            <div className={styles.prfessionalObjetiveDiv}>
            <h2 className={styles.subTitle}>Gain More Experience</h2>
            <p className={styles.subParagraph}>I believe that one of the best ways to improve my skills is by gaining hands-on experience in the field. 
            Therefore, I am eager to take on projects with the primary objective of acquiring knowledge and expertise.</p>
            </div>
        </div>
    ]

    const handleNext = () => {
        setAnimation('animate-slideOutLeft')
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length)
            setAnimation('animate-slideInRight')
        }, 500)
    }

    const handlePrev = () => {
        setAnimation('animate-slideOutRight')
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
            setAnimation('animate-slideInLeft')
        }, 500)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimation('')
        }, 500)
        return () => clearTimeout(timer)
    }, [activeIndex])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                handleNext()
            } else if (event.key === 'ArrowLeft') {
                handlePrev()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <div className={styles.mainDiv}>
            <button onClick={handlePrev} className={styles.arrowLeft}>
                <i className='bx bxs-chevrons-left'></i>
            </button>
            <div className={`${styles.carouselContent} ${animation}`}>
                {items[activeIndex]}
            </div>
            <button onClick={handleNext} className={styles.arrowRight}>
                <i className='bx bxs-chevrons-right'></i>
            </button>
        </div>
    )
}

export default About