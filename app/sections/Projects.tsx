"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const projects = [
  {
    title: "HR Platform"
  },
  {
    title: "Real Estate SaaS"
  },
  {
    title: "Fintech System"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.title}
          >
            <div className="rounded-3xl border p-8">
              <h3>
                {project.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}