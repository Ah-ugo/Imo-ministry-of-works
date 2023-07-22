import React from "react";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <div>
      <section class="relative pb-8 " style={{ height: "750px" }}>
        <div>
          <img
            src="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/140493298_231099841937376_1225889179803935934_n.jpg?stp=dst-jpg_p526x395&_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHUAtrnVjsx8NI6LCNGrhfAgQcRrxl2WHmBBxGvGXZYebu9ZFVOuirTUix5hMEdzLDT8EnCW_PGP0z-OKFxUUK4&_nc_ohc=PbrclgoTyuYAX8mV0AT&_nc_ht=scontent.fabb1-1.fna&oh=00_AfAEC5QVoYR2BDK-R-4i5tBAMJ5FX3xq0AuKvhbS9sy8XA&oe=64E1EADD"
            class="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
            alt=""
          />
          <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center bg-gray-900/75">
            <div class="z-10 max-w-6xl px-4 mx-auto ">
              {/* <span class="text-xs font-semibold text-blue-400 uppercase">
                Knowledge is power
              </span> */}
              <h2 class="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
                About Us
              </h2>
              <div class="mb-8 text-base leading-8 text-gray-400 flex gap-2 items-center justify-center lg:text-xl">
                <Link to={"/"}>Home</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <Link to={"/about"}>About</Link>
              </div>
              <div class="items-center justify-start block gap-4 md:flex"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
