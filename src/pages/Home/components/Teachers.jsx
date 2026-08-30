import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ChampagnePink } from "../../../styles/colors"
import teacher_1 from "../../../assets/pictures/Teachers/teacher-1.png"
import teacher_2 from "../../../assets/pictures/Teachers/teacher-2.png"
import teacher_3 from "../../../assets/pictures/Teachers/teacher-3.png"
import teacher_4 from "../../../assets/pictures/Teachers/teacher-4.png"
import eitaa     from "../../../assets/pictures/icons/eitaa.png"
import shad      from "../../../assets/pictures/icons/shad.png"

import { useSwiperNudge } from "../../../hooks/useSwiperNudge";


const teachers = [
  {
    id: "hadis-bakhshipour",
    name: "خانم حدیث بخشی‌پور",
    role: "دبیر کلاس اول ابتدایی",
    image: teacher_1,
    socials: [{ icon: eitaa, href: "#" }, { icon: shad, href: "#" }],
  },
  {
    id: "mehdi-bakhshipour",
    name: "آقای مهدی بخشی‌پور",
    role: "دبیر کلاس دوم ابتدایی",
    image: teacher_2,
    socials: [{ icon: eitaa, href: "#" }, { icon: shad, href: "#" }],
  },
  {
    id: "maryam-heidari",
    name: "خانم مریم حیدری",
    role: "دبیر کلاس سوم ابتدایی",
    image: teacher_3,
    socials: [{ icon: eitaa, href: "#" }, { icon: shad, href: "#" }],
  },
  {
    id: "firooz-bakhshipour-principal",
    name: "آقای فیروز بخشی‌پور",
    role: "مدیر مدرسه",
    image: teacher_4,
    socials: [{ icon: eitaa, href: "#" }, { icon: shad, href: "#" }],
  },
  {
    id: "firooz-bakhshipour-deputy",
    name: "آقای فیروز بخشی‌پور",
    role: "معاون مدرسه",
    image: teacher_4,
    socials: [{ icon: eitaa, href: "#" }, { icon: shad, href: "#" }],
  },
];


// --------------------------------------------------
export default function Teachers() {
  const containerRef = useRef(null);
  const { onSwiper } = useSwiperNudge(containerRef, ".teacher-swiper");

  return (
    <section data-theme="light" className="text-black py-8 px-[4%] md:py-12 md:px-[5%] lg:py-14 lg:px-[6%]" 
                                style={{backgroundColor:ChampagnePink}}>
      <h2 className="text-center mb-7 text-xl sm:text-2xl lg:text-4xl">معلمان ما</h2>

      <div ref={containerRef}>
        <Swiper
          className="text-center"
          spaceBetween={30}
          loop
          grabCursor
          // slideToClickedSlide
          keyboard
          onSwiper={onSwiper}
          breakpoints={{
            321: { slidesPerView: 2 },
            577: { slidesPerView: 3 },
            769: { slidesPerView: 4 },
          }}
        >
          {teachers.map((teacher) => (
            <SwiperSlide key={teacher.id}>
              <div className="teacher-swiper">
                <div className="group relative overflow-hidden leading-none rounded-2xl">
                  <img className="w-full transition-all duration-300 ease-in-out rounded-2xl group-hover:brightness-50" 
                        src={teacher.image} alt={teacher.name} />
                  <div className="absolute inset-0 flex justify-center items-center gap-5 bg-white/30 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    {teacher.socials.map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noreferrer">
                        <img src={s.icon} alt="" className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-120
                                                            w-12 p-2 md:w-14 md:p-2.5 lg:w-16 lg:p-3" />
                      </a>
                    ))}
                  </div>
                </div>
                <h3 className="font-bold mt-4">{teacher.name}</h3>
                <p  className="text-black/80">{teacher.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
