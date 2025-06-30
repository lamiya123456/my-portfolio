import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="w-full pt-40 py-20">
      <div className=" mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 py-9">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            Hi! I'm <span className="text-primary">Lamiya Shikder</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "React Developer",
              2000,
              "Full Stack Learner",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-xl text-primary font-semibold"
            repeat={Infinity}
          />

          <p className="py-6 text-gray-600">
            Passionate about building user-friendly web applications.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="/resume.pdf" download>
              <button className="btn btn-primary hover:bg-transparent">Download Resume</button>
            </a>
            <a
              href="https://github.com/lamiya123456"
              target="_blank"
              className="btn btn-outline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lamiya-akter-tanzila-a54588363/"
              target="_blank"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1  flex justify-end">
          <img
            src="https://i.postimg.cc/25MKCL5x/muslim-girl-avatar-arab-beautiful-woman-green-hijab-vector-fashion-young-icon-eps-illustration-78816.webp"
            alt="mehedi"
            className="w-72 cursor-pointer lg:w-96 h-72 lg:h-96 rounded-full border-4 border-primary shadow-lg opacity-30 hover:opacity-80 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
