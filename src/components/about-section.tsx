import React from 'react';
import { Code2, Database, Layout, Server, Blocks, GitBranch } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden border border-none" id="#about">
      <div className="bg-black max-w-6xl mx-auto text-white py-20 px-4 border-black rounded-t-[70px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-[#ff56f6] via-[#b936ee] via-[#3bace2] to-[#406aff] inline-block text-transparent bg-clip-text">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I'm a passionate Full Stack Developer with expertise in building scalable web applications
            and RESTful APIs. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Frontend Skills */}
          <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
            <Layout className="w-12 h-12 text-[#ff56f6] mb-4" />
            <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
            <p className="text-gray-600 mb-4">
              Creating responsive and intuitive user interfaces using modern technologies.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• React.js / Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• HTML5 / CSS3</li>
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
            <Server className="w-12 h-12 text-[#b936ee] mb-4" />
            <h3 className="text-xl font-bold mb-3">Backend Development</h3>
            <p className="text-gray-600 mb-4">
              Building robust server-side applications and APIs.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Node.js / Express / Nest.js</li>
              <li>• Python / Django</li>
              <li>• RESTful APIs</li>
              <li>• Authentication & Security</li>
            </ul>
          </div>

          {/* Database Skills */}
          <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
            <Database className="w-12 h-12 text-[#3bace2] mb-4" />
            <h3 className="text-xl font-bold mb-3">Database Management</h3>
            <p className="text-gray-600 mb-4">
              Designing and optimizing database structures.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• PostgreSQL</li>
              <li>• MySQL</li>
              <li>• MongoDB</li>
              <li>• Redis</li>
            </ul>
          </div>

          {/* Additional Skills */}
          <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
            <Code2 className="w-12 h-12 text-[#406aff] mb-4" />
            <h3 className="text-xl font-bold mb-3">Development Tools</h3>
            <p className="text-gray-600 mb-4">
              Utilizing modern development tools and practices.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Git / GitHub / GitLab</li>
              <li>• Docker</li>
              <li>• CI/CD</li>
              <li>• AWS / Cloud Services</li>
            </ul>
          </div>

          {/* Testing */}
          <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
            <Blocks className="w-12 h-12 text-[#ff56f6] mb-4" />
            <h3 className="text-xl font-bold mb-3">Testing & Quality</h3>
            <p className="text-gray-600 mb-4">
              Ensuring code quality and reliability.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Jest</li>
              <li>• React Testing Library</li>
              <li>• Cypress</li>
              <li>• Unit & Integration Testing</li>
            </ul>
          </div>

          {/* Version Control */}
          <div className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
            <GitBranch className="w-12 h-12 text-[#b936ee] mb-4" />
            <h3 className="text-xl font-bold mb-3">Version Control</h3>
            <p className="text-gray-600 mb-4">
              Managing code versions and collaboration.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Git Flow</li>
              <li>• Branch Management</li>
              <li>• Code Review</li>
              <li>• Collaboration</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            I'm always eager to learn new technologies and stay up-to-date with the latest industry trends. 
            Currently exploring microservices architecture and cloud-native development to build more scalable applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
