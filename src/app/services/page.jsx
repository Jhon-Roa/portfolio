import InfiniteCarrousel from "@/components/infiniteCarrousel"

export default function services() {
    const styles = {
        mainDiv: "flex flex-col justify-center overflow-hidden text-[#E5C4FE] bg-[url('./images/backgroundServices.jpg')] bg-cover bg-center min-w-screen min-h-screen max-w-screen max-h-screen",
        topDiv: "flex justify-around items-center bg-black mx-12 my-16 opacity-70 h-80 hover:opacity-90  transition rounded-xl",
        title: "lg:text-8xl font-bold",
        unordenedList: "flex flex-col justify-around h-full lg:py-12 lg:text-4xl",
        technologiesDiv: "overflow-hidden"
    }

    return(
        <div className={styles.mainDiv}>
            <div className={styles.topDiv}>
                <h1 className={styles.title}>Services</h1>
                <ul className={styles.unordenedList}>
                    <li>Front-end projects creation</li>
                    <li>Back-end projects creation</li>
                    <li>DataBase handle</li>
                </ul>
            </div>
            <div className={styles.technologiesDiv}>
                <InfiniteCarrousel/>
            </div>
        </div>
    )
}