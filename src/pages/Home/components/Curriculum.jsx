import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { OrangeRed } from "../../../styles/colors"
import { Lilac } from "../../../styles/colors"
import class_1 from "../../../assets/pictures/decor/class-1.png"
import class_2 from "../../../assets/pictures/decor/class-2.png"
import class_3 from "../../../assets/pictures/decor/class-3.png"
import paint   from "../../../assets/pictures/decor/paint.png"
import math    from "../../../assets/pictures/decor/math.png"
import { useSwiperNudge } from "../../../hooks/useSwiperNudge";


// --------------------------------------------------
const curriculumCards = [
  {
    id: "grade-1",
    title: "کلاس اول ابتدایی",
    description: "یه مشت توضیحات مربوط به کلاس سوم ابتدایی که اینجا قرار می‌گیره تا فقط یه خورده پرتر به نظر برسه.",
    icon: class_1,
    linkLabel: "لینک برنامه کلاس",
    href: "#",
    color: "#af91e7",
  },
  {
    id: "grade-2",
    title: "کلاس دوم ابتدایی",
    description: "یه مشت توضیحات مربوط به کلاس دوم ابتدایی که اینجا قرار می‌گیره تا فقط یه خورده پرتر به نظر برسه.",
    icon: class_2,
    linkLabel: "لینک برنامه کلاس",
    href: "#",
    color: "#ffd34d",
  },
  {
    id: "grade-3",
    title: "کلاس سوم ابتدایی",
    description: "یه مشت توضیحات مربوط به کلاس اول ابتدایی که اینجا قرار می‌گیره تا فقط یه خورده پرتر به نظر برسه.",
    icon: class_3,
    linkLabel: "لینک برنامه کلاس",
    href: "#",
    color: "#7be097",
  },
  {
    id: "calligraphy",
    title: "کلاس خوشنویسی",
    description: "توضیحات کوتاه درباره برنامه کلاس خوشنویسی و اهداف آموزشی آن.",
    icon: paint,
    linkLabel: "لینک برنامه کلاس",
    href: "#",
    color: "#83CBEB",
  },
  {
    id: "math",
    title: "کلاس ریاضی",
    description: "مرور مبانی، حل مسئله و فعالیت‌های گروهی.",
    icon: math,
    linkLabel: "لینک برنامه کلاس",
    href: "#",
    color: "#ff58f4",
  },
];


// --------------------------------------------------
export default function Curriculum() {
  const containerRef = useRef(null);
  const { onSwiper } = useSwiperNudge(containerRef, ".curriculum-swiper");

  return (
    <section id="classes" data-theme="light" 
             className="text-black py-8 px-[4%] md:py-12 md:px-[5%] lg:py-14 lg:px-[6%]" style={{backgroundColor:Lilac}}>
      <h2 className="text-center mb-7 text-xl sm:text-2xl lg:text-4xl">برنامه کلاس‌ها</h2>

      <div ref={containerRef}>
        <Swiper
          className="overflow-visible! overflow-x-clip! w-[90%]"
          spaceBetween={30}
          loop
          grabCursor
          // slideToClickedSlide
          keyboard
          onSwiper={onSwiper}
          breakpoints={{
            321: { slidesPerView: 1 },
            577: { slidesPerView: 2 },
            993: { slidesPerView: 3 },
          }}
        >
          {curriculumCards.map((card) => (
            <SwiperSlide key={card.id}>
              <article
                className="curriculum-swiper h-auto text-center px-2.5 py-3.5 mx-auto rounded-2xl
                           md:px-4 md:py-5 md:rounded-3xl lg:px-6 lg:py-7 lg:rounded-4xl 
                           transition-all duration-300 ease-in-out hover:-translate-y-4 hover:brightness-[1.06]"
                style={{
                  background: `linear-gradient(180deg, ${card.color}, ${card.color}20, ${card.color}00)`,
                  boxShadow: `inset 0 0 15px ${card.color}40`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 5px 20px 5px ${card.color}4d`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `inset 0 0 15px ${card.color}40`)}
              >
                <img className="block mx-auto my-5 max-w-20 md:max-w-none" src={card.icon} alt="" />
                <h3 className="my-4 text-base sm:text-xl lg:text-2xl"> {card.title} </h3>
                <p  className="mb-4 text-sm sm:text-base"> {card.description} </p>
                <a href={card.href} className="inline-block font-extrabold text-white mx-auto my-4 rounded-full
                                          hover:text-[var(--hover-color)] transition-colors duration-300 ease-in-out
                                          text-xs sm:text-base px-3.5 py-2 sm:px-5 sm:py-3" 
                                          style={{'--hover-color': OrangeRed, background: card.color}}>
                  {card.linkLabel}
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
