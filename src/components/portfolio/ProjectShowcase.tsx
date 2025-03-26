import * as React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectShowcase = () => {
  return (
    <section className="mt-40 max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/70fac03ea9194db3a42bdecc01cece62/21e2df8e61bfa8566713026c53a9d3038b981d52?placeholderIfAbsent=true"
        alt="Showcase divider"
        className="aspect-[1.19] object-contain w-[895px] self-center max-w-full rounded-[0px_0px_0px_0px]"
      />

      <div className="mt-[191px] max-md:max-w-full max-md:mt-10">
        <ProjectCard
          title="Example Project"
          description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
          imageSrc="https://cdn.builder.io/api/v1/image/assets/70fac03ea9194db3a42bdecc01cece62/8c7504420d7436b99cc00ae4ef720ade8bbda9a9?placeholderIfAbsent=true"
        />
      </div>

      <div className="mt-[211px] max-md:max-w-full max-md:mt-10">
        <ProjectCard
          title="Example Project"
          description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
          imageSrc="https://cdn.builder.io/api/v1/image/assets/70fac03ea9194db3a42bdecc01cece62/3b56ef8c4ed1bb69f4481687a4c23adab2cfbb98?placeholderIfAbsent=true"
          imagePosition="left"
        />
      </div>
    </section>
  );
};
