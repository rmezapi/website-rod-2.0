import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "rodrigo meza pineda's website" },
    { name: "description", content: "welcome to my website" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen pb-8">
      <div className="md:w-1/2 order-2 md:order-1 p-4">
        <h1 className="text-4xl font-bold mb-4">about me!</h1>
        <p className="mb-4">
          I am a passionate believer in the positive impact that ethical and intentional interaction between people and technology can have on society. Specifically, I am passionate about computers and using them to create programs that can be used as tools to help improve people’s lives and our world. I recently graduated from the University of North Carolina at Chapel Hill with a degree in Computer Science, and I also completed minors in Statistics and Analytics, as well as Studio Art with a concentration in Photography.
        </p>
        <p>
          I am an excellence-oriented, methodical, curious, and innovative individual who values respect, integrity, and gratitude. My interests include machine learning, computer vision, software engineering, photography, art, and sports. I am particularly drawn to companies that leverage technology to benefit people, society, and the planet.
        </p>
      </div>
      <div className="md:w-1/2 order-1 md:order-2 pt-2 pb-4 px-4">
        <img
          src="https://res.cloudinary.com/dxewrioco/image/upload/v1718144287/rod_rfzpg4.jpg"
          alt="Profile" 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
