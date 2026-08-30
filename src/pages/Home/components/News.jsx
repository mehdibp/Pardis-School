import { Link } from "react-router-dom";

import { Lilac, YankeesBlue, OrangeRed } from "../../../styles/colors"
import news_1 from "../../../assets/pictures/News/news1.jpg"
import news_2 from "../../../assets/pictures/News/news2.jpg"
import news_3 from "../../../assets/pictures/News/news3.jpg"
import news_4 from "../../../assets/pictures/News/news4.jpg"
import { useScrollReveal } from "../../../hooks/useScrollReveal";


const newsItems = [
  {
    id: "registration-1406",
    slug: "registration-1406",
    layout: "big",
    reveal: "reveal-from-right",
    date: "۲۸ مرداد",
    title: "آغاز ثبت‌نام دانش‌آموزی سال ۱۴۰۶",
    excerpt:
      "ثبت‌نام مقطع اول تا سوم ابتدایی در روزهای دوشنبه و چهارشنبه هر هفته از ساعت ۹ تا ۱۳ انجام می‌پذیرد. جهت هماهنگی بیشتر با تلفن مدرسه در تماس باشید.",
    image: news_1,
    href: "/blog/registration-1406",
    breadcrumbLabel: "ثبت‌نام ۱۴۰۶",
    lead: "ثبت‌نام دانش‌آموزی سال تحصیلی ۱۴۰۶ آغاز شد",
    description:
      "ثبت‌نام مقطع اول تا سوم ابتدایی در روزهای دوشنبه و چهارشنبه هر هفته از ساعت ۹ تا ۱۳ در دفتر مدرسه انجام می‌شود. برای هماهنگی بیشتر می‌توانید با تلفن مدرسه تماس بگیرید.",
    gallery: [],
    body: ["مدارک لازم و جزئیات کامل فرآیند ثبت‌نام به‌زودی در همین صفحه منتشر می‌شود."],
  },
  {
    id: "pool-session",
    slug: "pool-session",
    layout: "medium",
    reveal: "reveal-from-top",
    date: "۳۰ اردیبهشت",
    title: "سانس استخر مختص دانش‌آموزان",
    excerpt: "ثبت‌نام مقطع اول تا سوم ابتدایی در روزهای دوشنبه و چهارشنبه هر هفته از ساعت ۹ تا ۱۳",
    image: news_2,
    href: "/blog/pool-session",
    breadcrumbLabel: "سانس استخر",
    lead: "سانس استخر ویژه‌ی دانش‌آموزان پردیس دانش برگزار می‌شود",
    description: "این سانس مخصوص دانش‌آموزان مدرسه است و طبق برنامه‌ی هفتگی زیر نظر مربیان مجرب برگزار می‌شود.",
    gallery: [],
    body: ["جدول دقیق زمان‌بندی سانس‌ها به‌زودی اعلام خواهد شد."],
  },
  {
    id: "student-camp-1405",
    slug: "student-camp-1405",
    layout: "small",
    reveal: "reveal-from-bottom",
    date: "۱۵ اردیبهشت",
    title: "اردوی دانش‌آموزی ۱۴۰۵",
    image: news_3,
    href: "/blog/student-camp-1405",
    breadcrumbLabel: "اردوی ۱۴۰۵",
    lead: "گزارش تصویری اردوی دانش‌آموزی سال ۱۴۰۵",
    description: "دانش‌آموزان پردیس دانش در فضایی شاد و پر از فعالیت گروهی، یک روز به‌یادماندنی را سپری کردند.",
    gallery: [],
    body: ["گزارش کامل و تصاویر بیشتر از این اردو به‌زودی منتشر می‌شود."],
  },
  {
    id: "blossoms-festival-1405",
    slug: "blossoms-festival-1405",
    layout: "small",
    reveal: "reveal-from-left",
    date: "۸ مهر",
    title: "جشن شکوفه‌ها ۱۴۰۵",
    image: news_4,
    href: "/blog/blossoms-festival-1405",
    breadcrumbLabel: "جشن شکوفه‌ها",
    lead: "جشن شکوفه‌ها؛ آغازی گرم برای سال تحصیلی جدید",
    description: "دانش‌آموزان پایه‌ی اول با استقبالی صمیمانه و برنامه‌ای شاد به جمع خانواده‌ی پردیس دانش پیوستند.",
    gallery: [],
    body: ["تصاویر بیشتر از این مراسم به‌زودی در گالری مدرسه قرار می‌گیرد."],
  },
];
// const layoutConfig = {
//   big   : { grid: "col-span-2 row-span-4", pos_badge: "relative flex justify-end -top-8 px-6", content: "p-5"},
//   medium: { grid: "col-span-2 row-span-2 grid grid-cols-[0.45fr_0.65fr]", pos_badge: "relative flex left-24", content: "relative text-xl p-6"},
//   small : { grid: "col-span-1 row-span-2", pos_badge: "relative flex justify-end -top-8 px-6", content: "p-5"}
// };

