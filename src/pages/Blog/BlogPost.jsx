import { Link, useParams } from "react-router-dom";
import Header from "./components/Header";
import HeaderPicture from "/assets/pictures/Blog/Header.png"
import { ChampagnePink } from "../../styles/colors"


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
    image: "/assets/pictures/News/news1.jpg",
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
    image: "/assets/pictures/News/news2.jpg",
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
    layout: "small-1",
    reveal: "reveal-from-bottom",
    date: "۱۵ اردیبهشت",
    title: "اردوی دانش‌آموزی ۱۴۰۵",
    image: "/assets/pictures/News/news3.jpg",
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
    layout: "small-2",
    reveal: "reveal-from-left",
    date: "۸ مهر",
    title: "جشن شکوفه‌ها ۱۴۰۵",
    image: "/assets/pictures/News/news4.jpg",
    href: "/blog/blossoms-festival-1405",
    breadcrumbLabel: "جشن شکوفه‌ها",
    lead: "جشن شکوفه‌ها؛ آغازی گرم برای سال تحصیلی جدید",
    description: "دانش‌آموزان پایه‌ی اول با استقبالی صمیمانه و برنامه‌ای شاد به جمع خانواده‌ی پردیس دانش پیوستند.",
    gallery: [],
    body: ["تصاویر بیشتر از این مراسم به‌زودی در گالری مدرسه قرار می‌گیرد."],
  },
];


const getPostBySlug = (slug) => {
  const post = blogPosts.find((p) => p.slug === slug);
  if (post) return post;

  const news = newsItems.find((n) => n.slug === slug);
  if (!news) return undefined;
  return { ...news, coverImage: news.image };
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section data-theme="light" className="post-content">
        <h2 className="post-lead">این مطلب پیدا نشد</h2>
        <p className="post-desc">
          به نظر می‌رسه این پست وجود نداره یا حذف شده. <Link to="/blog">بازگشت به وبلاگ</Link>
        </p>
      </section>
    );
  }

  return (
    <>
      <Header title="وبلاگ و رویدادهای گذشته" coverImage={HeaderPicture} breadcrumbLabel={post.breadcrumbLabel} />

      <section data-theme="light" style={{backgroundColor:ChampagnePink}}
               className="px-[6%] sm:px-[8%] md:px-[11%] lg:px-[15%] py-5 sm:py-10 md:py-14 lg:py-20 leading-[1.8]">
        <img className="w-full rounded-lg sm:rounded-2xl mb-8" src={post.coverImage} alt="تصویر اصلی" />

        <h2 className="text-black font-bold my-4 text-lg sm:text-xl md:text-xl lg:text-2xl"> {post.lead} </h2>
        <p  className="text-gray-700 mb-10 text-base md:text-lg lg:text-xl"> {post.description} </p>

        {post.gallery.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
            {post.gallery.map((src, i) => (
              <img className="w-[90%] rounded-lg sm:w-full sm:rounded-md" key={i} src={src} alt={`تصویر ${i + 1}`} />
            ))}
          </div>
        )}

        <div className="mt-5 text-gray-700 text-base md:text-lg lg:text-xl">
          {post.body.map((paragraph, i) => (
            <p className="mb-4" key={i}>{paragraph}</p>
          ))}
        </div>
      </section>
    </>
  );
}


