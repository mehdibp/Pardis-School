import { Link } from "react-router-dom";

import { YankeesBlue } from "../../../styles/colors"
import Student from "../../../assets/pictures/Haeder/student.png"


const importantLink = { label: "ثبت‌نام آنلاین", href: "/#contact" };
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


// --------------------------------------------------
export default function () {
    return (
      <header data-theme="dark" 
              className="flex items-center justify-between pb-0
                         min-h-[80vh] pt-16 px-[4%]
                         sm:min-h-[90vh] sm:pt-20 sm:px-[5%]
                         md:min-h-screen md:pt-30 md:px-[6%]"
              style={{backgroundColor:YankeesBlue}} >
                
        <div className="min-w-0 z-1 pb-5 lg:pb-10">
          <h1 className="m-0 text-4xl sm:text-6xl md:text-7xl">
            مدرسه‌ی غیرانتفاعی <br /> پـــردیــــس دانــــش
          </h1>
          <p className="my-4 text-lg sm:text-2xl lg:text-3xl"> {schoolInfo.slogan} </p>
          <Link className="block mt-3.5 w-max border rounded-3xl bg-transparent 
                           float-none mx-auto px-4 py-2 text-sm
                           lg:float-left lg:mx-0 lg:px-5 lg:py-2.5 lg:text-lg
                           hover:text-[var(--hover-color)] hover:bg-white" style={{ '--hover-color': YankeesBlue }}
                to={importantLink.href}>
            {importantLink.label}
          </Link>
        </div>
        <img className="h-[55vh] sm:h-[65vh] md:h-auto lg:h-[80vh]" src={Student} alt="دانش‌آموز پردیس دانش" />
      </header>
    );
}
