import VoxelCube from "@/components/voxelCube";
import "/node_modules/boxicons/css/boxicons.min.css";

export default function Home() {
  const styles = {
    "mainDiv": "overflow-hidden grid grid-rows-[2fr,1fr] ls:grid-rows-1 ls:grid-cols-2 bg-[url('./images/background.jpg')] bg-cover bg-center min-w-screen min-h-screen max-w-screen max-h-screen",
    "aboutMeDiv": "flex p-20 font-black justify-center flex-col",
    "title": "text-3xl lg:text-5xl animate-slidein",
    "subtitle": "text-xl lg:text-3xl animate-slidein",
    "cubeDiv": "flex justify-center items-center pt-10 ls:pt-40",
    "unordenedList": "pt-2 lg:pt-4",
    "listItem": "text-xl lg:text-3xl",
    "linkText": "font-medium"
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.aboutMeDiv}>
        <h1 className={styles.title}>Hello i'm Jhon Roa</h1>
        <h2 className={styles.subtitle}>Full-Stack developer</h2>
        <div>
          <ul className={styles.unordenedList}>
            <li className={styles.listItem}><i className='bx bxl-linkedin'/> <a className={styles.linkText} target="_blank" href="https://www.linkedin.com/in/jhon-arley-roa-suarez-7a1412263">Linkedin</a></li>
            <li className={styles.listItem}><i className='bx bxl-github'/> <a className={styles.linkText} target="_blank" href="https://www.github.com/jhon-roa">Github</a></li>
            <li className={styles.listItem}><i class='bx bxs-phone-call'/> <span className={styles.linkText}>+57 312-8454529</span></li>
          </ul>
        </div>
      </div>
      <div className={styles.cubeDiv}>
        <VoxelCube/>
      </div>
    </div>
  );
}
