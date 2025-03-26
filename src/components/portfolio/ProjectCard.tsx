import * as React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imagePosition?: "left" | "right";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  imagePosition = "right",
}) => {
  const ContentSection = () => (
    <div className="w-6/12 max-md:w-full max-md:ml-0">
      <div className="z-10 flex w-full flex-col mt-[43px] max-md:max-w-full max-md:mt-10">
        <h3 className="text-[rgba(204,214,246,1)] text-[34px] font-semibold tracking-[0.68px] max-md:ml-0.5">
          {title}
        </h3>
        <div className="flex flex-col relative self-stretch min-h-[165px] w-full text-lg text-[rgba(204,214,246,1)] font-medium mt-[30px] px-[34px] py-[29px] rounded-[14px] max-md:max-w-full max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/70fac03ea9194db3a42bdecc01cece62/beedf4ff082a539dc7d8cb3be5e762c45728c1ed?placeholderIfAbsent=true"
            alt="Background"
            className="absolute h-full w-full object-cover inset-0"
          />
          <p className="relative z-10">{description}</p>
        </div>
        <div className="flex gap-[17px] ml-[27px] mt-9 max-md:ml-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/70fac03ea9194db3a42bdecc01cece62/8249d5a43a893f83076e13cbfa54c826e03f451b?placeholderIfAbsent=true"
            alt="Icon 1"
            className="aspect-[1] object-contain w-[31px] shrink-0"
          />
          <div className="flex flex-col relative aspect-[1] w-[31px] overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/70fac03ea9194db3a42bdecc01cece62/87d298864a8e36c459d5168a25adcd61377913dd?placeholderIfAbsent=true"
              alt="Icon 2"
              className="absolute h-full w-full object-cover inset-0"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
      <img
        src={imageSrc}
        alt={title}
        className="aspect-[1.71] object-contain w-full rounded-[0px_0px_0px_0px] max-md:max-w-full"
      />
    </div>
  );

  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
      {imagePosition === "left" ? (
        <>
          <ImageSection />
          <ContentSection />
        </>
      ) : (
        <>
          <ContentSection />
          <ImageSection />
        </>
      )}
    </div>
  );
};
