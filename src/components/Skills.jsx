import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "DaisyUI", level: 85 },
        { name: "React", level: 95 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "Vercel", level: 70 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 92 },
        { name: "Github", level: 70 },
        
        { name: "Firebase", level: 85 },
        { name: "Netlify", level: 95 },
        
        
        
      ],
    },
  ];

  return (
    <div id="skills" className="py-36 px-4 bg-base-100">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-base-200 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-6 text-secondary">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-base-content">{skill.name}</span>
                    <span className="text-sm text-base-content">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;