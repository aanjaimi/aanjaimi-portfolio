import React from 'react';
import ButtonGradient from './shared/button-gradient';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tamkeen App",
      description: "A full-stack web application for my internship project at Tamkeen Foundation For Human Development",
      image: "/tamkeen.png",
      technologies: ["Next.js", "Material UI", "PostgreSQL", "TypeScript", "Prisma", "Redux", "Socket.IO", "Vuexy Template"],
      liveLink: "https://tamkeen-app-test.vercel.app/",
      githubLink: "https://github.com/aanjaimi/tamkeen-app-test",
      features: ["Authentication", "Real-time updates", "Responsive design", "Admin dashboard", "User roles", "User profile"]
    },
    {
      title: "Products App",
      description: "A full-stack web application for managing products and orders as part of my assignment for Nutritech Agro",
      image: "/products.png",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Django", "Figma", "Shadcn"],
      liveLink: "https://products-app-vert.vercel.app/",
      githubLink: "https://github.com/aanjaimi/products_app",
      features: ["Authentication", "Responsive design", "Figma design"]
    },
    {
      title: "Blog App",
      description: "A full-stack web application for creating and managing blog posts with user authentication with 42",
      image: "/blogApp.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NEON", "Authjs", "Shadcn"],
      liveLink: "https://blog-app-mu-steel.vercel.app/",
      githubLink: "https://github.com/aanjaimi/BlogApp",
      features: ["Authentication", "Responsive design", "CRUD operations"]
    },
    {
      title: "Previous Portfolio Website",
      description: "My previous personal portfolio website to showcase my skills and experience in full-stack development",
      image: "/portfolio.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
      liveLink: "https://aanjaimi.me",
      githubLink: "https://github.com/aanjaimi/Portfolio",
      features: ["Responsive design", "Figma design", "Framer Motion animations"]
    },
    {
      title: "Chat App",
      description: "This project is about creating a chat application using Nodejs, Nextjs and chatengine.io",
      image: "/chatApp.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "chatengine.io", "Node.js"],
      liveLink: "https://chat-app-navy-xi.vercel.app",
      githubLink: "https://github.com/aanjaimi/chatApp",
      features: ["Authentication", "Real-time chat", "Responsive design"]
    },
    {
      title: "Video Trimming App",
      description: "A Backend API for trimming videos using ffmpeg and Node.js",
      image: '/videoTrimming.jpeg',
      technologies: ["Node.js", "Fastify", "ffmpeg", "TypeScript"],
      liveLink: "https://videotrimmer-production.up.railway.app/",
      githubLink: "https://github.com/aanjaimi/videoTrimmer",
      features: ["Video trimming", "Video Resizing", "Video Splitting"]
    }
  ];

  return (
    <section
      className="py-20 px-4 min-h-screen bg-white"
      id="#projects"
      onClick={() => console.log('Section clicked')}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-black font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-[#ff56f6] via-[#b936ee] via-[#3bace2] to-[#406aff] inline-block text-transparent bg-clip-text">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and experience in full-stack development.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              onClick={() => console.log('Project container clicked')} 
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="rounded-xl w-full shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 text-black">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={index + i + 1}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.features.map((feature, j) => (
                      <li key={index + j + 1}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <ButtonGradient
                    liveLink={project.liveLink}
                    text='Live Demo'
                    isGithubLink={false}
                  />
                  <ButtonGradient
                    liveLink={project.githubLink}
                    text='View Code'
                    isGithubLink={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;