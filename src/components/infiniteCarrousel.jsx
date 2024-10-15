'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { JavaScriptIcon, ReactIcon, NextjsIcon, DockerIcon, TailwindIcon, SpringBootIcon, MySQLIcon, PostgreSQLIcon, GitIcon, GithubIcon } from '../../public/technologies'

const technologies = [
    { id: '1', nombre: "JavaScript", imagen: <JavaScriptIcon /> },
    { id: '2', nombre: "React", imagen: <ReactIcon /> },
    { id: '3', nombre: "Next.js", imagen: <NextjsIcon /> },
    { id: '4', nombre: "Docker", imagen: <DockerIcon /> },
    { id: '5', nombre: "Tailwind CSS", imagen: <TailwindIcon /> },
    { id: '6', nombre: "Spring Boot", imagen: <SpringBootIcon /> },
    { id: '7', nombre: "MySQL", imagen: <MySQLIcon /> },
    { id: '8', nombre: "PostgreSQL", imagen: <PostgreSQLIcon /> },
    { id: '9', nombre: "Git", imagen: <GitIcon /> },
    { id: '10', nombre: "GitHub", imagen: <GithubIcon /> }
]

const styles = {
  card: "w-full h-40 rounded-xl bg-black hover:bg-opacity-75 transition bg-opacity-50 flex flex-col justify-center items-center",
  cardName: "text-center text-white mt-4"
}

export default function InfiniteCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef(null)

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const extendedItems = [...technologies, ...technologies.slice(0, 3)]

  return (
    <div className="w-full overflow-hidden py-10">
      <motion.div ref={carousel} className="cursor-grab" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex"
          animate={{ x: [-width, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {extendedItems.map((item, index) => (
            <motion.div key={item.id + '-' + index} className="min-w-[250px] sm:min-w-[320px] p-4">
              <div className={styles.card}>
                <div>
                  {item.imagen}
                </div>
                <p className={styles.cardName}>{item.nombre}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}