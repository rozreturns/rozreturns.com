"use client";
import { ContactForm } from "@/components/contact";
import Advantages from "@/components/markets";
import { AnimatedTestimonialsDemo } from "@/components/people";
import { TabsDemo } from "@/components/services";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  const landingLines = [
    "Everyday",
    "Every hour",
    "Roz Returns",
  ];
  return (
    <div>
      <section
        id="home"
        className="relative h-screen flex items-center justify-center lg:justify-end"
      >
        <video
          className="h-full w-screen object-cover lg:-mt-20 absolute top-0 left-0 z-0"
          autoPlay
          muted
          loop
          id="myVideo"
          style={{ opacity: 0.3 }}
        >
          <source src="./home.mp4" type="video/mp4" />
        </video>
        <div
          className="z-10 lg:w-1/2 text-center lg:text-right lg:mr-20"
        >
          <TextGenerateEffect
            sentences={landingLines}
            duration={0.6}
            className="text-4xl"
          />
        </div>
      </section>
      <TracingBeam className="px-6">
        <section
          id="about"
          className="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 mt-8"
        >
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 p-4">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white nova-square-regular">
              Who we are?
            </h2>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <Image
                width={500}
                height={500}
                src="./testHero4.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-1/2 p-4">
            <p className="lg:text-lg">
              <span
                className="font-bold"
                style={{ fontStyle: "italic", color: "white" }}
              >
                The firm that harnessed the data - RozReturns
              </span>{" "}
              is a proprietary quantitative trading firm specializing in
              cutting-edge algorithm strategies across global markets. We
              identify and capitalize on market inefficiencies at an
              unparalleled scale, and we do so with a strong foundation in data
              science, advanced machine learning, and financial expertise.
              <br /> Seamless Execution. Robust Risk Management. Continuous
              Innovation. Superior Performance.
              <br />
              We’re here to revolutionize how you trade in the ever-evolving
              financial landscape.
            </p>
          </div>
        </section>
        <section id="services" className="p-4 lg:p-8">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white nova-square-regular">
            How Do We Do It??
          </h2>
          <TabsDemo />
          <Advantages />
        </section>
        <section id="team" className="p-4 lg:p-8">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white nova-square-regular">
            Our Team
          </h2>
          <AnimatedTestimonialsDemo />
        </section>
        <ContactForm />
      </TracingBeam>
    </div>
  );
}
