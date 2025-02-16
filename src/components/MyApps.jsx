// npm install react-icons
import { RxArrowTopRight } from "react-icons/rx";

const myAppsList = [
    { link: "https://gkmeena.netlify.app/", title: "My React Portfolio" },
    { link: "https://gkmeena-markdown-notes.vercel.app/", title: "My Next Notes" },
    { link: "https://grammar-count.netlify.app/", title: "Character Counter" },
    { link: "https://teamraftaar.vercel.app/", title: "Team Raftaar" },
    { link: "https://markdown-editor-livepreview.netlify.app/", title: "Markdown Editor" },
    { link: "https://image-text-extract.onrender.com/", title: "Image to Text (Flask)" },
    { link: "https://bus-pass-generator.onrender.com/", title: "DTC Pass Generator" },
    { link: "https://dtcpass-delhi-gov-in.vercel.app/", title: "My DTC Pass" },
    { link: "https://proximity-words.netlify.app/", title: "Words Proximity" },
    { link: "https://my-docs-ocr.netlify.app/", title: "Text OCR (JS Tesseract)" },

  ];

  const othersAppsList = [
    { link: "https://dtech2021.vercel.app/", title: "Dtech Madhav" },
    { link: "https://rankwallah.in/", title: "Rank Wallah DTU" },
    { link: "https://dtu-timetable.vercel.app/", title: "Timetable Generator" },
    { link: "https://www.fresources.tech/auth", title: "Fresources" },
    { link: "https://onecompiler.com/cpp/42vk8ugq2", title: "One Compiler" },
    { link: "https://siaexplains.github.io/visa-sponsorship-companies/", title: "Visa Sponsership job" },
    { link: "https://kaunsa-mooc-le.streamlit.app/", title: "Kaunsa Mooc" },
    { linl: "https://saurabhdaware.github.io/text-to-handwriting/", title: "Text to Handwriting"},
    { linl: "https://codewitharyan.com/cwa-sheet/aryan-dsa-master-sheet", title: "Code With Aryan- DSA "},
    { linl: "https://projectlearn.io/", title: "ProjectLearn Projects"},
    { linl: "https://quickref.me/index.html", title: "QuickRef Projects"},
    { linl: "https://www.enggroom.com/", title: "Enggroom Projects"}
  ];

const appsList = location.pathname === "/others-apps" ? othersAppsList : myAppsList ;

const MyApps = () => {
  return (
    <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center gap-6 p-10 py-16">
        {appsList.map((item) => (
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

export default MyApps;
