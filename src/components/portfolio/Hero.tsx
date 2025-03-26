import * as React from "react";

export const Hero = () => {
  return (
    <section className="flex flex-col items-stretch mt-[43px] max-md:mt-10">
      <div className="text-white text-[19px] font-normal leading-[5] tracking-[-0.5px] text-center ml-[252px] max-md:ml-2.5">
        Hello! I Am{" "}
        <span className="text-[rgb(113,39,186)]">Ibrahim Memon</span>
      </div>
      <div className="w-[652px] max-w-full mt-[43px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-2/5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/70fac03ea9194db3a42bdecc01cece62/933e99db7fd3d12781b2a81c09270d9885c9db63?placeholderIfAbsent=true"
              alt="Profile"
              className="aspect-[1] object-contain w-full grow max-md:mt-2"
            />
          </div>
          <div className="w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col self-stretch items-stretch text-white font-normal my-auto max-md:mt-10">
              <h1 className="text-[50px] leading-[63px] tracking-[1px] max-md:text-[40px] max-md:leading-[56px]">
                Judges a book
                <br />
                by its <span className="text-[rgb(113,39,186)]">cover</span>...
              </h1>
              <p className="text-[11px] tracking-[0.22px] text-center">
                Because if the cover does not impress you what else can?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
