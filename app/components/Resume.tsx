import React from 'react';

const Resume = () => {
  return (
    <div className="font-sans leading-normal m-0 p-5 text-gray-800 bg-white">
      <div className="max-w-[8.5in] mx-auto bg-white p-3 shadow-lg">
        {/* Header */}
        <div className="text-center border-b-2 border-blue-800 pb-4 mb-5">
          <h1 className="m-0 text-3xl text-blue-800 font-bold">Nicholas Searcy</h1>
          <div className="text-base text-gray-600 my-1">Software Engineer</div>
          <div className="text-xs mt-2 text-gray-700">
            Milwaukee, Wisconsin | (414) 369-2829 | ncsearcy@gmail.com | linkedin.com/in/nicholassearcy
          </div>
        </div>

        {/* Professional Summary */}
        <div className="my-5">
          <h2 className="text-sm text-blue-800 border-b border-blue-800 pb-1 mb-3 uppercase font-bold">
            Professional Summary
          </h2>
          <div className="text-xs text-justify leading-6">
            Results-driven Software Engineer with 5+ years of technical experience specializing in system integration, API development, and full-stack solutions. Proven track record in designing and implementing scalable software systems, with expertise in C#, web technologies, and cloud-based platforms. Strong background in troubleshooting complex technical issues, collaborating with cross-functional teams, and delivering robust software solutions that drive business objectives.
          </div>
        </div>

        {/* Technical Skills */}
        <div className="my-5">
          <h2 className="text-sm text-blue-800 border-b border-blue-800 pb-1 mb-3 uppercase font-bold">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <div className="mb-2">
                <strong className="text-blue-800 block mb-1">Programming Languages:</strong>
                C#, JavaScript, HTML, CSS, SQL
              </div>
              <div className="mb-2">
                <strong className="text-blue-800 block mb-1">Frameworks & Libraries:</strong>
                .NET Framework, ASP.NET, RESTful APIs
              </div>
              <div className="mb-2">
                <strong className="text-blue-800 block mb-1">Development Tools:</strong>
                Visual Studio, Git, Azure DevOps
              </div>
            </div>
            <div>
              <div className="mb-2">
                <strong className="text-blue-800 block mb-1">Databases:</strong>
                SQL Server, MySQL, Data Migration
              </div>
              <div className="mb-2">
                <strong className="text-blue-800 block mb-1">Cloud & Integration:</strong>
                Azure, API Integration, System Architecture
              </div>
              <div className="mb-2">
                <strong className="text-blue-800 block mb-1">Methodologies:</strong>
                Agile, System Testing, Documentation
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="my-5">
          <h2 className="text-sm text-blue-800 border-b border-blue-800 pb-1 mb-3 uppercase font-bold">
            Professional Experience
          </h2>
          
          {/* Job 1 */}
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <div>
                <div className="text-xs font-bold text-blue-800">Client Integration Consultant</div>
                <div className="text-xs font-bold text-gray-800">Cotality</div>
              </div>
              <div className="text-xs text-gray-600 italic">July 2024 - Present</div>
            </div>
            <div className="text-xs text-gray-600 mb-1">Milwaukee, Wisconsin</div>
            <ul className="text-xs m-0 pl-0">
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Design and implement scalable integration solutions collaborating with development teams to enhance system architecture
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Analyze existing technology infrastructure and develop optimization strategies improving system performance by 25%
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Build custom API integrations and middleware solutions to connect disparate business systems
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Conduct comprehensive system testing and validation ensuring 99.9% uptime for critical business applications
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Create technical documentation and provide training on integrated systems to cross-functional teams
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <div>
                <div className="text-xs font-bold text-blue-800">Associate Integration Services Consultant</div>
                <div className="text-xs font-bold text-gray-800">CoreLogic</div>
              </div>
              <div className="text-xs text-gray-600 italic">July 2022 - July 2024</div>
            </div>
            <div className="text-xs text-gray-600 mb-1">Milwaukee, Wisconsin</div>
            <ul className="text-xs m-0 pl-0">
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Developed innovative software features using C# and .NET framework in collaboration with agile development teams
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Engineered data migration solutions maintaining data integrity across multiple database systems
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Resolved critical production environment issues through systematic debugging and performance optimization
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Defined technical specifications and project milestones working closely with product managers and senior developers
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Created comprehensive system documentation and conducted technical training sessions for development teams
              </li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <div>
                <div className="text-xs font-bold text-blue-800">Technical Support Specialist / Software Developer</div>
                <div className="text-xs font-bold text-gray-800">CoreLogic</div>
              </div>
              <div className="text-xs text-gray-600 italic">July 2021 - July 2022</div>
            </div>
            <div className="text-xs text-gray-600 mb-1">Milwaukee, Wisconsin</div>
            <ul className="text-xs m-0 pl-0">
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Diagnosed and resolved complex technical issues across multiple software applications serving global client base
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Developed automated support tools and scripts reducing resolution time by 40% for common technical issues
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Collaborated with development teams to identify and fix software bugs in production environments
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Created user-facing documentation and technical guides improving customer self-service capabilities
              </li>
            </ul>
          </div>

          {/* Job 4 */}
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <div>
                <div className="text-xs font-bold text-blue-800">Technical Support Analyst</div>
                <div className="text-xs font-bold text-gray-800">Northwestern Mutual</div>
              </div>
              <div className="text-xs text-gray-600 italic">October 2019 - March 2021</div>
            </div>
            <div className="text-xs text-gray-600 mb-1">Milwaukee, Wisconsin</div>
            <ul className="text-xs m-0 pl-0">
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Provided technical support for cloud-based applications maintaining 95% customer satisfaction rating
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Developed technical documentation and training materials for senior management and end users
              </li>
              <li className="mb-1 list-none relative pl-3 before:content-['•'] before:text-blue-800 before:absolute before:left-0">
                Collaborated with vendors on system integrations and component sourcing for advanced technical solutions
              </li>
            </ul>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="my-5">
          <h2 className="text-sm text-blue-800 border-b border-blue-800 pb-1 mb-3 uppercase font-bold">
            Education & Certifications
          </h2>
          <div className="text-xs">
            <div className="font-bold text-blue-800">Associate of Arts and Sciences - Computer Simulation and Gaming</div>
            <div className="font-bold">Milwaukee Area Technical College</div>
            <br />
            <strong>Professional Certifications:</strong><br />
            • Complete Web Developer Certification (Zero to Mastery)<br />
            • HDI Certified Customer Service Representative<br />
            • Cultivating a Growth Mindset Certification
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;