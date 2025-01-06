// npm install react-icons
import { RxArrowTopRight } from "react-icons/rx";

const MyWebApps = [
    { link: "https://dtech2021.vercel.app/", title: "Dtech Madhav" },
    { link: "https://dtu-timetable.vercel.app/", title: "Timetable Generator" },
    { link: "https://www.fresources.tech/auth", title: "Fresources" },
    { link: "https://onecompiler.com/cpp/42vk8ugq2", title: "One Compiler" },
    { link: "https://siaexplains.github.io/visa-sponsorship-companies/", title: "Visa Sponsership job" },
    { link: "https://kaunsa-mooc-le.streamlit.app/", title: "Kaunsa Mooc" },
    
  ];

const OthersApps = () => {
  return (
    <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-6 p-10 py-16">
        {MyWebApps.map((item) => (
          <div className="flex items-center justify-center h-[40vh]">
          <a key={item.title} href={item.link} target="_blank" className="group relative transform scale-50 w-[60vh] h-[80vh] flex items-center justify-center shadow-[0_8px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_20px_rgba(255,255,255,0.2)] transition-shadow duration-300 text-white rounded-xl  overflow-hidden cursor-pointer">
            <iframe
              src={item.link}
              scrolling="no"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="absolute bottom-0 left-0 right-0 bg-black">
              <h1 className="px-6 py-2 text-3xl text-white font-bold">{item.title}</h1>
              <RxArrowTopRight className="absolute bottom-1 right-5 w-[50px] h-[45px] text-white group-hover:rotate-45 duration-100" />
            </div>
          </a>
          </div>
        ))}
    </div>
  );
};

export default OthersApps;

          {/* Overlay effect when hovered */}
          {/* <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" /> */}
          {/* App Title */}
          {/* <div className="absolute bottom-0 left-0 right-0 bg-black">
            <h1 className="px-6 py-2 text-3xl text-white font-bold">{item.title}</h1>
            <RxArrowTopRight className="absolute bottom-1 right-5 w-[50px] h-[45px] text-white group-hover:rotate-45 duration-100" />
          </div> */}