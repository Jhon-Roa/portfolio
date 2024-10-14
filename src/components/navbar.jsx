'use client'
import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const styles = {
    nav: "w-full h-10 fixed flex items-center justify-center lg:justify-end",
    container: "bg-[#8020a5] rounded-full p-1 mt-4 lg:mr-6 relative shadow-inner",
    switcher: "absolute bg-white rounded-full shadow-lg",
    list: "flex relative z-10",
    item: "relative flex items-center justify-center",
    link: "px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center justify-center h-full w-full",
    activeLink: "text-fuchsia-800",
    inactiveLink: "text-white hover:text-fuchsia-200"
}

export default function NavBar() {
    const router = useRouter()
    const pathname = usePathname()
    const [isAnimating, setIsAnimating] = useState(false)
    const [allowAnimation, setAllowAnimation] = useState(false)

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'AboutMe', href: '/about' },
        { name: 'Servicios', href: '/services' },
        { name: 'Contacto', href: '/contact' },
    ]

    const [activeIndex, setActiveIndex] = useState(() => {
        const currentIndex = navItems.findIndex(item => item.href === pathname)
        return currentIndex !== -1 ? currentIndex : 0
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setAllowAnimation(true)
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const currentIndex = navItems.findIndex(item => item.href === pathname)
        if (currentIndex !== -1 && currentIndex !== activeIndex) {
            setActiveIndex(currentIndex)
        }
    }, [pathname])

    const handleNavigation = (index, href) => {
        if (isAnimating || index === activeIndex) return
        setIsAnimating(true)
        setActiveIndex(index)
        setTimeout(() => {
            setIsAnimating(false)
            router.push(href)
        }, 300)
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div 
                    className={`${styles.switcher} ${allowAnimation ? 'transition-all duration-300 ease-in-out' : ''}`}
                    style={{
                        width: `${100 / navItems.length}%`,
                        height: 'calc(100% - 8px)',
                        left: `${(activeIndex * 100) / navItems.length}%`,
                        top: '4px',
                    }}
                />
                <ul className={styles.list}>
                    {navItems.map((item, index) => (
                        <li key={item.href} className={styles.item} style={{ width: `${100 / navItems.length}%` }}>
                            <button
                                className={`${styles.link} ${index === activeIndex ? styles.activeLink : styles.inactiveLink}`}
                                onClick={() => handleNavigation(index, item.href)}
                                disabled={isAnimating}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}