"use client"

import { ChangeEvent, useState } from "react"
import Button from "@/components/Button"
import Map from "@/components/Map"
import emailjs from "emailjs-com"
import ContactUsPageIcon1 from "@/assets/ContactUsPageIcon1.png"
import Image from "next/image"
import whatsapp from "@/assets/whatsapp.png"
import facebook from "@/assets/facebook.png"
import tiktok from "@/assets/tiktok.png"

export default function Contact() {
  const [formData, setFormData] = useState<any>({
    name: "",
    contactNumber: "",
    email: "",
    enquiry: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    // setError(!error)

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const [isLoading, setIsLoading] = useState(false)

  const [success, setSuccess] = useState(false)

  const [error, setError] = useState(false)

  const sendEmail = async () => {
    const emailServiceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
    const emailTemplateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
    const emailPublicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      console.error("One or more environment variables are missing.")
      setError(true)
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)

      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        formData,
        emailPublicKey
      )

      setIsLoading(false)
      setSuccess(true)
    } catch (error) {
      console.error("Failed to send email:", error)
      setIsLoading(false)
      setError(true)
    }

    setFormData({
      name: "",
      contactNumber: "",
      email: "",
      enquiry: "",
    })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log("Form data submitted:", formData)

    if (
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY &&
      formData
    ) {
      sendEmail()
    }
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row px-3 py-12 md:px-16 md:py-16 md:max-w-[1440px]">
        <div
          className="md:w-1/2 px-5  md:pl-6 md:pr-16 py-8 border border-white bg-white"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex flex-col">
            <h2 className="font-bold mb-6 md:mb-4 text-center md:text-left">
              Contact Us
            </h2>
            <p className="mb-4 md:mb-14">
              Have questions or need assistance? We&apos;re here to help! Reach
              out to us through any of the methods below, and our team will get
              back to you as soon as possible. We look forward to connecting
              with you.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <label className="min-w-[100px]">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-[#038885] rounded mb-7 w-full"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <label className="min-w-[100px]">Contact No.</label>
                <input
                  type="tel"
                  name="contactNumber"
                  maxLength={12}
                  minLength={8}
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="border border-[#038885] rounded mb-7 w-full"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <label className="min-w-[100px]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-[#038885] rounded mb-7 w-full"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <label className="min-w-[100px]">Enquiry</label>
                <textarea
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  className="border border-[#038885] rounded mb-7 w-full"
                  rows={4}
                  required
                />
              </div>
              {success ? (
                <p className="text-black">
                  Thank you for your enquiry! We&apos;ll get back to you soon.
                </p>
              ) : (
                <Button title="Submit" loading={isLoading} />
              )}
              {error ? (
                <p className="text-red pt-4">
                  Something unexpected occured, please try again.
                </p>
              ) : null}
            </form>
            <div className="flex flex-col md:flex-row justify-center md:gap-10 mt-12 md:mt-16">
              <div className="flex flex-row gap-6 md:w-1/2 mb-8">
                <Image
                  src={ContactUsPageIcon1}
                  alt="ContainUsPageIcon1"
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6"
                />
                <p>
                  63, Jalan TPP 1/1, Taman Perindustrian Puchong, 47100 Puchong,
                  Selangor
                </p>
              </div>
              <div className="md:w-1/2 pl-12 md:pl-0 mb-8">
                <p>Mon to Fri - 8am to 5pm</p>
                <p>Saturday - 8am - 12pm</p>
                <p>Sunday & Public Holidays - Closed</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-10">
              <div className="flex flex-row gap-6 w-1/2 mb-4">
                <Image
                  src={whatsapp}
                  alt="whatsapp"
                  width={30}
                  height={30}
                  className="object-contain w-6 h-6"
                />
                <p className="mt-1">+60 17-700 7768</p>
              </div>
              {/* <div className="flex flex-row gap-5 w-1/2">
                <p>Follow Us</p>
                <Image
                  src={facebook}
                  alt="facebook"
                  width={40}
                  height={40}
                  className="object-contain w-6 h-6"
                />
                <Image
                  src={tiktok}
                  alt="tiktok"
                  width={40}
                  height={40}
                  className="object-contain w-6 h-6"
                />
              </div> */}
            </div>
          </div>
        </div>
        <div
          className="md:w-1/2 w-full h-[442px] md:h-auto border border-white bg-white"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.25)" }}
        >
          <Map />
        </div>
      </div>
    </div>
  )
}
