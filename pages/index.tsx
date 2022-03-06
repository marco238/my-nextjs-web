import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const name = "MARCOS A. MONZÓN";
  const job = "Frontend Web Developer";
  const mail = "marcomonzip@gmail.com";
  const assetUrl = "https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588156329/marcomonzon/feather-image.png";

  const _downloadResume = () => {
    fetch("https://res.cloudinary.com/dlmrvaeyh/image/upload/v1633832484/M.pdf")
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "Marcos_Monzon.pdf";
        a.click();
      });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Marcos Monzón personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.presentationText}>
          <p>I am,</p>
          <h1>{name}</h1>
          <span className={styles.description}> => {job}</span>
          <div className={styles.presentationButtons}>
            <a id={styles.hireMe} href={`mailto:${mail}?Subject=Quiero%20contar%20con%20tus%20servicios`}>
              HIRE ME
            </a>
            <a onClick={_downloadResume}>
              <button>DOWNLOAD RESUME</button>
            </a>
          </div>
        </div>
        <div className={styles.feathers}>
          <img src={assetUrl} alt="Feather" />
          <img src={assetUrl} alt="Feather" />
          <img src={assetUrl} alt="Feather" />
        </div>
      </main>
    </div>
  )
}

export default Home
