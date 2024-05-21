import aboutImg from "../assets/image.jpeg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  const handleDownloadCV = () => {
    // Add your CV file path here
    const cvUrl = '/assets/CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV.pdf';
    link.click();
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl h-96 w-full" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <p className=" my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:via-slate-700 hover:to-purple-700"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
