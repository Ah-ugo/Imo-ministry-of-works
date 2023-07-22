import React from "react";
import { Link } from "react-router-dom";

export default function ProjectComponent() {
  return (
    <div>
      <section class="py-10 lg:py-20 bg-green-700 text-white">
        <div class="mx-10">
          <h2
            className="font-bold text-4xl mb-2"
            style={{ fontFamily: "Cabin" }}>
            PROJECTS - New, On-going, and Completed
          </h2>
          <p className="font-semibold mb-6">
            The news about recent projects in the state
          </p>
          <div class="flex flex-wrap -m-3">
            <div class="w-full lg:w-1/2 p-3">
              <img
                class="w-full h-72 rounded-lg object-cover"
                src="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/167591026_275917484122278_3656297345391732919_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHd1y3ChVj-9s-wQQEqNvR0ShKjyYAx1P5KEqPJgDHU_n8qcH93SXrwWSvjlb_E_6q1YET8B9JNYGq_Xb38sQ85&_nc_ohc=TfjDC16y3hQAX9Fr2j8&_nc_ht=scontent.fabb1-1.fna&oh=00_AfA9e2ROtKOLNPxyRcd3qS0vzhhoWuD6nllNrChHK_oFgg&oe=64E11A91"
                alt=""
              />
            </div>
            <div class="w-full lg:w-1/2 p-3">
              <img
                class="w-full h-72 rounded-lg object-cover"
                src="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/160950488_264398215274205_627034239124511187_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFk2IrGt5U7BhYtF2FSp7DflDwRttFlE5WUPBG20WUTlYAfrOBIJS3Ii-41s4R_pftZ9MzvmN9vuZPL9LWKnXus&_nc_ohc=yRvXoBVKHUMAX9CMJjs&_nc_ht=scontent.fabb1-1.fna&oh=00_AfAkSOL9Kuy2c4LyFUopL-4U3-G17rOOzKcpBeR-6am3hQ&oe=64E12D73"
                alt=""
              />
            </div>
            <div class="w-full lg:w-1/3 p-3">
              <img
                class="w-full h-72 rounded-lg object-cover"
                src="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/163239527_268618374852189_3200220598675957237_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHKS20x9I4on6eTLMj21sFflXhR1LuNJOeVeFHUu40k5-bfniR9VPxZArO1LWZcoubaFYTEbJ_2eBFkoyrcESiK&_nc_ohc=Q0td0jiqKGQAX8RRWnG&_nc_ht=scontent.fabb1-1.fna&oh=00_AfBOByBh9wbiok0AXYuoQnr4vHQ0RKMKgkkyL7SXzf4crg&oe=64E10644"
                alt=""
              />
            </div>
            <div class="w-full lg:w-1/3 p-3">
              <img
                class="w-full h-72 rounded-lg object-cover"
                src="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/161501474_266015621779131_5214190323211287837_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFA9SbkXNq9Kb9k4X43XPnSmu9LQxxNViqa70tDHE1WKqCk7bG-bZMN7y-JaMS4WKy79ZgiMGY17LOYiftaWMMs&_nc_ohc=hGy2qhFOeoIAX88-J0K&_nc_ht=scontent.fabb1-1.fna&oh=00_AfB2G7F2eXPiWvwloxfX7mgyvGNf8loQx17kxDy6vpXLrw&oe=64E1116C"
                alt=""
              />
            </div>
            <div class="w-full lg:w-1/3 p-3">
              <img
                class="w-full h-72 rounded-lg object-cover object-top"
                src="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/161376113_265809175133109_6903106282111971189_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH9RwUF_iQSCcFFBPw_LfoVBwKfH8ROn_IHAp8fxE6f8nsb1g7K32WDGT4U_PPP07y5iDREZbwasd4_Q6hGaIRl&_nc_ohc=_RxQ9fgVH40AX9ibVQK&_nc_ht=scontent.fabb1-1.fna&oh=00_AfDLJD2hGI0xfdXrnX_lqU9R_ufUi-0DI9tatAOwupF4NQ&oe=64E10B1F"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Link
              to="/projects"
              className="bg-white text-green-700 p-2 font-semibold rounded hover:bg-gray-400">
              See More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
