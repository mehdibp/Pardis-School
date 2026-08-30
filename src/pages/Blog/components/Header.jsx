import { Link } from "react-router-dom";


export default function Header({ title, coverImage, breadcrumbLabel }) {
  return (
    <header data-theme="dark" 
            className="relative h-[50vh] min-h-[70vh] flex justify-center items-center text-center
                        before:absolute before:inset-0 before:bg-black/50
                        bg-cover bg-fixed bg-center bg-no-repeat" style={{backgroundImage:`url(${coverImage})`}}>
      <div className="relative z-1 p-4 md:p-5">
        <h1 className="mb-5 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</h1>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <Link className="mx-1 transition-colors duration-400" to="/">خانه</Link> 
          <span className="mx-1 opacity-80">←</span>
          <span className="mx-1 opacity-80">رویدادها</span>
          {breadcrumbLabel && (
            <>
              <span className="mx-1 opacity-80">←</span>
              <span className="mx-1 opacity-80">{breadcrumbLabel}</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
