import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/googleSheetsService';
import { useNavigate, useLoaderData } from '@remix-run/react';
import Papa from 'papaparse';

const url = 'https://github.com/rmezapi';

type Project = {
  id: string;
  project_name: string;
  dates: string;
  description: string;
  description_2: string;
  image_link: string;
  github_link?: string;
  huggingface_link?: string;
  web_link?: string;
};

export async function loader(){
  const csvData = await fetchProjects();
  return { csvData };
}

function CsProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();
  const { csvData } = useLoaderData<typeof loader>();
  const projectsRef = React.useRef<HTMLDivElement>(null);

  // TODO: fix this
  const handleGitHubClick = () => {
    console.log('Navigating to GitHub...');
    window.open(url, '_blank');
  };

  useEffect(() => {
    if (csvData) {
      const parsedData = Papa.parse(csvData, { header: true }).data as Project[];
      setProjects(parsedData);
    }
  }, [csvData]);

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Floating button */}
      <button
        className="fixed bottom-4 right-4 bg-black/50 text-white p-3 rounded-full shadow-lg hover:bg-secondary-dark transition"
        type="button"
        onClick={handleScrollToProjects}
      >
        more ↓
      </button>

      <div className="flex flex-col items-center justify-start mb-12 mx-12 w-11/12">
        <h1 className="mb-4 mt-10 text-2xl font-bold">background</h1>
        <p className="text-md text-justify md:max-w-[70%] max-w-[95%]">
          Attending the University of North Carolina at Chapel Hill not only allowed me to pursue my dream career but also exposed me to the diverse paths and opportunities available with a degree in Computer Science. Early in my time at Carolina, I discovered Artificial Intelligence (AI) and Machine Learning (ML), which ignited my passion for computer science. Before committing to AI and ML, I explored designing databases for a few years with Dr. Andy Lang and Dr. Aaron Delgaty. I also took courses in Object Oriented Programming, Computer Organization, and Modern Web Programming.
        </p> <br /> 
        <p className="text-md text-justify md:max-w-[70%] max-w-[95%]">
          As I progressed in my studies, I encountered attention-based transformers and their potential to revolutionize our interaction with technology. This discovery highlighted the continuous growth and evolution in computer science, inspiring me about the role I could play in its future. Alongside my major in Computer Science, I pursued a minor in Statistics, driven by my passion for data manipulation, understanding, and modeling.
        </p> <br />
        <p className="text-md text-justify md:max-w-[70%] max-w-[95%]">
          This passion translated directly into my role at CareYaya, where I led the development of AI solutions, including speech classification systems and LLM implementations through strategic prompt engineering and software development. I architected full-stack web applications using Remix/React while leveraging data analysis tools to drive business decisions, allowing me to combine my interests in AI, software development, and data science in meaningful ways. More on my time at CareYaya below.
        </p> <br />
        <p className="text-md text-justify md:max-w-[70%] max-w-[95%]">
          During my time at UNC and CareYaya Health Technologies, I learned to code in a variety of languages, including but not limited to C, Python, Java, MATLAB, R, and SQL. I am passionate about learning new programming languages and discovering innovative ways to interact with computers to create both art and functionality. I view coding as an art form, with computers as my medium, and I am excited to further cultivate my own coding style and collaborate in groundbreaking projects.
        </p> <br />
        {/* TODO: fix this */}
        <button className="btn btn--primary bg-gray-600 text-white hover:bg-secondary-dark transition px-3 py-2 mt-12 " type="button" onClick={handleGitHubClick}>Follow my GitHub!</button>
      </div>

      <div className="w-[70%] h-[2px] bg-gray-300 my-8"> </div>
      {/* New container for projects */}
      <div ref={projectsRef}>
        <h1 className="text-2xl font-bold text-center">projects and experience</h1>
        {projects.map((project) => (
          <div className="container mx-auto my-8 p-4 bg-gray-100 px-2 text-center w-[90%] flex flex-col md:flex-row items-center gap-10" key={project.id}>
            <div className="flex flex-col items-center gap-2 w-full md:w-[20%]">
              <img src={project.image_link} alt={project.project_name} className="h-48 md:h-48 object-cover" />
              <h2 className="text-lg font-bold pt-2">{project.project_name}</h2>
              <p className="text-sm text-gray-500">{project.dates}</p>
            </div>
            <div className="flex flex-col items-center max-w-full md:w-[65%]">
              <p className="text-sm text-justify max-w-[90%]">{project.description}</p> <br />
              <p className="text-sm text-justify max-w-[90%]">{project.description_2}</p>
            </div>
            <div className="flex md:flex-col flex-row justify-center items-center w-full md:w-[15%] gap-3">
              {project.github_link && (
                <button
                  className="btn btn--secondary bg-gray-400 text-white hover:bg-secondary-dark transition px-3 py-2 mt-2"
                  type="button"
                  onClick={() => window.open(project.github_link as string, '_blank')}
                >
                  github
                </button>
              )}
              {project.huggingface_link && (
                <button
                  className="btn btn--secondary bg-gray-600 text-white hover:bg-secondary-dark transition px-3 py-2 mt-2"
                  type="button"
                  onClick={() => window.open(project.huggingface_link as string, '_blank')}
                >
                  huggingface
                </button>
              )}
              {project.web_link && (
                <button
                  className="btn btn--secondary bg-gray-500 text-white hover:bg-secondary-dark transition px-3 py-2 mt-2"
                  type="button"
                  onClick={() => window.open(project.web_link as string, '_blank')}
                >
                  web
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CsProjects;