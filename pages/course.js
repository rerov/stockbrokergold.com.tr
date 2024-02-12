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
        videoUrl:
          "https://www.youtube.com/embed/RmT9ag6cdaw?si=4k6wqMxvfyiqKhwh",
        baslik: "Ders 1",
      },
      {
        id: 1,
        videoUrl:
          "https://www.youtube.com/embed/DscswE7MuS0?si=jU7VgX9-Sa6OysQU",
        baslik: "Ders 2",
      },
      {
        id: 2,
        videoUrl:
          "https://www.youtube.com/embed/-Bq6d9kbw54?si=S4rqIIoR6VdLKpYK",
        baslik: "Ders 3",
      },
      {
        id: 3,
        videoUrl:
          "https://www.youtube.com/embed/EFTyPQ3SR9Y?si=GymW8vlN65pietZR",
        baslik: "Ders 4",
      },
      {
        id: 4,
        videoUrl:
          "https://www.youtube.com/embed/F7GfzOEEmqg?si=Iz1m_ZzRPTVeZ60h",
        baslik: "Ders 5",
      },
      {
        id: 5,
        videoUrl:
          "https://www.youtube.com/embed/7euye52lbHg?si=ar9fugXPrEF8W55k",
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
        <div className={styles.video}>
          

          <iframe
            src={video?.videoUrl}
            style={{  borderColor: "none" }}
          
            target="_self"
            frameBorder="0"
          
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;  gyroscope; picture-in-picture; web-share" allowfullscreen
          ></iframe>
         
        </div>
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
          {/* <a href="#">
            RAGIP TÜZÜN MAHALLESİ GÜRLER SOKAK 29/1 YENİMAHALLE/ANKARA
          </a>
          <br /> */}
          <a href="#">İLETİŞİM : 0506 473 57 27</a>
        </div>
        <div>
          <a href="#">2024 © stockbrokergold.com.tr, tüm hakları saklıdır.</a>
        </div>
      </footer>
    </>
  );
}
