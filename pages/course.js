import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function course() {
  const [videos, setVideos] = useState([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Her bir video için ayrı URL'leri ve diğer bilgileri içeren bir dizi oluşturun.
    const videoData = [
      {
        id: 0,
        videoUrl: "https://farukozdemir.s3.amazonaws.com/ders1.mp4",
        baslik: "Ders 1",
      },
      {
        id: 1,
        videoUrl: "https://farukozdemir.s3.amazonaws.com/ders2.mp4",
        baslik: "Ders 2",
      },
      {
        id: 2,
        videoUrl: "https://farukozdemir.s3.amazonaws.com/ders3.mp4",
        baslik: "Ders 3",
      },
      {
        id: 3,
        videoUrl: "https://farukozdemir.s3.amazonaws.com/ders4.mp4",
        baslik: "Ders 4",
      },
      {
        id: 4,
        videoUrl: "https://farukozdemir.s3.amazonaws.com/ders5.mp4",
        baslik: "Ders 5",
      },
      {
        id: 5,
        videoUrl: "https://farukozdemir.s3.amazonaws.com/ders6.mp4",
        baslik: "Ders 6",
      },
    ];

    setVideos(videoData);
  }, []);
  const currentVideo = videos[step];
  const handleNext = () => {
    if (step < videos.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  function VideoPlayer({ video }) {
    return (
      <div className={styles.coursePageContainer}>
        <h2>{video?.baslik}</h2>
        <video controls>
          <source src={video?.videoUrl} type="video/mp4"></source>
        </video>
      </div>
    );
  }

  return (
    <>
      <div className={styles.header}>
        <img className={styles.headerimg} src="/stockbroker_gold.png" />
      </div>

      {/* Video gösterme */}
      <VideoPlayer video={currentVideo} />

      {/* İleri ve Geri düğmeleri */}
      <div className={styles.buttons}>
        <div onClick={handlePrev}>
          <a href="#">Geri</a>
        </div>
        <div onClick={handleNext}>
          <a href="#">İleri</a>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.iletisim_bilgileri}>
          <img src="./mavi_logo.png" />
          <br />
          <a href="#">STOCKBROKER EĞİTİM</a>
          <br />

          <a href="#">İLETİŞİM : 0506 473 57 27</a>
        </div>
        <div>
          <a href="#">2024 © stockbrokergold.com.tr, tüm hakları saklıdır.</a>
        </div>
      </footer>
    </>
  );
}
