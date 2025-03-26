import * as React from "react";

export const Contact = () => {
  return (
    <section className="mt-[234px] max-md:mt-10">
      <h2 className="text-white text-[25px] font-normal tracking-[0.5px]">
        Contact
      </h2>
      <div className="text-white text-[15px] font-normal tracking-[0.3px] mt-[73px] max-md:max-w-full max-md:mt-10">
        <p>
          I'm currently looking to join a cross-functional team that values
          improving people's lives
          <br />
          through accessible design. or have a project in mind? Let's connect.
          <br />
          <br />
          <a
            href="mailto:ibrhaimmemon930@gmail.com"
            className="hover:text-purple-400 transition-colors"
          >
            ibrhaimmemon930@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};
