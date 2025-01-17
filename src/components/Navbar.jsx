import React from "react";

const Navbar = () => {
  return (
    <nav class="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-slate-900 bg-opacity-90 sticky top-3 shadow-[0_8px_20px_rgba(255,255,255,0.2)] lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
  <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
    <div
      class="mr-4 block cursor-pointer py-1.5 text-base text-white font-semibold">
      Gkmeena Apps
    </div>
      <ul class="flex gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li class="flex items-center p-1 text-sm gap-x-2 text-slate-200">
          <a href="/" class="flex items-center">My Apps</a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-slate-200">
          <a href="/others-apps" class="flex items-center">Others Apps</a>
        </li>
      </ul>

  </div>
</nav>
  );
};

export default Navbar;
