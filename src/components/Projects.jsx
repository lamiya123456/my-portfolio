import React, { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: 1,
      name: "BlogSphere",
      image: "https://i.postimg.cc/Y2yWjNj4/Screenshot-2025-06-30-095843.png",
      description:
        "BlogSphere is a modern blogging platform where users can write, read, comment, and save blog posts. It features user authentication, post management, filtering, wishlisting, and a responsive design for a smooth experience.",
      shortFeatures: ["React", "Firebase Auth", "Tailwind CSS", "Protected Routes"],
      features: [
        "Secure login and registration system",
        "Easily write, edit, and delete blog posts.",
        "Find blogs by title, category, or author.",
        "Save favorite blogs for later reading.",
        "Engage with authors through comments.",
        "Fully mobile-friendly and accessible UI.",
        "Personalized dashboard for managing posts and interactions.",
        "Restricted access to certain pages based on authentication.",
        "Smooth navigation with modern design.",
        "Safe data handling using technologies like Firebase or MongoDB.",
      ],
      techStack: {
        frontend: "React.js, Tailwind CSS, React Router DOM",
        auth: "Firebase Authentication",
        state: "React Context API, React Hooks",
        notifications: "React Toastify, SweetAlert2",
        animations: "React Awesome Reveal, React Tooltip",
        deployment: "Firebase",
      },
      liveLink: "https://a11b11.web.app/",
      githubLink: "https://github.com/lamiya123456/b11a11",
    },
    {
      id: 2,
      name: "Hobby Hub",
      image: "https://i.postimg.cc/DzgWhLtw/Screenshot-2025-06-30-095945.png",
      description:
        "HobbyHub is a vibrant platform where users can explore, share, and connect through hobbies. Create or join hobby groups, manage your activities, and discover like-minded people — all in one place.",
      shortFeatures: ["React", "Firebase Auth", "Tailwind CSS", "Dashboard"],
      features: [
        "Users can create groups based on their favorite hobbies.",
        "Access to certain pages is restricted to logged-in users only.",
        "Secure login and registration for all users.",
        "View and manage the groups you've created or joined.",
        "Optimized for all devices with a clean and modern layout.",
        "Dark & Light Theme Support",
      ],
      techStack: {
        frontend: "React, Tailwind CSS, React Router",
        auth: "Firebase Authentication",
        state: "React Context API",
        deployment: "Firebase Hosting",
      },
      liveLink: "https://hobbyhub-70534.web.app/",
      githubLink: "https://github.com/lamiya123456/b11a10",
    },
    {
      id: 3,
      name: "Bill Management Website",
      image: "https://i.postimg.cc/3r6k3Kbm/Screenshot-2025-06-30-100044.png",
      description:
        "Bill Management is a secure and user-friendly web app that helps users manage, pay, and track their bills with ease. Features include authentication, bill history, payment tracking, and profile management — all in a clean, responsive interface.",
      shortFeatures: ["HTML", "Tailwind CSS", "DaisyUI"],
      features: [
        "Secure login and signup for managing personal bills.",
        "Users can add, edit, and delete their bills easily.",
        "Keep track of paid and unpaid bills with status indicators.",
        "Update personal details and view user-specific info.",
        "Mobile-friendly and clean interface for smooth user experience.",
        "Only authenticated users can access sensitive pages.",
      ],
      techStack: {
        frontend: "HTML, Tailwind CSS, DaisyUI",
        deployment: "Firebase / GitHub Pages",
      },
      liveLink: "https://thunderous-travesseiro-29592c.netlify.app/",
      githubLink: "https://github.com/lamiya123456/b11a9?tab=readme-ov-file",
    },
  ];

  return (
    <div id="projects" className="py-36 px-4 bg-base-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">Projects</h2>

      <div className="space-y-8 mx-auto">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-stretch gap-6 bg-base-200 rounded-2xl shadow-lg p-6"
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full rounded-xl"
              />
            </div>

            {/* Info Section */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-3 text-secondary">
                {project.name}
              </h2>
              <p className="text-base-content mb-4">{project.description}</p>

              {/* ✅ Balanced Feature List (4 items) */}
              <ul className="list-disc list-inside text-sm text-base-content mb-4 space-y-1">
                <li>{project.features[0]}</li>
                <li>{project.features[1]}</li>
                <li>{project.features[2]}</li>
                <li>{project.features[3]}</li>
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.shortFeatures.map((item, idx) => (
                  <span key={idx} className="badge badge-outline badge-primary">
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Live Site
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  GitHub
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-neutral btn-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-base-100 rounded-2xl shadow-xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 btn btn-sm btn-circle"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded-xl mb-4"
            />
            <h2 className="text-3xl font-bold mb-2 text-primary">
              {selectedProject.name}
            </h2>
            <p className="mb-6 text-base-content">{selectedProject.description}</p>

            <h3 className="text-xl font-semibold mb-2 text-secondary">Features</h3>
            <ul className="list-disc list-inside space-y-1 mb-6">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2 text-secondary">Tech Stack</h3>
            <ul className="space-y-1 mb-6">
              <li>
                <span className="font-semibold">Frontend:</span> {selectedProject.techStack.frontend}
              </li>
              {selectedProject.techStack.auth && (
                <li>
                  <span className="font-semibold">Authentication:</span> {selectedProject.techStack.auth}
                </li>
              )}
              {selectedProject.techStack.state && (
                <li>
                  <span className="font-semibold">State Management:</span> {selectedProject.techStack.state}
                </li>
              )}
              {selectedProject.techStack.notifications && (
                <li>
                  <span className="font-semibold">Notifications:</span> {selectedProject.techStack.notifications}
                </li>
              )}
              {selectedProject.techStack.animations && (
                <li>
                  <span className="font-semibold">Animations:</span> {selectedProject.techStack.animations}
                </li>
              )}
              <li>
                <span className="font-semibold">Deployment:</span> {selectedProject.techStack.deployment}
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Live Site
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
