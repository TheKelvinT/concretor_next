import React, { useState } from "react";

import { DatePicker } from "antd";
import Button from "./Button";
function ContactSection() {
  const disabledDate = (current: any) => {
    return current < Date.now() || new Date(current).getDay() === 3;
  };
  return (
    <div id="book" className="bg-primary   text-main">
      <div className="flex flex-col lg:flex-row justify-center py-20 px-4 mx-auto mt-24 lg:gap-x-32 xl:gap-x-56 w-11/12 lg:w-auto">
        <div className="">
          <div className="mb-8">
            <h3 className="text-3xl">Chope A Table .</h3>
          </div>
          <div className="">
            <form action="" method="post">
              <div className="flex items-center py-2">
                <div className="w-36">
                  <label htmlFor="name" className="font-gothic font-lg">
                    Name
                  </label>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  required
                  className="bg-primary border border-main/20 text-xs px-4 h-12 w-full sm:w-[369px]"
                />
              </div>
              <div className="flex items-center py-2 ">
                <div className="w-36">
                  <label htmlFor="contact" className="font-gothic font-lg">
                    Contact No.
                  </label>
                </div>
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  placeholder="contact no"
                  required
                  className="bg-primary border border-main/20 text-xs w-full sm:w-[369px] px-4 h-12"
                />
              </div>
              <div className="flex items-center py-2">
                <div className="w-36">
                  <label htmlFor="email" className="font-gothic font-lg">
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  required
                  className="bg-primary border border-main/20 text-xs w-full sm:w-[369px] px-4 h-12"
                />
              </div>
              <div className="hidden md:flex py-2">
                <div className="flex-col sm:flex-row flex justify-between w-[513px] ">
                  <div className="sm:space-x-9  whitespace-nowrap">
                    <label htmlFor="date" className="font-gothic font-lg">
                      Date
                    </label>

                    <DatePicker
                      name="date"
                      id="date"
                      format="DD-MM-YYYY"
                      disabledDate={disabledDate}
                      placeholder={"date"}
                      className="bg-primary border text-[#333333] rounded-none border-main/20 text-xs font-inter w-auto md:w-[150px] px-4 h-12"
                    />
                  </div>
                  <div className="sm:space-x-9  whitespace-nowrap">
                    <label htmlFor="time" className="font-gothic font-lg">
                      Time
                    </label>

                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="bg-primary border border-main/20 text-xs w-auto md:w-[150px] text-black/30  px-4 h-12"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:hidden items-center py-2">
                <div className="w-36">
                  <label htmlFor="date" className="font-gothic font-lg">
                    Date
                  </label>
                </div>
                <DatePicker
                  name="date"
                  id="date"
                  format="DD-MM-YYYY"
                  disabledDate={disabledDate}
                  placeholder={"date"}
                  className="bg-primary border text-[#333333]  font-inter  rounded-none border-main/20 text-xs w-full sm:w-[369px] px-4 h-12"
                />
              </div>
              <div className="flex md:hidden items-center py-2">
                <div className="w-36">
                  <label htmlFor="date" className="font-gothic font-lg">
                    Time
                  </label>
                </div>
                <input
                  type="time"
                  id="time"
                  name="time"
                  placeholder={"time"}
                  className=" appearance-none grow-1 sm:grow-0  flex-basis-auto rounded-none bg-primary border  border-main/20 text-[#333333] text-xs w-full sm:w-[369px] px-4 h-12 "
                />
              </div>
              <div className=" flex flex-col pt-4 mb-8">
                <label htmlFor="special" className="font-gothic font-lg mb-4">
                  Special Requirements<span className="text-xs"> (if any)</span>
                </label>

                <textarea
                  id="special"
                  name="special"
                  placeholder="additional information: (such as dietary requirements, celebration details, special care, etc)"
                  required
                  className="bg-primary font-inter border border-main/20 text-xs w-full sm:w-[515px] py-2 px-4 h-16"
                />
              </div>
              <Button title="SUBMIT NOW" />
            </form>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 lg:flex-col mt-7 py-4 w-4/5 md:w-auto ">
          <div className="flex flex-col lg:order-2 ">
            <h3 className="text-2xl">Contact Us .</h3>

            <div className="flex flex-col space-y-1 pb-12">
              <h5 className="text-2xl font-gothic">Mobile</h5>
              <p className="text-sm">+60 17 489 1189</p>
            </div>
            <div className="flex flex-col space-y-1">
              <h5 className="text-2xl font-gothic">Address</h5>
              <p className="text-sm">No. 1-1 (First Floor),</p>
              <p className="text-sm">Jalan Anggerik Vanilla BF 31/BF,</p>
              <p className="text-sm">Kota Kemuning, 40460 Shah Alam,</p>
              <p className="text-sm">Selangor.</p>
            </div>
          </div>
          <div className="lg:order-1">
            <h3 className="text-2xl">Operating Hours .</h3>
            <p className="text-lg font-marcellus">Mon - Sun | 10am - 9pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
