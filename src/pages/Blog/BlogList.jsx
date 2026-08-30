import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "./components/Pagination";

import Header from "./components/Header";
import HeaderPicture from "/assets/pictures/Blog/Header.png"
import { ChampagnePink, OrangeRed } from "../../styles/colors"


// --------------------------------------------------
const blogPosts = [
  {
    slug: "helia-stargazing-night",
    title: "برنامه‌ی رصد آسمان شب به همراه هلیا",
    date: "۲۸ آبان ۱۴۰۲",
    color: "#00c389",
    coverImage: "/assets/pictures/Blog/blog1 main.jpg",
    excerpt:
      "یک پاراگراف توضیحات نسبتاً کوتاه در مورد این رویداد که زیر پست بیاد و یه خورده کاربر رو جذب کنه که بیاد مطلب رو بخونه…",
    breadcrumbLabel: "رصد با هلیا",
    lead: "برنامه‌ی رصد برای دانش‌آموزان با همکاری انجمن نجوم هلیا در امند",
    description: `یک شب پرستاره، یک حیاط مدرسه‌ی پرهیجان و کلی نگاه مشتاق… این‌ها صحنه‌هایی بود
      که در برنامه‌ی رصد اخیر مدرسه رقم خورد. با همکاری دوستان خوبمون در انجمن نجوم هلیا، دانش‌آموزان
      فرصتی پیدا کردند تا آسمان شب امند رو از نزدیک‌تر از همیشه ببینند. تلسکوپ‌ها آماده بود، دانش‌آموزها
      پر از سؤال و ذوق، و نتیجه‌اش شد یک تجربه‌ی علمی و هیجان‌انگیز که تا مدت‌ها در ذهن بچه‌ها باقی می‌مونه.`,
    gallery: ["/assets/pictures/Blog/blog1-1.jpg", "/assets/pictures/Blog/blog1-2.jpg"],
    body: [
      `در بخش اول برنامه، دانش‌آموزان یاد گرفتن چطور میشه آسمان رو مرحله‌به‌مرحله رصد کرد. مربی‌های انجمن هلیا با
      حوصله توضیح دادن که هر ستاره و سیاره‌ای جای مشخصی در آسمان داره و برای پیدا کردنش باید روش‌های
      ساده‌ای رو بلد بود. وقتی تلسکوپ‌ها به سمت ماه و سیارات تنظیم شد، هیجان به اوج رسید. نگاه‌کردن به
      سطح پرجزئیات ماه، حلقه‌های سیاره زحل یا روشنایی مشتری برای خیلی‌ها تجربه‌ای کاملاً جدید بود. برق
      ذوق در چهره‌ی دانش‌آموزان نشون می‌داد که این لحظه‌ها برای همیشه توی ذهنشون حک میشه. خیلی‌هاشون
      همون‌جا گفتن که دوست دارن در آینده بیشتر درباره نجوم یاد بگیرن یا حتی خودشون یه تلسکوپ بخرن.`,
      `بعد از این تجربه‌ی دیدنی، نوبت به کارگاه پرسش و پاسخ رسید. بچه‌ها سوال‌هایی می‌پرسیدن که هم جالب بود و هم نشون می‌داد ذهنشون پر از کنجکاویه:
      «آیا کهکشان‌ها پایانی دارن؟»، «اگر روی مریخ زندگی کنیم، روزهاش چه فرقی با زمین داره؟»، «سیاه‌چاله‌ها واقعاً
      همه‌چیز رو می‌بلعن؟». مربی‌ها با زبانی ساده و جذاب جواب می‌دادن و حتی بعضی وقت‌ها برای توضیح بهتر از
      مثال‌های روزمره استفاده می‌کردن تا بچه‌ها راحت‌تر موضوع رو درک کنن. همین گفت‌وگوها باعث شد یادگیری
      به شکل خشک و رسمی نباشه، بلکه شبیه یک ماجراجویی علمی بشه که هرکس می‌تونست توش نقش داشته باشه.`,
      `در پایان، فضای برنامه صمیمی‌تر از قبل شد. بچه‌ها با هم درباره چیزی که دیده بودن صحبت می‌کردن، بعضی‌ها نقاشی سریع
      از ماه و ستاره‌ها می‌کشیدن و معلم‌ها با لبخند از دیدن این همه اشتیاق خوشحال بودن. خانواده‌هایی هم که همراه
      فرزندانشون اومده بودن، فرصت پیدا کردن تا از نزدیک ببینن چطور یک برنامه‌ی علمی می‌تونه هم سرگرم‌کننده
      باشه و هم الهام‌بخش. این شب متفاوت نشون داد که وقتی علم با تجربه‌ی عملی و ذوق نوجوانی ترکیب بشه،
      نتیجه‌اش چیزی فراتر از آموزش معمولی خواهد بود: خاطره‌ای ماندگار که می‌تونه مسیر آینده‌ی بچه‌ها رو روشن‌تر کنه.`,
    ],
  },
  {
    slug: "school-football-team",
    title: "تیمی که به مسابقات فوتبال اختصاص داده شده است",
    date: "۲۵ مهر ۱۴۰۳",
    color: "#ff9800",
    coverImage: "/assets/pictures/Blog/blog1-1.jpg",
    excerpt:
      "یک پاراگراف توضیحات نسبتاً کوتاه در مورد این رویداد که زیر پست بیاد و یه خورده کاربر رو جذب کنه که بیاد مطلب رو بخونه…",
    breadcrumbLabel: "تیم فوتبال",
    lead: "معرفی تیم فوتبال مدرسه پیش از آغاز مسابقات منطقه‌ای",
    description:
      "تیم فوتبال پردیس دانش با هفته‌ها تمرین منظم آماده‌ی شروع مسابقات منطقه‌ای شد؛ در این مطلب با ترکیب تیم و برنامه‌ی مسابقات بیشتر آشنا می‌شویم.",
    gallery: [],
    body: [
      "جزئیات کامل این خبر به‌زودی تکمیل می‌شود.",
    ],
  },
  {
    slug: "reading-practice-workshop",
    title: "تمرین روخوانی برای دانش‌آموزان",
    date: "۲۸ آبان ۱۴۰۲",
    color: "#e91e63",
    coverImage: "/assets/pictures/Blog/blog1-2.jpg",
    excerpt:
      "یک پاراگراف توضیحات نسبتاً کوتاه در مورد این رویداد که زیر پست بیاد و یه خورده کاربر رو جذب کنه که بیاد مطلب رو بخونه…",
    breadcrumbLabel: "کارگاه روخوانی",
    lead: "کارگاه روخوانی و روان‌خوانی ویژه‌ی پایه‌های ابتدایی",
    description:
      "در این کارگاه، دانش‌آموزان با تمرین‌های عملی روخوانی و روان‌خوانی، مهارت‌های خواندن خود را تقویت کردند.",
    gallery: [],
    body: ["جزئیات کامل این خبر به‌زودی تکمیل می‌شود."],
  },
  {
    slug: "school-futsal-tournament",
    title: "حضور پردیس دانش در مسابقات فوتسال مدارس",
    date: "۲۵ مهر ۱۴۰۳",
    color: "#3f51b5",
    coverImage: "/assets/pictures/Blog/blog1-1.jpg",
    excerpt:
      "یک پاراگراف توضیحات نسبتاً کوتاه در مورد این رویداد که زیر پست بیاد و یه خورده کاربر رو جذب کنه که بیاد مطلب رو بخونه…",
    breadcrumbLabel: "فوتسال مدارس",
    lead: "روایتی از حضور تیم پردیس دانش در مسابقات فوتسال بین مدارس",
    description: "دانش‌آموزان پردیس دانش با روحیه‌ای بالا در مسابقات فوتسال بین مدارس شرکت کردند.",
    gallery: [],
    body: ["جزئیات کامل این خبر به‌زودی تکمیل می‌شود."],
  },
  {
    slug: "creative-writing-class",
    title: "کارگاه نویسندگی خلاق ویژه‌ی دانش‌آموزان",
    date: "۲۸ آبان ۱۴۰۲",
    color: "#009688",
    coverImage: "/assets/pictures/Blog/blog1-2.jpg",
    excerpt:
      "یک پاراگراف توضیحات نسبتاً کوتاه در مورد این رویداد که زیر پست بیاد و یه خورده کاربر رو جذب کنه که بیاد مطلب رو بخونه…",
    breadcrumbLabel: "نویسندگی خلاق",
    lead: "اولین جلسه‌ی کارگاه نویسندگی خلاق در مدرسه برگزار شد",
    description: "دانش‌آموزان علاقه‌مند به نویسندگی، نخستین داستان‌های کوتاه خود را در این کارگاه نوشتند.",
    gallery: [],
    body: ["جزئیات کامل این خبر به‌زودی تکمیل می‌شود."],
  },
  {
    slug: "spring-field-trip",
    title: "اردوی بهاره‌ی دانش‌آموزی",
    date: "۲۵ اردیبهشت ۱۴۰۳",
    color: "#a7b027",
    coverImage: "/assets/pictures/Blog/blog1-1.jpg",
    excerpt:
      "یک پاراگراف توضیحات نسبتاً کوتاه در مورد این رویداد که زیر پست بیاد و یه خورده کاربر رو جذب کنه که بیاد مطلب رو بخونه…",
    breadcrumbLabel: "اردوی بهاره",
    lead: "گزارشی از اردوی بهاره‌ی دانش‌آموزان پردیس دانش",
    description: "دانش‌آموزان یک روز پر از بازی، طبیعت‌گردی و فعالیت گروهی را در اردوی بهاره سپری کردند.",
    gallery: [],
    body: ["جزئیات کامل این خبر به‌زودی تکمیل می‌شود."],
  },
];


