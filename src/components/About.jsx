import React from "react";

const About = () => {
  return (
    <section id="about" className="py-32 px-4 bg-base-100">
      <div className=" mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - My Journey */}
          <div className="p-6 rounded-2xl shadow-lg h-full">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              My Journey
            </h3>
            <p className="text-base-content mb-4">
              I am a passionate Web Developer with a strong focus on building
              modern and scalable web applications. My journey hasn't been
              smooth — I tried learning from various YouTube tutorials but often
              struggled due to lack of proper guidance.
            </p>
            <p className="text-base-content">
              Everything changed after enrolling in Programming Hero. It gave me
              clear direction, developer mindset, and the confidence to work on
              real-world projects.
            </p>
          </div>

          {/* Right - What I Do */}
          <div className="bg-base-200 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              What I Do
            </h3>
            <ul className="space-y-3 text-base-content">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>MERN Stack Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Firebase Authentication & JWT Security</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>RESTful API with Express & MongoDB</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Stripe Payment Integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Responsive UI with Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Deploying Full-Stack Apps (Vercel, Netlify, Render)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
