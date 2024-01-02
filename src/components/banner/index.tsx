import Image from "next/image";
import Button from "@/components/button";
import profilePic from "/public/profile.png";
export default function Banner() {
  return (
    <section
      className="relative pt-24 personal-wrapper overflow-hidden bg-amber-500/5"
      id="banner"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div>
            <h4 className="font-bold font-heading lg:text-[40px] text-deep-sapphire text-3xl lg:leading-normal leading-normal mb-4">
              {" "}
              Hey I am
              <br />
              <span className="text-amber-500">I am a web developer</span>
            </h4>
            <p className="text-slate-400 font-body max-w-xl">
              Obviously I am a Web Designer. Web Developer with over 7 years of
              experience. Experienced with all stages of the development.
            </p>
            <div className="mt-6 flex flex-row space-x-2">
              <Button variant="primary">Hire Me</Button>
              <Button variant="secondary">Download CV</Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={profilePic}
              priority={true}
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <div className="absolute lg:bottom-20 md:bottom-10 bottom-2 md:-left-5 left-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
              <span className="text-3xl font-medium mb-0">
                <span className="counter-value font-bold" data-target="125">
                  {" "}
                  <span className="counter-value">180</span>
                </span>
                +
              </span>
              <h6 className="text-sm text-slate-400 mt-1">Project Completed</h6>
            </div>
            <div className="absolute lg:top-80 md:top-56 top-48 md:-right-0 right-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
              <h6 className="font-semibold">Web Designer</h6>
              <h6 className="text-sm text-slate-400 mt-1">
                7+ Years Experience
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