const layoutConfig = {
  big: {
    grid: "col-span-2 row-auto md:row-span-4",
    pos_badge: "relative flex justify-end -top-6 px-4 sm:-top-8 sm:px-6",
    content: "p-3.5 sm:p-4 md:p-5",
    titleSize: "text-sm sm:text-lg md:text-xl lg:text-2xl",
  },
  medium: {
    grid: "col-span-2 row-auto grid grid-cols-[0.45fr_0.65fr] md:row-span-2",
    pos_badge: "relative flex left-24",
    content: "relative p-4 sm:p-5 md:p-6",
    titleSize: "text-sm sm:text-base md:text-lg lg:text-xl",
  },
  small: {
    grid: "col-span-1 row-auto md:row-span-2",
    pos_badge: "relative flex justify-end -top-6 px-4 sm:-top-8 sm:px-6",
    content: "p-3.5 sm:p-4 md:p-5",
    titleSize: "text-xs sm:text-sm md:text-base lg:text-lg",
  },
};


// --------------------------------------------------
function NewsCard({ item }) {
  const { ref, visible } = useScrollReveal(0.2);
  const revealClasses = `scroll-reveal ${item.reveal} ${visible ? "is-visible" : ""}`;

  const Badge = () => (
    <div className={`${layoutConfig[item.layout]["pos_badge"]}`}>
      <span className="relative text-sm text-white font-extrabold rounded-full whitespace-nowrap w-max
                       px-3 py-1 sm:px-3.5 sm:py-1.5 lg:px-4 lg:py-2" style={{backgroundColor:YankeesBlue}}>
        {item.date}
      </span>
    </div>
  );

  
  return (
    <article ref={ref} className={`group overflow-hidden bg-white/20 shadow-[0_10px_24px_rgba(0,0,0,0.12)] rounded-2xl 
                                  ${layoutConfig[item.layout]["grid"]} ${revealClasses}`}>

      <Link className="block relative" to={item.href} aria-label={`مشاهده خبر ${item.title}`}>
      <img className="w-full h-[110%] object-cover transition-transform duration-450 ease-in-out group-hover:scale-[1.06]" 
            src={item.image} alt={item.title} />
      </Link>
      
      <div className={layoutConfig[item.layout]["content"]}>
        <Badge />
        <Link to={item.href} className={`inline-block text-black font-black transition-all duration-300 ease-in-out 
                                        group-hover:scale-[1.06] group-hover:text-[var(--hover-color)]
                                        ${layoutConfig[item.layout]["titleSize"]}`} style={{ '--hover-color': OrangeRed }}>
          {item.title}
        </Link>
        {item.excerpt && <p className="leading-loose text-black/80 mt-2 text-xs sm:text-sm lg:text-base">{item.excerpt}</p>}
      </div>

    </article>
  );

}

// --------------------------------------------------
export default function News() {
  return (
    <section data-theme="light" id="news" 
             className="text-black overflow-hidden py-8 px-[4%] md:py-12 md:px-[5%] lg:py-14 lg:px-[6%]" 
             style={{backgroundColor:Lilac}}>
      <h2 className="text-center mb-7 text-xl sm:text-2xl lg:text-4xl">اخبار و رویدادها</h2>
      <div className="grid grid-cols-2 grid-rows-none gap-5 md:grid-cols-4 md:grid-rows-4">
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
