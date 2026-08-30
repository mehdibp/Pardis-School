import { useState } from "react";

import { ChampagnePink } from "../../../styles/colors"
import Principal  from "../../../assets/pictures/decor/School principal.png"


const aboutContent = {
  image: Principal,
  paragraphs: [
    `مدرسه ما با ایمان به توانایی‌های بی‌پایان کودکان، رسالت خود را در پرورش نسلی خلاق، مسئولیت‌پذیر و مهرورز می‌داند.
     هدف ما ایجاد محیطی پویا و ایمن است که در آن دانش‌آموزان نه تنها مفاهیم علمی و
     آموزشی را می‌آموزند، بلکه مهارت‌های زندگی و ارزش‌های انسانی همچون احترام، همدلی و
     صداقت را تجربه می‌کنند. چشم‌انداز ما پرورش کودکانی است که با اعتمادبه‌نفس و انگیزه،
     در مسیر یادگیری مادام‌العمر گام بردارند و آینده‌ای روشن برای خود و جامعه بسازند.`,
  ],
  intro: `مدرسه‌ی پردیس دانش در سال ۱۴۰۵ توسط دبیر بازنشسته
     آقای فیروز بخش‌پور، تأسیس شد. این مدرسه اولین مدرسه‌ی غیرانتفاعی شهر گوجان است`,
  more: "توضیحات بیشتر در اینجا قرار خواهد گرفت.",
};



// --------------------------------------------------
export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" data-theme="light" 
             className="flex flex-col items-center text-black gap-2.5 px-[5%] pt-9
                        md:flex-row md:gap-6 md:pt-15
                        lg:gap-10 lg:px-[6%] lg:pt-20"
             style={{backgroundColor:ChampagnePink}}>
              
      <img className="max-w-sm rounded-xl w-3/8 lg:w-auto" src={aboutContent.image} alt="مدیر مدرسه" />
      <div className="flex-1 text-sm leading-relaxed sm:text-base sm:leading-loose lg:text-xl">
        {aboutContent.paragraphs.map((p, i) => ( <p key={i}> {p} </p> ))}

        <p>
          {aboutContent.intro}
          {!expanded && <span>...</span>}
          {expanded && <span> {aboutContent.more}</span>}{" "}
          <span className="text-amber-800 underline cursor-pointer" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "(توضیحات کمتر)" : "(توضیحات بیشتر)"}
          </span>
        </p>
        
      </div>
    </section>
  );
}

