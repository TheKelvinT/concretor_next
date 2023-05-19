"use client";
import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import Plus from "../Icons/plus";
import Minus from "../Icons/minus";
import { PortableText } from "@portabletext/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

type Props = { faq: any };

export default function Faq({ faq }: Props) {
  return (
    <div className="mb-28">
      <div>
        <div className="mx-auto w-11/12 md:w-4/5 lg:w-7/12 text-main leading-9 ">
          <h3 className="text-center pb-12 pt-24 sm:py-24">
            Frequently Asked Questions [FAQ]
          </h3>

          {faq.map(
            (faqs: {
              _id: React.Key | null | undefined;
              question:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
              answer:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
            }) => (
              <div key={faqs._id} className="space-y-8 hidden md:block ">
                <div>
                  <h6 className="font-sm font-bold ">{faqs.question}</h6>
                  <div className="text-sm leading-9">{faqs.answer}</div>
                </div>
              </div>
            )
          )}
        </div>
        <Link href="#book" className="md:flex justify-center pt-24 hidden ">
          <Button title="BOOK A TABLE" />
        </Link>

        <div className="mx-auto w-11/12 md:w-4/5 lg:w-7/12 block md:hidden">
          <div className="accordion-wrapper ">
            <Accordion className="w-full text-main " allowMultiple>
              {faq.map(
                (
                  faq: {
                    _id: React.Key | null | undefined;
                    question:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | React.PromiseLikeOfReactNode
                      | null
                      | undefined;
                    answer:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | React.PromiseLikeOfReactNode
                      | null
                      | undefined;
                  },
                  index: any
                ) => (
                  <AccordionItem
                    key={faq._id}
                    className="border-b border-gray-200 py-[17px]"
                  >
                    <AccordionButton className="flex justify-between">
                      <h6 className="text-left font-bold  font-inter leading-7  font-sm">
                        {faq.question}
                      </h6>
                      <AccordionIcon className="text-left" />
                    </AccordionButton>

                    <AccordionPanel
                      className="text-left mt-2 text-sm leading-7"
                      pb={4}
                    >
                      <p>{faq.answer}</p>
                    </AccordionPanel>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </div>
          <Link href="#book" className="flex justify-center pt-12">
            <Button title="BOOK A TABLE" />
          </Link>
        </div>
      </div>
    </div>
  );
}
