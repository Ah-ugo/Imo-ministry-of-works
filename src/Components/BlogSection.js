import React, { useState } from "react";

export default function BlogSection() {
  const [read1, setRead1] = useState(false);
  const [read2, setRead2] = useState(false);
  const [read3, setRead3] = useState(false);
  const [read4, setRead4] = useState(false);
  return (
    <div>
      <>
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <h2
            className="font-bold text-4xl mb-6 text-green-700"
            style={{ fontFamily: "Cabin" }}>
            News and Publications
          </h2>
          {/* Grid */}
          <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
            {/* Card */}
            <p className="group rounded-xl overflow-hidden" href="#">
              <div className="sm:flex">
                <div className="flex-shrink-0 rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full object-cover rounded-xl"
                    src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/241657443_377115647335794_8842487096055632926_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHRjDVe4LwL63IsEn4YWrWn-diuRW_TwQ_52K5Fb9PBD5LV0kTwgXQu6mewCc2quF2eDqLUR_pDlN4JzRISSMFK&_nc_ohc=yXRJ0GaP1b4AX9Jy2-V&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AfDR33LQQr_P1dD2CdBOhbem3zmPR106SkRFJv46i7TjxQ&oe=64BF02DE"
                    alt="Image Description"
                  />
                </div>
                <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    BRIEF HIGHLIGHTS ON THE THREE ROAD PROJECTS COMMISSIONED BY
                    PRESIDENT MUHAMMADU BUHARI TODAY.
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    1. The Naze-Nekede-Ihiagwa-Obinze road:- measures a total
                    length of 14.1Km and had it's
                  </p>
                  {read1 ? (
                    <p className="text-gray-600 dark:text-gray-400">
                      {" "}
                      first phase commissioned today. the road cuts across two
                      federal institutions, namely Federal Polytechnic Nekede
                      and the Federal University of Technology in Ihiagwa
                      Owerri. Apart from linking the federal institutions, it is
                      a veritable bypass that takes off traffic from the
                      hinterland of Owerri municipality to Portharcourt road
                      through Owerri/Aba road. The road was in a very deplorable
                      and devastated condition that was impassable. As a result,
                      the present administration voted alot of energy in fixing
                      the first phase to alleviate the suffering of the motoring
                      public especially the institution communities. 2.) Flood
                      Control Underground Tunnel:- The history of ecological
                      flooding in two strategic locations and watershed in
                      Owerri is a lifelong nightmare to the inhabitants of these
                      various locations. One of this location is the Dick Tiger,
                      Lower Egbu , Trans-Egbu and MCC/Chukwuma Nwoha environs.
                      The magnitude of flooding and ponding submerges all low
                      cost housing structures within the watershed and often
                      sacks the inhabitants at the peak of rainfall. These had
                      frightened previous administration that the citizens were
                      left to their own fate. At the inception of Senator Hope
                      Uzodimma's administration, the invincible challenge was
                      tackled headlong by initiating the design of the tunnel
                      route and it's hydraulic structures. Because of the
                      urgency needed in tackling the high magnitude flood
                      problem, the balloon technology method of formwork was
                      employed not minding the cost implication. It is good news
                      that the once invincible flood problem has been arrested
                      and successfully channeled to its final discharge point at
                      Otamiri. 3.) Amakohia/Egbeada bypass road Now Iwuanyanwu
                      way:- The Egbeada bypass is a 2.5km dual carriage way
                      linking two federal roads-vis-Owerri/Orlu/Awka and
                      Owerri/Onitsha federal highways. A section of the road was
                      cut into two with unimaginable deep gully of more than 9M
                      depth at the interchange bridge approach. The road was
                      awarded by the immediate past administration but its
                      construction was shortlived because of the extinction of
                      that administration. Due to its strategic and veritable
                      link to two federal highways, to save the collapse of
                      adjacent structures and to control the continued danger
                      posed by the deep gullies to motorists, the administration
                      of Senator Hope Uzodimma continued and completed the
                      project. Summarily, these extra ordinary feats became a
                      reality through the action working Commissioner for Works,
                      Ralph Nwosu who constantly inspected these construction
                      sites and ensured that the right specifications were duly
                      applied for quality and lasting durability. Today being
                      9th September 2021 recorded history as the President of
                      the Federal Republic of Nigeria, Muhammadu Buhari,
                      commissioned signature projects as part of the activities
                      marking his one day working visit to Imo State. His
                      Excellency, Senator Hope Uzodimma has distinguished
                      himself in the annals of governance with cognitive
                      administrative management know-how and have within a year
                      and eight months in office redefined the states of
                      critical road infrastructures in Imo State with many still
                      under construction. #GovernmentOfSharedProsperity
                      #GreaterImo #HopeInImo #ImoStateMinistryOfWorks
                    </p>
                  ) : null}
                  {!read1 ? (
                    <p
                      href="#"
                      className="mt-4 inline-flex items-center gap-x-1.5 text-green-700 decoration-2 hover:underline font-medium"
                      onClick={() => {
                        setRead1(!read1);
                      }}>
                      Read more
                      <svg
                        className="w-2.5 h-2.5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none">
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </p>
                  ) : (
                    <p
                      href="#"
                      className="mt-4 inline-flex items-center gap-x-1.5 text-green-700 decoration-2 hover:underline font-medium"
                      onClick={() => {
                        setRead1(!read1);
                      }}>
                      Read less
                      <svg
                        className="w-2.5 h-2.5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none">
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </p>
                  )}
                </div>
              </div>
            </p>
            {/* End Card */}
            {/* Card */}
            <p className="group rounded-xl overflow-hidden" href="#">
              <div className="sm:flex">
                <div className="flex-shrink-0 rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full object-cover rounded-xl"
                    src="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/177225530_289310049449688_8290180985988429913_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFtTZiQ80He2dOFyPbT1QgepA-Fj6Av6Y-kD4WPoC_pjzwafmUn0g1BIfuDrhjA_c06uoZKWyAkNCC-gExrJ-XO&_nc_ohc=xtsmDoBjqSgAX9KXRMQ&_nc_ht=scontent.fabb1-1.fna&oh=00_AfBcisHTDwQgTW34aAx-G0zSUTr2njxuS2K9tSitiPPi5w&oe=64E10D81"
                    alt="Image Description"
                  />
                </div>
                <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    Photo News
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Just a moment ago, the Commissioner for Works, Ralph Nwosu
                    alongside Transport Commissioner, Barr.Rex Anunobi
                  </p>
                  {read2 ? (
                    <p className="text-gray-600 dark:text-gray-400">
                      {" "}
                      and the Special Adviser to the Governor on Maritime,
                      Waterways Security and Habour Matters, Hon.Prince Henry
                      Okafor, held a strategic waterways security meeting with
                      the Commandant Nigeria Navy Finance and Logistics,
                      Owerrinta, Commodore S.H Abdullahi. The essence of the
                      meeting was to discuss crucial issues as to how to kick
                      start the building of a Navy post in Oguta, Imo State in
                      other to ensure waterways security.
                    </p>
                  ) : null}
                  {!read2 ? (
                    <p
                      href="#"
                      className="mt-4 inline-flex items-center gap-x-1.5 text-green-700 decoration-2 hover:underline font-medium"
                      onClick={() => {
                        setRead2(!read2);
                      }}>
                      Read more
                      <svg
                        className="w-2.5 h-2.5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none">
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </p>
                  ) : (
                    <p
                      href="#"
                      className="mt-4 inline-flex items-center gap-x-1.5 text-green-700 decoration-2 hover:underline font-medium"
                      onClick={() => {
                        setRead2(!read2);
                      }}>
                      Read less
                      <svg
                        className="w-2.5 h-2.5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none">
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </p>
                  )}
                </div>
              </div>
            </p>
            {/* End Card */}
            {/* Card */}
            <p className="group rounded-xl overflow-hidden" href="#">
              <div className="sm:flex">
                <div className="flex-shrink-0 rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full object-cover rounded-xl"
                    src="https://scontent.fabb1-2.fna.fbcdn.net/v/t1.6435-9/169393805_280558426991517_989007691207158182_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEtyPhX4br0XaUsz7S1UZPpSHHmd2AxMR1IceZ3YDExHfPBxD_B4o9BgJDrP32OU5asnZhLlxrZ0yGXRK-sahRp&_nc_ohc=4ehxxpPE3UoAX91zN_H&_nc_ht=scontent.fabb1-2.fna&oh=00_AfDbWZloyKVePGk73nx2o0L7iyTz16EXxOsUep-wFEek3w&oe=64E10821"
                    alt="Image Description"
                  />
                </div>
                <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    Breaking News.
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Senate President, Senator Ahmed Lawan commissions Akachi
                    road in Owerri, Imo State as His Excellency
                  </p>
                  {read3 ? (
                    <p className="text-gray-600 dark:text-gray-400">
                      Distinguished Senator Hope Uzodimma renames Akachi road to
                      Evan Enwerem Way.
                    </p>
                  ) : null}
                  {!read3 ? (
                    <p
                      href="#"
                      className="mt-4 inline-flex items-center gap-x-1.5 text-green-700 decoration-2 hover:underline font-medium"
                      onClick={() => {
                        setRead3(!read3);
                      }}>
                      Read more
                      <svg
                        className="w-2.5 h-2.5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none">
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </p>
                  ) : (
                    <p
                      href="#"
                      className="mt-4 inline-flex items-center gap-x-1.5 text-green-700 decoration-2 hover:underline font-medium"
                      onClick={() => {
                        setRead3(!read3);
                      }}>
                      Read less
                      <svg
                        className="w-2.5 h-2.5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none">
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </p>
                  )}
                </div>
              </div>
            </p>
            {/* End Card */}
            {/* Card */}
            <p className="group rounded-xl overflow-hidden" href="#">
              <div className="sm:flex">
                <div className="flex-shrink-0 rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full object-cover rounded-xl"
                    src="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/168361153_275991774114849_4995318902004259824_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGiFdN6hADL92BEQaF1_AFQJdo3vCXeIRol2je8Jd4hGjSGnJd2vPmqVA4_xtGRU2kTV0aaeKlR2Aizpre7pnLy&_nc_ohc=uHBd3SrDeAgAX9DYCVR&_nc_ht=scontent.fabb1-1.fna&oh=00_AfDu2xmUaSz256PRTelg2BpikmQzXD8to_xe8IMxnftKNg&oe=64E0F394"
                    alt="Image Description"
                  />
                </div>
                <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    Breaking News.
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    The Deputy Governor, His Excellency, Prof. Placid Njoku,
                    earlier today led the Commissioner for Works, Ralph Nwosu,
                    the Chief of Staff to the Governor,
                  </p>
                  {read4 ? (
                    <p className="text-gray-600 dark:text-gray-400">
                      Barr.Nnamdi Anyaehie, Mbaitoli Interim Management Chairman
                      and representatives of Craneburg Construction Company on a
                      visit to Umuocha Autonomous and Umudim autonomous
                      communities of Mbaitoli Local Government Council Area in
                      Imo State to amicably agree for discharge points for the
                      flood waters consequent upon the construction of drains
                      along that axis of Owerri Orlu Road. Inspecting the
                      proposed two sites for the borrow pit drainage channel,
                      the Deputy Governor stated the visit was at the instance
                      of the Governor, His Excellency Distinguished Senator Hope
                      Uzodinma and explained that the essence was to ensure that
                      everyone takes advantage of the ongoing construction. He
                      made it clear that in line with the extant laws of the
                      land, that all lands are bestowed on the Governor and he
                      can acquire same for overriding public interest. However,
                      he will not be pushed to take that option unless
                      circumstances suggest so. He explained that the purpose of
                      the construction was to safe the environment and people
                      inhabiting the area. The Deputy Governor further called
                      for a peaceful and harmonious relationship between the two
                      communities, Craneburg construction and the Government.
                      Speaking, the Commissioner for Works, Ralph Nwosu stated
                      that the Owerri/Orlu road remains a strategic road and
                      that quality must be put first stressing that land owners
                      where the borrow pits are sited should give maximum
                      cooperation to the Government and the Company handling the
                      road project in order to reap maximum benefits from the
                      construction. Ralph Nwosu further maintained that
                      sacrifices must be made to achieve a realistic result
                      while urging the farm owners to be considerate in their
                      decisions as the fate of other villagers lies with their
                      decisions. Responding, Nze Charles Onunaiwu, a farm land
                      owner in Umuocha, Mr Emma Iwuchukwu of Umudim and Nnaemeka
                      Okoro in their separate remarks thanked the team for the
                      visit and pledged of their cooperation with Government but
                      appealed that the project should be environmental
                      friendly. #GovernmentOfSharedProsperity #GreaterImo
                      #ImoStateMinistryOfWorks
                    </p>
                  ) : null}
                  {!read4 ? (
                    <p
                      href="#"
                      className="mt-4 inline-flex items-center gap-x-1.5 text-green-700 decoration-2 hover:underline font-medium"
                      onClick={() => {
                        setRead4(!read4);
                      }}>
                      Read more
                      <svg
                        className="w-2.5 h-2.5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none">
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </p>
                  ) : (
                    <p
                      className="mt-4 inline-flex items-center gap-x-1.5 text-green-700 decoration-2 hover:underline font-medium"
                      onClick={() => {
                        setRead4(!read4);
                      }}>
                      Read less
                      <svg
                        className="w-2.5 h-2.5"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none">
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </p>
                  )}
                </div>
              </div>
            </p>
            {/* End Card */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </>
    </div>
  );
}
