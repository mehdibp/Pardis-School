import { useState } from "react";
import { BsTelephone, BsTelegram, BsInstagram } from "react-icons/bs";
import { DeepSpaceSparkle, YankeesBlue, OrangeRed } from "../../../styles/colors"


// --------------------------------------------------
const schoolInfo = {
  name: "مدرسه‌ی غیرانتفاعی پردیس دانش",
  slogan: "دانش را زندگی کن، آینده را بساز",
  phone: "+983833243324",
  phoneDisplay: "3324 3324 38 (98+)",
  telegram: "t.me/pardis_danesh",
  instagram: "Pardis Danesh",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.442197178574!2d48.50062751526847!3d36.70181697996938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401ab0f8b674fc0d%3A0x3a978a8a9d28f6aa!2sInstitute%20for%20Advanced%20Studies%20in%20Basic%20Sciences!5e0!3m2!1sen!2s!4v1693217282345!5m2!1sen!2s",
};
const contactConfig = [
  {id: "telephone", href: `tel:${schoolInfo.phone}`, icon: BsTelephone, display: schoolInfo.phoneDisplay},
  {id: "telegram",  href: `https://${schoolInfo.telegram}`, icon: BsTelegram, display: schoolInfo.telegram},
  {id: "instagram", href: "https://instagram.com/pardis_danesh", icon: BsInstagram, display: schoolInfo.instagram},
]


// --------------------------------------------------
export default function Footer() {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit handler until the Django backend is wired up.
    console.log("comment submitted:", comment);
    setComment("");
  };

  return (
    <footer id="contact" data-theme="dark" 
            className="text-white py-6 px-[4%] md:py-10 md:px-[5%] lg:py-12 lg:px-[6%]" style={{backgroundColor:DeepSpaceSparkle}}>
      <div className="flex flex-wrap justify-between items-start gap-2.5 lg:gap-8">

        <div className="w-full flex-auto md:w-auto md:flex-[1_1_30%] lg:flex-none lg:min-w-2xs">
          <iframe 
            className="w-full h-64 rounded-xl"
            src={schoolInfo.mapEmbedUrl}
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            title="نقشه مدرسه پردیس دانش"
          />
        </div>

        <div className="min-w-0 flex-auto text-right pr-5 md:flex-[1_1_30%] lg:flex-none lg:min-w-3xs">
          <h3 className="text-base mb-3 sm:text-xl sm:mb-5">تماس با ما</h3>
          {contactConfig.map((item) => (
            <p key={item.id} className="my-2">
              <a className="flex items-center gap-2 text-sm 
                            hover:text-[var(--hover-color)] transition-colors duration-300 ease-in-out" 
                            style={{'--hover-color': OrangeRed}} href={item.href}>
                <item.icon /> {item.display}
              </a>
            </p>
          ))}
        </div>

        <div className="min-w-0 flex-auto md:flex-[1_1_30%] lg:flex-1 lg:min-w-2xs">
          <h3 className="text-base mb-1 sm:text-xl">{schoolInfo.slogan}</h3>
          <p  className="text-sm mb-4">نظرات و انتقادات خود را برای ما ارسال کنید</p>

          <form className="flex flex-col sm:flex-row rounded-xl bg-white/90" onSubmit={handleSubmit}>
            <textarea 
              className="w-full h-24 sm:h-32 text-xs sm:text-sm text-black/80 p-2 sm:p-2.5 border-none outline-none resize-none"
              placeholder="در اینجا متن نظرات خود را برای ما بنویسید"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit"
                    style={{ '--bg-color': YankeesBlue, '--hover-color': OrangeRed }}
                    className="group text-sm grid place-items-center relative w-full h-10 cursor-pointer rounded-b-xl
                                sm:w-12 sm:h-auto sm:rounded-br-none sm:rounded-l-xl sm:hover:w-20
                                bg-[var(--bg-color)] hover:bg-[var(--hover-color)] transition-all duration-300 ease-in-out">
              <span className="col-start-1 row-start-1 opacity-100 group-hover:opacity-0 transition-opacity duration-500">⬅</span>
              <span className="col-start-1 row-start-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">ارسال</span>
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
