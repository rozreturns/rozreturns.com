"use client";
// import { ContactForm } from "@/components/contact";
import Advantages from "@/components/advantages";
import { AnimatedTestimonialsDemo } from "@/components/people";
import { TabsDemo } from "@/components/howDoWeDoIt";
import Typewriter from "@/components/typeWritter";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
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
        <div className="z-10 text-center">
          <div className="font-bold nova-square-only text-5xl lg:text-7xl p-2 -mt-24">
            Redefining Global Trading{" "}
            <span className="font-light">With Intelligence & Technology</span>
          </div>
          <Typewriter />
        </div>
      </section>
      <TracingBeam className="px-6 -mt-24">
        <section
          id="about"
          className="flex flex-col lg:flex-row items-center justify-center mt-8"
        >
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 p-4">
            <h2
              className="mt-4 text-left w-full
             nova-square-regular"
            >
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
                src="aboutUs.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-1/2 p-4">
            {/* <p className="lg:text-lg">
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
            </p> */}
            <div className="text-left text-gray-300 lg:text-lg">
              <p>
                <span className="font-bold italic text-white">
                  The firm that harnessed the data - RozReturns
                </span>
                is a proprietary quantitative trading firm specializing in
                cutting-edge algorithmic strategies across global markets. We
                identify and capitalize on market inefficiencies at an
                unparalleled scale, leveraging our expertise in{" "}
                <strong>
                  data science, advanced machine learning, and finance
                </strong>
                .
              </p>

              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>
                  <strong>Seamless Execution</strong>
                </li>
                <li>
                  <strong>Robust Risk Management</strong>
                </li>
                <li>
                  <strong>Continuous Innovation</strong>
                </li>
                <li>
                  <strong>Superior Performance</strong>
                </li>
              </ul>

              <p className="mt-4">
                We’re here to <strong>revolutionize trading</strong> in the
                ever-evolving financial landscape.
              </p>
            </div>
          </div>
        </section>
        <Advantages />
        <section id="services" className="p-4">
          <h2 className="mt-4 nova-square-regular">How Do We Do It?</h2>
          <TabsDemo />
        </section>
        <section id="team" className="p-4">
          <h2 className="nova-square-regular">Our Team</h2>
          <AnimatedTestimonialsDemo />
        </section>
        {/* <section id="contact" className="p-4">
          <ContactForm />
          <div id="contactUs">
            <div className="text-center mb-8">
              <h1 className="justify-start w-full text-left nova-square-regular">
                Get in touch
              </h1>
              <p className="text-gray-300 mt-2 text-left">
                We'd love to hear from you! Whether you have questions,
                feedback, or collaboration ideas, feel free to reach out. You
                can contact us anytime at{" "}
                <a
                  href="mailto:rozreturns@gmail.com"
                  className="text-white font-semibold"
                >
                  rozreturns@gmail.com
                </a>
                , and our team will get back to you as soon as possible.
              </p>
              <p className="italic text-gray-300 text-sm max-w-md text-left">
                By reaching out, you agree to RozReturns&apos;{" "}
                <span className="text-white font-bold">
                  Terms &amp; Conditions and Privacy Policy.
                </span>
              </p>
            </div>
          </div>
        </section> */}
      </TracingBeam>
    </div>
  );
}
