// npm install react-icons
import { RxArrowTopRight } from "react-icons/rx";

const MyWebApps = [
    { link: "https://gkmeena.netlify.app/", title: "My React Portfolio" },
    { link: "https://gkmeena-markdown-notes.vercel.app/", title: "My Next Notes" },
    { link: "https://grammar-count.netlify.app/", title: "haracter Counter" },
    { link: "https://teamraftaar.vercel.app/", title: "Team Raftaar" },
    { link: "https://markdown-editor-livepreview.netlify.app/", title: "Markdown Editor" },
    { link: "https://image-text-extract.onrender.com/", title: "Image to Text Extract" },
    { link: "https://dtcpass-delhi-gov-in.vercel.app/", title: "My DTC Pass" },
    { link: "https://markdown-editor-livepreview.netlify.app/", title: "Markdown Editor" },
    { link: "https://markdown-editor-livepreview.netlify.app/", title: "Markdown Editor" },
  ];

const AppCollections = () => {
  return (
    <div className="h-screen max-w-full mx-auto p-6 md:px-14 bg-slate-500 justify-items-center items-center">
    <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {MyWebApps.map((item) => (
        <div key={item.title} className="relative transform scale-50">
          {/* Card Button */}
          <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl w-[60vh] h-[70vh] overflow-hidden cursor-pointer"
          >
            {/* Iframe to show website content */}
            <div className="absolute inset-0 bg-cover bg-center">
              <iframe
                src={item.link}
                title={item.title}
                scrolling="no"
                className="w-full h-full rounded-xl"
                style={{
                  border: "none",
                  objectFit: "contain", // Ensures the content fits properly
                }}
              />
            </div>
            {/* Overlay effect when hovered */}
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            {/* App Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-black">
              <h1 className="px-6 py-2 text-3xl text-white font-bold">{item.title}</h1>
              <RxArrowTopRight className="absolute bottom-1 right-5 w-[50px] h-[45px] text-white group-hover:rotate-45 duration-100" />
            </div>
          </a>
        </div>
      ))}
    </div>
    </div>
  );

  
};

export default AppCollections;
