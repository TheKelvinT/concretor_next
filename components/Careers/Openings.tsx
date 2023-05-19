import React, { useState } from "react";
import Button from "@/components/Button";
import { Tab } from "@headlessui/react";
import { opening } from "@/types/Careers";

type Props = { openings: opening[] };

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Openings = ({ openings }: Props) => {
  let [categories] = useState({
    "JUNIOR BARISTA": [
      {
        id: 1,
        opening: "JUNIOR BARISTA",
        salary: "RM2,000 - RM2,500",
        summary:
          "We are looking for a creative and passionate individual to fill the role of Head Barista at NOTA. With high standards for product quality and guest experience, the Head Barista takes full responsibility and ownership of the coffee bar and coffee experience.",
        description: {
          desc1:
            "Welcome and interact with customers, finding their preferences and using detailed knowledge to gently recommend coffee and other beverages they will enjoy ",
          desc2:
            "Prepare a wide variety of coffees, teas and other drinks of the highest standard, following prescribed recipes and presentation techniques to ensure consistent quality",
          desc3:
            "Coordinate the preparation of all orders from the coffee counter, enabling waiting staff to serve freshly made food and beverages promptly ",
          desc4:
            "Be prepared at quieter times to cover all aspects of the front counter role, including serving food, operating the till, waiting, and clearing tables ",
          desc5:
            "Help to develop a high performing barista team, ensuring staff understand their responsibilities and providing them with supervision, training and support ",
          desc6:
            "Maximise revenue by increasing sales, spend and conversion while minimising costs in ways that do not have negative impacts on quality or service  ",
          desc7:
            "Maintain supplies of counter and bar beverages in line with forecast demand  ",
          desc8:
            "Keep equipment working by following operating instructions, carrying out preventive maintenance, and troubleshooting breakdowns  ",
          desc9:
            "Freedom to experiment, fine-tune and create espresso, and other beverage recipes to improve guest experience ",
        },
        requirement: {
          req1: "At least one year of barista experience and two in customer service ",
          req2: "Knowledge of Calibration and pulling a good espresso shot ",
          req3: "Required Skill(s): Latte Art, Brewing, Barista ",
          req4: "Passion for culinary excellence with skills to create exciting new recipes ",
          req5: "A team player and results driven ",
        },
      },
    ],
    "JR. CAPTAIN FRONT OF HOUSE": [
      {
        id: 2,
        opening: "JR. CAPTAIN FRONT OF HOUSE",
        salary: "RM2,000 - RM2,500",
        summary:
          "We are looking for a creative and passionate individual to fill the role of Head Barista at NOTA. With high standards for product quality and guest experience, the Head Barista takes full responsibility and ownership of the coffee bar and coffee experience.",
        description: {
          desc1:
            "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. ",
          desc2:
            "Prepare a wide variety of coffees, teas and other drinks of the highest standard, following prescribed recipes and presentation techniques to ensure consistent quality",
          desc3:
            "Coordinate the preparation of all orders from the coffee counter, enabling waiting staff to serve freshly made food and beverages promptly ",
          desc4:
            "Be prepared at quieter times to cover all aspects of the front counter role, including serving food, operating the till, waiting, and clearing tables ",
          desc5:
            "Help to develop a high performing barista team, ensuring staff understand their responsibilities and providing them with supervision, training and support ",
          desc6:
            "Maximise revenue by increasing sales, spend and conversion while minimising costs in ways that do not have negative impacts on quality or service  ",
          desc7:
            "Maintain supplies of counter and bar beverages in line with forecast demand  ",
          desc8:
            "Keep equipment working by following operating instructions, carrying out preventive maintenance, and troubleshooting breakdowns  ",
          desc9:
            "Freedom to experiment, fine-tune and create espresso, and other beverage recipes to improve guest experience ",
        },
        requirement: {
          req1: "At least one year of barista experience and two in customer service ",
          req2: "Knowledge of Calibration and pulling a good espresso shot ",
          req3: "Required Skill(s): Latte Art, Brewing, Barista ",
          req4: "Passion for culinary excellence with skills to create exciting new recipes ",
          req5: "A team player and results driven ",
        },
      },
    ],
    COMMIS: [
      {
        id: 3,
        opening: "COMMIS",
        salary: "RM2,000 - RM2,500",
        summary:
          "We are looking for a creative and passionate individual to fill the role of Head Barista at NOTA. With high standards for product quality and guest experience, the Head Barista takes full responsibility and ownership of the coffee bar and coffee experience.",
        description: {
          desc1:
            "Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. ",
          desc2:
            "Prepare a wide variety of coffees, teas and other drinks of the highest standard, following prescribed recipes and presentation techniques to ensure consistent quality",
          desc3:
            "Coordinate the preparation of all orders from the coffee counter, enabling waiting staff to serve freshly made food and beverages promptly ",
          desc4:
            "Be prepared at quieter times to cover all aspects of the front counter role, including serving food, operating the till, waiting, and clearing tables ",
          desc5:
            "Help to develop a high performing barista team, ensuring staff understand their responsibilities and providing them with supervision, training and support ",
          desc6:
            "Maximise revenue by increasing sales, spend and conversion while minimising costs in ways that do not have negative impacts on quality or service  ",
          desc7:
            "Maintain supplies of counter and bar beverages in line with forecast demand  ",
          desc8:
            "Keep equipment working by following operating instructions, carrying out preventive maintenance, and troubleshooting breakdowns  ",
          desc9:
            "Freedom to experiment, fine-tune and create espresso, and other beverage recipes to improve guest experience ",
        },
        requirement: {
          req1: "At least one year of barista experience and two in customer service ",
          req2: "Knowledge of Calibration and pulling a good espresso shot ",
          req3: "Required Skill(s): Latte Art, Brewing, Barista ",
          req4: "Passion for culinary excellence with skills to create exciting new recipes ",
          req5: "A team player and results driven ",
        },
      },
    ],
  });

  const tabStyles = ({ selected }: any) =>
    classNames(
      "w-full rounded-lg py-2.5 px-4 whitespace-nowrap outline-none text-md  text-gray-50",
      "",
      selected
        ? "bg-white/[0.22] font-bold"
        : " hover:bg-white/[0.22] hover:text-gray-50"
    );
  return (
    <section
      id="opening"
      className="pb-24 flex-col justify-center items-center "
    >
      <div className="flex justify-center">
        <h3 className="py-12">Current Openings:</h3>
      </div>

      <div className=" mx-auto w-11/12 lg:max-w-[1073px]">
        <Tab.Group>
          <div className="sm:flex sm:flex-row  ">
            <Tab.List>
              <div className="flex sm:flex-col gap text-xs sm:overflow-visible overflow-x-scroll">
                {openings.map((opening) => (
                  <Tab
                    key={opening._id}
                    className={({ selected }) =>
                      classNames(
                        "py-4 md:py-5 px-2 md:px-3 w-36 font-gothic text-right text-xs",
                        "  ",
                        selected ? "bg-primary focus:border-none " : "   "
                      )
                    }
                  >
                    {opening.position}
                  </Tab>
                ))}
              </div>
            </Tab.List>
            <Tab.Panels className="">
              {openings.map((opening) => (
                <Tab.Panel
                  key={opening._id}
                  className={classNames(" py-12 md:px-12 bg-primary ")}
                >
                  <div className="mx-auto w-11/12">
                    <div>
                      <div className="md:flex md:justify-between text-main pb-4 md:pb-7">
                        <h3 className="text-xl ">{opening.position}</h3>
                        <p className="text-lg font-gothic mb-2">
                          {opening.lowSalaryRange} - {opening.highSalaryRange}
                        </p>
                      </div>
                      <p className="text-xs">{opening.summary}</p>
                      <div className="flex w-full py-8">
                        <h3 className="whitespace-nowrap text-base font-gothic  mr-9">
                          Job Description
                        </h3>
                        <div className="w-full border-t mt-3 border-main"></div>
                      </div>
                      <div className="flex justify-center md:mb-12">
                        <ul className="text-main text-xs list-disc space-y-4 w-11/12 md:w-4/5 leading-5  ">
                          {opening.jobDescription.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex w-full py-8">
                        <h3 className="whitespace-nowrap text-base font-gothic  mr-9">
                          Requirements
                        </h3>
                        <div className="w-full border-t mt-3 border-main"></div>
                      </div>
                      <div className="flex justify-center mb-12">
                        <ul className="text-main text-xs list-disc space-y-4  w-11/12 md:w-4/5 leading-5  ">
                          {opening.jobReq.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-main text-xs">
                        <p className="">
                          If you’re interested, send us your cv via email at
                          notaconcepts@gmail.com or Whatsapp at +60 12 6700 211.
                        </p>
                        <div className="flex justify-center py-12">
                          <Button title="APPLY NOW" width="w-48" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Openings;
