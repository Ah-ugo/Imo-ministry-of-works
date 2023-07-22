import React, { useState } from "react";
import NavComponent2 from "../Components/NavComponent2";
import FooterSection from "../Components/FooterSection";

const Projects = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <NavComponent2 />
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="px-3">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Projects
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-base text-body-color">
                  Explore our diverse range of recent projects that showcase our
                  commitment to transforming Imo State's infrastructure. From
                  roads and bridges to public transport and sustainable urban
                  planning, we are dedicated to creating a better,
                  well-connected future for all residents. Together, let's shape
                  a progressive Imo State for generations to come.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4"></div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="https://scontent.fabb1-2.fna.fbcdn.net/v/t1.6435-9/159247935_261241452256548_1355823611729470307_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGWqTRzvRjj7ehutRaza76KpncpUlScjmCmdylSVJyOYFUmZ7gCX9fDGknV5_-UH7c757ddfE43o6GYZHhyfV00&_nc_ohc=DS4Es9FzrxoAX8Zr8pu&_nc_ht=scontent.fabb1-2.fna&oh=00_AfDtsTulKjrJmNR82heXxZgS2w6nKlVY8PzcTOSHcieoTg&oe=64E118F5"
              // category="Branding"
              title="Assumpta-Ibariogwa-Portharcourt road"
              // button="View Details"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/160099604_262612438786116_4785326494725094117_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHpRa011pNMQYv7VRFmIEjU5QLXyMLNYQLlAtfIws1hAnDp_C2_8UJ47WxhhYF9Zz1DyRbVYIrS4dhdNAT5fGVz&_nc_ohc=sk1AzBbxHm4AX8U9xzp&_nc_ht=scontent.fabb1-1.fna&oh=00_AfB6DzxNqygV04uhzLfngVTkSitI5qIU3YFdZbRES7eb-w&oe=64E13FA7"
              // category="marketing"
              title="Dick-tiger street, Akachi road"
              // button="View Details"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/167656428_275917717455588_4253349064701769735_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGQLw4SjdhnbmG1HNavzR_uw7Gx_EGUygfDsbH8QZTKB12Zh43bdke7mQp8ofAnCOe2_Q7sXS16oF9DX4ArU7AI&_nc_ohc=VUIMt-pnFZYAX-JU1fm&_nc_ht=scontent.fabb1-1.fna&oh=00_AfA3ar1oBwHB-4e01CISL6MONCgSpsKWFiLexQgQoDrhmQ&oe=64E1042A"
              // category="marketing"
              title="road and drainage construction of World bank/Umuguma road"
              // button="View Details"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/163239527_268618374852189_3200220598675957237_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHKS20x9I4on6eTLMj21sFflXhR1LuNJOeVeFHUu40k5-bfniR9VPxZArO1LWZcoubaFYTEbJ_2eBFkoyrcESiK&_nc_ohc=Q0td0jiqKGQAX_tbuXf&_nc_ht=scontent.fabb1-1.fna&oh=00_AfCiKFheAl0Wek9GKFoi6RqQ8wAUALNIvgfgq3Pdete2MQ&oe=64E10644"
              // category="Development"
              title="Egbeada By-Pass road"
              // button="View Details"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/161501474_266015621779131_5214190323211287837_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFA9SbkXNq9Kb9k4X43XPnSmu9LQxxNViqa70tDHE1WKqCk7bG-bZMN7y-JaMS4WKy79ZgiMGY17LOYiftaWMMs&_nc_ohc=hGy2qhFOeoIAX_SNNQg&_nc_ht=scontent.fabb1-1.fna&oh=00_AfCJjgNhb6aQT4ZBfSFU0h5EzcU7NUmJhvW5sKVxwK323w&oe=64E0D92C"
              // category="Design"
              title="Oguta/Mgbidi road"
              // button="View Details"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/161376113_265809175133109_6903106282111971189_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH9RwUF_iQSCcFFBPw_LfoVBwKfH8ROn_IHAp8fxE6f8nsb1g7K32WDGT4U_PPP07y5iDREZbwasd4_Q6hGaIRl&_nc_ohc=_RxQ9fgVH40AX9ibVQK&_nc_ht=scontent.fabb1-1.fna&oh=00_AfDLJD2hGI0xfdXrnX_lqU9R_ufUi-0DI9tatAOwupF4NQ&oe=64E10B1F"
              // category="Marketing"
              title="Federal Secretariat road"
              // button="View Details"
              // buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Projects;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}>
        <div className="mb-12">
          <div className="overflow-hidden rounded-lg">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg mx-7 py-9">
            <span className="block mb-2 text-sm font-semibold text-primary">
              {category}
            </span>
            <h3 className="mb-4 text-xl font-bold text-dark">{title}</h3>
            <a
              href={buttonHref}
              className="inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-primary hover:bg-primary hover:text-white">
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
