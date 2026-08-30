import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";


// Static equivalent of the old assets/pictures/gallery/gallery.json fetch.
// --------------------------------------------------
export const galleryImages = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { id: `img-${n}`, src: `/assets/pictures/gallery/img${n}.png` };
});


// --------------------------------------------------
export default function Gallery() {
    const swiperRef = useRef(null);
    const [lightboxSrc, setLightboxSrc] = useState(null);
    useEffect(() => {
      const onKeydown = (e) => { if (e.key === "Escape") setLightboxSrc(null); };
      document.addEventListener("keydown", onKeydown);
      return () => document.removeEventListener("keydown", onKeydown);
    }, []);
    useEffect(() => {
      if (!swiperRef.current) return;
      if (lightboxSrc) { swiperRef.current.autoplay.stop(); } 
      else { swiperRef.current.autoplay.start(); }
    }, [lightboxSrc]);

  return (
    <section data-theme="light">
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        modules={[Autoplay, Keyboard]}
        spaceBetween={1}
        loop
        grabCursor
        keyboard
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          321: { slidesPerView: 1 },
          426: { slidesPerView: 2 },
          577: { slidesPerView: 3 },
          769: { slidesPerView: 4 },
          993: { slidesPerView: 5 },
        }}
      >
        {galleryImages.map((img) => (
          <SwiperSlide key={img.id}>
            <img className="w-full h-auto object-cover hover:scale-[1.02]" 
                  src={img.src} alt="گالری" onClick={() => setLightboxSrc(img.src)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="fixed w-full h-full top-0 left-0 justify-center items-center z-10 bg-black/75"
        style={{ display: lightboxSrc ? "flex" : "none" }}
        onClick={() => setLightboxSrc(null)}
      >
        {lightboxSrc && ( <img className="max-w-[90%] max-h-[90%] rounded-md" src={lightboxSrc} alt="expanded"/> )}
      </div>
    </section>
  );
}
