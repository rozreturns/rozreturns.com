"use client";
import { AnimatedTestimonialsDemo } from "@/components/people";
import { TabsDemo } from "@/components/services";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  const heroLine = "GROWTH NEVER STOPS!!";
  const about = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

  return (
    <div>
      <section
        id="home"
        className="relative h-screen flex items-center justify-center lg:justify-end"
      >
        <div className="absolute -top-36 left-0 w-full h-32 bg-gradient-to-t  from-transparent to-white z-10"></div>
        <video
          className="h-full w-screen object-cover lg:-mt-20 absolute top-0 left-0 z-0"
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source src="/home.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            fontFamily: 'Copperplate, "Copperplate Gothic Light", fantasy',
          }}
          className="z-10 lg:w-1/2 text-center lg:text-right lg:mr-20 text-7xl text-red-100"
        >
          <TextGenerateEffect words={heroLine} duration={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>
      <TracingBeam className="px-6">
        <section
          id="about"
          className="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 mt-8"
        >
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 p-4">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">Who we are?</h2>
            {/* <img
              src="/path/to/animated-image.gif"
              alt="Animated"
              className="w-full h-auto max-w-xs lg:max-w-md mb-4"
            /> */}
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <img src="/hero-img.png" className="img-fluid animated" alt="" />
            </div>
          </div>
          <div className="lg:w-1/2 p-4">
            <p className="text-base lg:text-lg">
              We are a team of dedicated professionals committed to delivering
              high-quality products and services. Our mission is to innovate and
              provide solutions that meet the needs of our clients.
            </p>
          </div>
        </section>
        <section id="services" className="p-4 lg:p-8">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            How Do We Do It??
          </h2>
          <TabsDemo />
        </section>
        <section id="team" className="p-4 lg:p-8">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Our Team</h2>
          <AnimatedTestimonialsDemo />
        </section>
      </TracingBeam>
    </div>
  );
}
