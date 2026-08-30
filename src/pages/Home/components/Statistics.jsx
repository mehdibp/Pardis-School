import { DeepSpaceSparkle } from "../../../styles/colors"
import { useInView }  from "../../../hooks/useInView";
import { useCountUp } from "../../../hooks/useCountUp";

import teacher_   from "../../../assets/pictures/decor/teacher.png"
import Equipment_ from "../../../assets/pictures/decor/Equipment.png"
import student_   from "../../../assets/pictures/decor/student.png"
import happykids_ from "../../../assets/pictures/decor/happy-kids.png"


const statsHistory = [
  { year: 1402, teachers: 4, equipment: 198, enrolled: 32, alumni: 120 },
  { year: 1403, teachers: 4, equipment: 201, enrolled: 35, alumni: 126 },
];
const latestStats = statsHistory[statsHistory.length - 1];
const statCards = [
  { key: "teachers",  label: "دبیران",        icon: teacher_  },
  { key: "equipment", label: "تجهیزات",       icon: Equipment_},
  { key: "enrolled",  label: "در حال تحصیل",  icon: student_  },
  { key: "alumni",    label: "بچه‌های موفق",   icon: happykids_},
];


// --------------------------------------------------
function StatCard({ card, inView }) {
  const formatted = useCountUp(latestStats[card.key], inView);
  return (
    <div className="px-3 py-2.5 font-black">
      <img className="mx-auto w-[70%] sm:w-auto" src={card.icon} alt={card.label} />
      <div className="mt-3.5 text-base sm:text-lg md:text-xl lg:text-2xl">{card.label}</div>
      <div className="mt-1.5 text-xl sm:text-2xl md:text-3xl lg:text-4xl">{formatted} </div>
    </div>
  );
}

// --------------------------------------------------
export default function Stats() {
  const { ref, inView } = useInView(0.35);

  return (
    <section ref={ref} id="stats" data-theme="dark" 
             className="py-8 px-[4%] md:py-12 md:px-[5%] lg:py-14 lg:px-[6%]" style={{backgroundColor:DeepSpaceSparkle}}>
      <div className="flex items-center justify-center gap-2.5 mb-7 text-xl sm:text-2xl lg:text-4xl">
        <h2> اطلاعات آماری </h2>
        <span className="text-sm px-2.5 py-1 rounded-full bg-white/10"> {`آمار سال ${latestStats.year}`} </span>
      </div>

      <div className="grid text-center grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-9">
        {statCards.map((card) => (
          <StatCard key={card.key} card={card} inView={inView} />
        ))}
      </div>
    </section>
  );
}