// --------------------------------------------------
// Ports the old BlogItemOffsets(): every group of 3 cards gets a shuffled
// [0, 20, 40]px vertical offset so the grid doesn't look too rigid.
function useStaggeredOffsets(count) {
  return useMemo(() => {
    const offsets = [];
    for (let i = 0; i < count; i += 3) {
      const group = [0, 20, 40].sort(() => Math.random() - 0.5);
      offsets.push(...group.slice(0, Math.min(3, count - i)));
    }
    return offsets;
  }, [count]);
}


// --------------------------------------------------
export default function BlogList() {
  const offsets = useStaggeredOffsets(blogPosts.length);

  return (
    <>
      <Header title="وبلاگ و رویدادهای گذشته" coverImage={HeaderPicture} />      

      <section data-theme="light" className="mx-auto my-0 py-14 px-[3%] sm:px-[6%] lg:px-[9%]" 
                                  style={{backgroundColor:ChampagnePink}}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <article
              key={post.slug}
              className="relative overflow-hidden rounded-2xl my-0 sm:my-[var(--offset)]
                         transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01]"
              style={{ "--offset": `${offsets[i]}px`, boxShadow: `inset 0 0px 20px ${post.color}40`, }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 5px 15px 5px ${post.color}50`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `inset 0 0px 20px ${post.color}40`)}
            >
              <div className="relative">
                <Link to={`/blog/${post.slug}`}>
                  <img className="w-full block" src={post.coverImage} alt={post.title} />
                </Link>
                <span className="absolute text-sm -bottom-4 right-4 px-2 py-1.5 rounded-full backdrop-blur 
                                 sm:text-base sm:px-3 sm:py-2" style={{ backgroundColor: `${post.color}90` }}>
                  {post.date}
                </span>
              </div>
              <div className="text-black p-4 sm:p-5 md:p-6">
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="font-bold mb-2 text-sm sm:text-base md:text-lg lg:text-xl
                                  transition-colors duration-300 ease-in-out hover:text-[var(--hover-color)]" 
                                  style={{'--hover-color': OrangeRed}}>
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-700 mb-3 text-xs sm:text-sm lg:text-base">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <Pagination />
      </section>
    </>

  );
}


