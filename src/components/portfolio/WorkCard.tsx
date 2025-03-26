import * as React from "react";

interface WorkCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <article className="shadow-[4px_7px_26px_rgba(0,0,0,0.12)] w-full pb-[25px] rounded-[15px] max-md:max-w-full max-md:mt-5">
      <div className="pt-9 pb-[17px] px-[65px] rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[35%] max-md:w-full max-md:ml-0">
            <img
              src={imageSrc}
              alt={title}
              className="aspect-[1.06] object-contain w-[122px] shrink-0 max-w-full grow max-md:mt-10"
            />
          </div>
          <div className="w-[65%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-white font-medium mt-2.5 max-md:mt-10">
              <h3 className="text-[26px] font-semibold leading-none">
                {title}
              </h3>
              <p className="text-[8px] leading-[11px] mt-3.5 max-md:mr-2.5">
                {description}
              </p>
              <button className="bg-[rgba(44,18,80,1)] border w-[119px] max-w-full text-[10px] text-center leading-[15px] mt-3 pt-2.5 pb-4 px-7 rounded-[10px] border-[rgba(105,59,147,1)] border-solid max-md:px-5 hover:bg-[rgba(54,28,90,1)] transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
