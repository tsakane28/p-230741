import * as React from "react";
import { WorkCard } from "./WorkCard";

export const WorkExperience = () => {
  return (
    <section className="mt-[170px] max-md:mt-10">
      <h2 className="text-white text-[40px] font-normal tracking-[0.8px]">
        Work Experience
      </h2>
      <div className="self-stretch mt-11 max-md:max-w-full max-md:mr-0.5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <WorkCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/70fac03ea9194db3a42bdecc01cece62/ec2fee1fd46488248bde1c1cc68e516920ba4ec6?placeholderIfAbsent=true"
              title="CIB on the Mobile"
              description="Take your client onboard seamlessly by our amazing tool of digital onboard process."
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <WorkCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/70fac03ea9194db3a42bdecc01cece62/b527358fd472c92517923368c8e824195a37eaa7?placeholderIfAbsent=true"
              title="CIB on the Mobile"
              description="Take your client onboard seamlessly by our amazing tool of digital onboard process."
            />
          </div>
        </div>
      </div>
      <div className="self-stretch mt-3.5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/70fac03ea9194db3a42bdecc01cece62/055fb3d07ce7405c74d8eac346a2b01387fe8a27?placeholderIfAbsent=true"
              alt="Work experience"
              className="aspect-[2.91] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-[25px]"
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/70fac03ea9194db3a42bdecc01cece62/243aff0327b86c076218a11ed8545055c88ee287?placeholderIfAbsent=true"
              alt="Work experience"
              className="aspect-[2.91] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-[22px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
