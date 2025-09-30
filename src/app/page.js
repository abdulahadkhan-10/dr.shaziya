import React from "react";
import { Phone, Mail, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4">
          <h1
            className="text-xl md:text-3xl text-center font-bold pt-2"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Dr. Shazia Waghoo Portfolio
          </h1>
        </div>
      </header>

      {/* Yellow accent line */}
      <div
        className="w-full h-2.5"
        style={{ backgroundColor: "#FFC107" }}
      ></div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Doctor Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/profile.svg"
                alt="Dr. Shazia Waghoo"
                className="w-110 h-auto object-cover"
              />
            </div>

            {/* Doctor Info */}
            <div className="sm:text-left text-center">
              <h2
                className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 "
                // style={{ fontFamily: "Times New Roman, serif" }}
              >
                Dr. Shazia Waghoo
                <div className="w-[19rem] h-0.5 rounded-lg bg-[#FFD54F] mt-2 ml-10 md:ml-0"></div>
              </h2>

              <p
                className="text-blue-500 font-semibold text-xl mb-4 tracking-widest md:text-left"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Dr Shazia Waghoo
                <br />
                MBBS, DNB GENERAL SURGERY (Mumbai),
              </p>

              <p
                className="text-blue-500 font-semibold text-xl mb-4 tracking-widest md:text-left"
                // style={{ fontFamily: "Times New Roman, serif" }}
              >
                Diploma in Hernia Essentials <br />
                (By Asia Pacific Hernia Society & The Royal College of Surgeons
                of Edinburgh)
              </p>

              <h3
                className="text-lg font-bold mb-4"
                style={{
                  fontFamily: "Inria Sans, sans-serif",
                  color: "#004979",
                }}
              >
                A seasoned Laparoscopic, Hernia, and Breast Surgeon
              </h3>
              <p
                className="text-gray-700 text-lg mb-6 leading-relaxed"
                style={{ fontFamily: "Inria Sans, sans-serif" }}
              >
                A specialist minimally invasive Hernia, Laparoscopic, Breast and
                GI surgeon with over a decade of experience, practicising in
                Mumbai and Navi Mumbai. She has a strong ethical practice and
                brings world class surgical care with all the latest treatment
                protocols and techniques to practice. She is an advocate for
                patient health and her patient centric approach focusses on best
                surgical outcomes and overall healing.
              </p>

              {/* Areas of Expertise */}
              <div className="mb-14 mt-10">
                <h3
                  className="text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  Areas Of Expertise :
                </h3>
                <div
  className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-800 text-lg"
  style={{ fontFamily: "Inria Sans, sans-serif" }}
>
  {[
    "Minimally invasive Hernia Surgery",
    "Laparoscopic Surgery",
    "Gastrointestinal surgery",
    "Breast surgery",
    "Abdominal wall reconstruction surgery",
    "Anorectal laser surgery",
    "Colorectal surgery",
    "General surgery",
    "Vascular surgery",
    "Thyroid surgery",
  ].map((item) => (
    <div key={item} className="flex items-start">
      <span className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-blue-500 mr-3 mt-1.5 shrink-0"></span>
      <span>{item}</span>
    </div>
  ))}
</div>


              </div>

              {/* CTA Button */}
              {/* <a
                href="https://drshaziawaghoo.com/contactus"
                target="_blank"
                rel="noopener noreferrer"
                className="block md:inline-block text-center"
              >
                <button
                  className="bg-blue-500 font-bold py-3 mt-[-20px] px-8 rounded-full hover:bg-blue-600 transition duration-300 text-sm mx-auto md:mx-0"
                  style={{
                    color: "#FFD54F",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  BOOK AN APPOINTMENT
                </button>
              </a> */}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { path: "heart.svg", number: "3,000+", label: "Happy Patients" },
            {
              path: "middle.svg",
              number: "11 +",
              label: "Years of Experience",
            },
            {
              path: "last.svg",
              number: "1,500+",
              label: "Successful Surgeries",
            },
          ].map((stat) => (
            <div
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
              key={stat.label}
            >
              {/* SVG / Image */}
              <img
                src={stat.path}
                alt={stat.label}
                className="mx-auto mb-4 w-12 h-12"
              />

              <h3
                className="text-3xl font-bold text-gray-900"
                style={{ fontFamily: "inter, serif" }}
              >
                {stat.number}
              </h3>
              <p className="text-gray-600 text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Hospital Affiliations and Contact */}
        <div className="w-full mb-8 h-[0.8px] rounded-lg bg-[#0085DC]"></div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Hospital Affiliations */}
          <div className="bg-white">
            <h3
              className="text-4xl font-bold text-blue-600 mb-2"
              style={{ fontFamily: "Jaldi, sans-serif", color: "#004979" }}
            >
              Hospital Affiliations
            </h3>
            {/* Yellow line */}
            <div className="w-[20rem] mb-2 h-0.5 rounded-lg bg-[#FFD54F]"></div>
            {/* Subtext */}
            <p
              className="text-xl mb-4"
              style={{ fontFamily: "Jaldi, sans-serif", color: "#004979" }}
            >
              Affiliated with 7+ reputed Hospitals and
              <p>Clinics in Mumbai</p>
            </p>

            <ul className="space-y-3 text-xl text-gray-700">
              {[
                "Criticare Asia Group,Andheri(E)&(W),Kurla West & Malad",
                "RG Stone Hospital,Khar (W)",
                "Surya Hospitals, Santacruz(W)& Chembur",
                "Apollo Spectra Hospital,Chembur",

                "SRV Hospital CHEMBUR",
                "Kokilaben Dhirubhai Ambani Hospital,Koparkhairane",
                "HVS Hospital,Ghatkopar(W)",
              ].map((hospital) => (
                <li
                  className="flex items-center font-semibold"
                  style={{ fontFamily: "Poppins" }}
                  key={hospital}
                >
                  <span className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-blue-500 mr-3"></span>
                  {hospital}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-blue-300 rounded-2xl p-6 w-100 h-80">
            <h3
              className="text-2xl font-bold text-blue-600 mb-6"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Contact
            </h3>
            {/* Phone */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="p-2.5 rounded-full mr-3 bg-yellow-400">
                  <Phone className="w-5 h-5 text-gray-900" />
                </div>
                <h4
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  Phone
                </h4>
              </div>
              <p className="text-gray-900 text-base ml-12">
                9833584847 | 9892933421
              </p>
            </div>
            {/* Email */}
            <div>
              <div className="flex items-center mb-2">
                <div className="p-2.5 rounded-full mr-3 bg-yellow-400">
                  <Mail className="w-5 h-5 text-gray-900" />
                </div>
                <h4
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  Email
                </h4>
              </div>
              <p className="text-gray-900 text-base ml-12">
                drshaziawaghoo@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          {/* Consulting Rooms */}
          <div className="bg-white">
            <h3
              className="text-4xl font-bold text-blue-600 mb-2"
              style={{ fontFamily: "Jaldi, sans-serif", color: "#004979" }}
            >
              Consulting Rooms
            </h3>
            {/* Yellow line */}
            <div className="w-[20rem] mb-2 h-0.5 rounded-lg bg-[#FFD54F]"></div>
            {/* Subtext */}
            <p
              className="text-xl mb-4"
              style={{ fontFamily: "Jaldi, sans-serif", color: "#004979" }}
            >
              Available at prime locations in Mumbai for easy access
            </p>

            <ul className="space-y-3 text-xl text-gray-900">
  {[
    "VLSR – The Clinic, 2nd floor, Corinthian, Linking Road, Opp. DBS Bank, Khar West, Mumbai 400052",
    "The Diagnostic Hub, Florence, Nehru Road, Next to Axis Bank, Vakola, Santacruz East, Mumbai 400055",
    "CritiCare Asia Hospital Kurla (W), Building No 1, Kirol Road, off LBS Marg, near Kohinoor Intl School, Ali Yavar Jung, Kurla (W), Mumbai 400070",
    "Chembur Clinic (Dr. Sheth Clinic), 8-28/B, DK Sandu Marg, Chembur Gaothan, Chembur, Mumbai 400071",
    "CritiCare Asia Hospital Andheri (E), Plot No 516, Besides SBI, Teli Gali, Maheshwari Nagar, Andheri (E), Mumbai 400069",
    "Precision Super Speciality, Vashi-Turbhe Rd, Sector 17, Vashi, Navi Mumbai, Maharashtra 400705",
  ].map((room) => (
    <li
      key={room}
      className="flex items-start font-semibold"
      style={{ fontFamily: "Poppins" }}
    >
      {/* Circle bullet */}
      <span className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-blue-500 mt-1.5 mr-3 shrink-0"></span>
      
      {/* Text block */}
      <span className="flex-1">{room}</span>
    </li>
  ))}
</ul>

          </div>
        </div>

        {/* Social Work and Membership */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Social Work */}
          <div>
            {/* Divider Line */}
            <div className="w-full h-[1px] rounded-lg bg-[#0085DC] mb-5"></div>

            {/* Heading with icon */}
            <h3
              className="flex items-center text-xl font-bold text-blue-600 mb-4"
              style={{ fontFamily: "Inter, sans-serif", color: "#004979" }}
            >
              <img
                src="/social-work.svg"
                alt="Social Work"
                className="w-6 h-6 mr-2"
              />
              <span>Social Work</span>
            </h3>

            <ul className="space-y-3 text-base font-semibold text-gray-700">
              {[
                "Free Surgical Camp At Sehat NGO, Kurla West",
                "Health Camp At Criticare Asia Hospital",
              ].map((work) => (
                <li
                  className="flex items-start"
                  key={work}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <span className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-blue-500 mr-3 mt-1 flex-shrink-0"></span>
                  <span>{work}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership */}
          <div>
            {/* Divider Line */}
            <div className="w-full -ml-6  h-[1px] rounded-lg bg-[#0085DC] mb-5"></div>

            {/* Heading with icon */}
            <h3
              className="flex items-center text-xl font-bold text-blue-600 mb-4"
              style={{ fontFamily: "Inter, sans-serif", color: "#004979" }}
            >
              <img
                src="/member.svg"
                alt="Membership"
                className="w-6 h-6 mr-2"
              />
              <span>Membership</span>
            </h3>

            <ul className="space-y-3 text-base font-semibold text-gray-700">
              {[
                "Member of Association of Surgeons of India and Maharashtra Surgical Society",
                "Member of Asia-Pacific Hernia Society, & Hernia Society of India",
                "Member of Minimal Access Surgeons of India",
              ].map((member) => (
                <li
                  className="flex items-start"
                  key={member}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <span className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-blue-500 mr-3 mt-1 flex-shrink-0"></span>
                  <span>{member}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mb-12">
          <h3
            className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-8"
            style={{ fontFamily: "Inter, sans-serif", color: "#004979" }}
          >
            <div className="w-full mb-5 h-[1px] rounded-lg bg-[#0085DC]"></div>
            Why you should Consult Dr. Shazia Waghoo
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h4
                className="font-bold text-gray-900 mb-3 text-base"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Experienced Doctor in Minimally-Invasive Surgery
              </h4>
              <p
                className="text-gray-700 text-base leading-relaxed"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Our brand is well-regarded in the medical community for its
                accurate diagnosis and precise surgical care, specializing in
                advanced laser and laparoscopic treatments.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h4
                className="font-bold text-gray-900 mb-3 text-base"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Approachable & Available to Consult at Multiple Locations
              </h4>
              <p
                className="text-gray-700 text-base leading-relaxed"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                We offer advanced surgical care across multiple locations with
                follow-up consultations. Our approach ensures optimal treatment
                plans and full post-op support for a fast recovery.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h4
                className="font-bold text-gray-900 mb-3 text-base"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Cashless Facilities & Rehabilitation Services Available
              </h4>
              <p
                className="text-gray-700 text-base leading-relaxed"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                We support you throughout your surgical journey — from
                pre-surgery onboarding and insurance to scheduling and post-op
                care. Our goal is to ensure a smooth, stress-free experience and
                complete recovery.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full mb-8 h-[0.8px] rounded-lg bg-[#0085DC]"></div>

      {/* Latest from Instagram */}
      <div className="mb-12">
        <div className="flex items-center justify-center mb-6">
          <img
            src="/latest.svg"
            alt="Latest from Instagram"
            className="w-80 h-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 px-8 gap-6">
          {/* Post 1 */}
          <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
            {/* Post Image */}
            <div className="relative">
              <img
                src="/post_1.webp"
                alt="Instagram Post 1"
                className="w-full h-64 object-cover"
              />
              <a
                href="https://www.instagram.com/she_the_surgeon/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
              >
                <span style={{ color: "#FFD54F" }}>View Profile</span>
              </a>
            </div>

            {/* Post Footer */}
            <div className="p-3">
              <a
                href="https://www.instagram.com/p/DOWFoq6CoBh/?igsh=MTR4OWp1NGJib2Zydg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
              >
                View more on Instagram
              </a>
              <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
                {/* Action Icons */}
                <img
                  src="/like.svg"
                  alt="Like"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/comment.svg"
                  alt="Comment"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/send.svg"
                  alt="Send"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/save.svg"
                  alt="Save"
                  className="w-6 h-6 cursor-pointer ml-auto"
                />
              </div>
              <p className="text-gray-700 text-sm font-medium">15 likes</p>
              <p className="text-gray-600 text-xs">Add a comment...</p>
            </div>
          </div>

         


          {/* Post 2 */}
          <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
            {/* Post Image */}
            <div className="relative">
              <img
                src="/post_2.webp"
                alt="Instagram Post 2"
                className="w-full h-64 object-cover"
              />
              <a
                href="https://www.instagram.com/she_the_surgeon/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
              >
                <span style={{ color: "#FFD54F" }}>View Profile</span>
              </a>
            </div>

            {/* Post Footer */}
            <div className="p-3">
              <a
                href="https://www.instagram.com/p/DO_J-1LiqKr/?igsh=MWEwOHN1MWZjbWxxYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
              >
                View more on Instagram
              </a>
              <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
                <img
                  src="/like.svg"
                  alt="Like"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/comment.svg"
                  alt="Comment"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/send.svg"
                  alt="Send"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/save.svg"
                  alt="Save"
                  className="w-6 h-6 cursor-pointer ml-auto"
                />
              </div>
              <p className="text-gray-700 text-sm font-medium">50 likes</p>
              <p className="text-gray-600 text-xs">Add a comment...</p>
            </div>
          </div>
          {/* Post 3 */}
          <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
            {/* Post Image */}
            <div className="relative">
              <img
                src="/post.webp"
                alt="Instagram Post 2"
                className="w-full h-64 object-cover"
              />
              <a
                href="https://www.instagram.com/she_the_surgeon/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
              >
                <span style={{ color: "#FFD54F" }}>View Profile</span>
              </a>
            </div>

            {/* Post Footer */}
            <div className="p-3">
              <a
                href=" https://www.instagram.com/p/DNk5HivKOqd/?igsh=MTBiZTM5eW1ybDVuNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
              >
                View more on Instagram
              </a>
              <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
                <img
                  src="/like.svg"
                  alt="Like"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/comment.svg"
                  alt="Comment"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/send.svg"
                  alt="Send"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/save.svg"
                  alt="Save"
                  className="w-6 h-6 cursor-pointer ml-auto"
                />
              </div>
              <p className="text-gray-700 text-sm font-medium">48 likes</p>
              <p className="text-gray-600 text-xs">Add a comment...</p>
            </div>
          </div>
          {/* Post 4 */}
<div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
  {/* Post Video */}
  <div className="relative">
    <video
      src="/post_4.mp4"
      className="w-full h-[500px] object-contain bg-black" // full video visible
      controls
      muted
    />
    <a
      href="https://www.instagram.com/she_the_surgeon/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
    >
      <span style={{ color: "#FFD54F" }}>View Profile</span>
    </a>
  </div>

  {/* Post Footer */}
  <div className="p-3">
    <a
      href="https://www.instagram.com/reel/DIJHW48prDI/?igsh=dnRoNGN1MGEyM3A3"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
    >
      View more on Instagram
    </a>
    <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
      <img src="/like.svg" alt="Like" className="w-6 h-6 cursor-pointer" />
      <img src="/comment.svg" alt="Comment" className="w-6 h-6 cursor-pointer" />
      <img src="/send.svg" alt="Send" className="w-6 h-6 cursor-pointer" />
      <img
        src="/save.svg"
        alt="Save"
        className="w-6 h-6 cursor-pointer ml-auto"
      />
    </div>
    <p className="text-gray-700 text-sm font-medium">50 likes</p>
    <p className="text-gray-600 text-xs">Add a comment...</p>
  </div>
</div>


         {/* Post 5 */}
<div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
  {/* Post Video */}
  <div className="relative">
    <video
      src="/post_5.mp4"
      className="w-full h-[500px] object-contain bg-black" // full video visible & larger
      controls
      muted
    />
    <a
      href="https://www.instagram.com/she_the_surgeon/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
    >
      <span style={{ color: "#FFD54F" }}>View Profile</span>
    </a>
  </div>

  {/* Post Footer */}
  <div className="p-3">
    <a
      href="https://www.instagram.com/reel/DOh7jBYCiUs/?igsh=MXR0YWZwOWU2azM5aA=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
    >
      View more on Instagram
    </a>
    <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
      <img src="/like.svg" alt="Like" className="w-6 h-6 cursor-pointer" />
      <img src="/comment.svg" alt="Comment" className="w-6 h-6 cursor-pointer" />
      <img src="/send.svg" alt="Send" className="w-6 h-6 cursor-pointer" />
      <img
        src="/save.svg"
        alt="Save"
        className="w-6 h-6 cursor-pointer ml-auto"
      />
    </div>
    <p className="text-gray-700 text-sm font-medium">120 likes</p>
    <p className="text-gray-600 text-xs">Add a comment...</p>
  </div>
</div>


           {/* Post 6*/}
          <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
  {/* Post Video */}
  <div className="relative">
    <video
      src="/hello.mp4"
      className="w-full h-[500px] object-contain bg-black" // increased height
      controls
      muted
    />

    <a
      href="https://www.instagram.com/she_the_surgeon/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
    >
      <span style={{ color: "#FFD54F" }}>View Profile</span>
    </a>
  </div>

  {/* Post Footer */}
  <div className="p-3">
    <a
      href="https://www.instagram.com/reel/DPI88L7Ck_3/?igsh=MTdyMDhxZG1vODc2cg=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
    >
      View more on Instagram
    </a>

    <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
      <img src="/like.svg" alt="Like" className="w-6 h-6 cursor-pointer" />
      <img src="/comment.svg" alt="Comment" className="w-6 h-6 cursor-pointer" />
      <img src="/send.svg" alt="Send" className="w-6 h-6 cursor-pointer" />
      <img
        src="/save.svg"
        alt="Save"
        className="w-6 h-6 cursor-pointer ml-auto"
      />
    </div>

    <p className="text-gray-700 text-sm font-medium">34 likes</p>
    <p className="text-gray-600 text-xs">Add a comment...</p>
  </div>
</div>
        </div>
      </div>

      <div className="w-full mb-8 h-[0.8px] rounded-lg bg-[#0085DC]"></div>

      {/*Resurces */}
      <div className="bg-[#F8F9FE] py-12 px-4 text-center mt-14">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 mt-5">
          RESOURCES
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <div>
            <img
              src="/resource1.png"
              alt="Delayed Management of Chemoport Complication"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-black mb-1">
              Delayed Management of Chemoport Complication
            </h3>
            <p className="text-gray-900 mt-4 font-bold">
              Indian Journal of Surgical Oncology, September 20
            </p>
          </div>

          <div>
            <img
              src="/resource2.png"
              alt="Can Intraoperative Pelvic Peritoneal Disease Predict Nodal Metastasis in Advanced Ovarian Cancer and Guide Systematic Nodal Dissection?"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-black mb-1">
              Can Intraoperative Pelvic Peritoneal Disease Predict Nodal
              Metastasis in Advanced Ovarian Cancer and Guide Systematic Nodal
              Dissection?
            </h3>
            <p className="text-gray-900 mt-4 font-bold">
              Indian Journal of Surgical Oncology, February 2019
            </p>
          </div>

          <div>
            <img
              src="/resource3.png"
              alt="Aberrant Renal Vessels"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-black mb-1">
              Aberrant Renal Vessels
            </h3>
            <p className="text-gray-900 mt-4 font-bold">
              Annals of Case Reports and Images, 2019
            </p>
          </div>
        </div>
      </div>

      {/*Social work */}
      <div className="bg-white py-12 px-4 text-center">
        <h2 className="text-4xl font-bold text-[#004979] mb-10">SOCIAL WORK</h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <img
              src="/social1.png"
              alt="Free Surgical Camp At Sehat NGO, Kurla West"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-black">
              Free Surgical Camp At Sehat NGO, Kurla West
            </h3>
          </div>

          <div>
            <img
              src="/social2.png"
              alt="Health Camp At Criticare Asia Hospital"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-black">
              Health Camp At Criticare Asia Hospital
            </h3>
          </div>
        </div>
      </div>

      {/* Awareness*/}

      <div className="bg-white py-10 px-4">
        {/* Heading and line */}
        <div className="w-full max-w-6xl mx-auto mb-4 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004979] text-center mb-2">
            AWARENESS
          </h2>
          <hr className="border-t-2 border-[#004979] w-full mt-9" />
        </div>

        {/* Subtitle */}
        <div className="w-full max-w-6xl mx-auto mb-8 px-2">
          <p className="text-[#004979] font-medium text-base sm:text-lg md:text-xl mt-8 ml-2 text-center">
            Breast cancer awareness lectures at various locations across Mumbai
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <img
            src="/aware1.png"
            alt="Awareness 1"
            className="rounded-lg object-cover w-full h-72"
          />
          <img
            src="/aware2.png"
            alt="Awareness 2"
            className="rounded-lg object-cover w-full h-72"
          />
          <img
            src="/aware3.png"
            alt="Awareness 3"
            className="rounded-lg object-cover w-full h-72"
          />
          <img
            src="/aware4.png"
            alt="Awareness 4"
            className="rounded-lg object-cover w-full h-72"
          />
          <img
            src="/aware5.png"
            alt="Awareness 5"
            className="rounded-lg object-cover w-full h-72"
          />
          <img
            src="/aware6.png"
            alt="Awareness 6"
            className="rounded-lg object-cover w-full h-72"
          />
        </div>
      </div>

      <div className="relative bg-[#F8F9FE] pt-16 pb-16 px-4 md:px-20 overflow-hidden">
        {/* Half Circle Background */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-[2100px] h-[2200px] bg-sky-100 rounded-full z-0"></div>

        {/* Heading */}
        <h2 className="relative z-10 text-xl md:text-3xl font-semibold text-blue-900 mb-7 text-center leading-relaxed">
          Watch these videos to get more information about
          <br /> Dr. Shazia Waghoo.
        </h2>

        {/* Video Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Video */}
          <div className="w-full aspect-video shadow-lg rounded-md overflow-hidden">
            <video className="w-full h-full object-cover" controls loop>
              <source src="/vedio1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Center Square Video */}
          <div className="w-full aspect-square shadow-lg rounded-md overflow-hidden">
            <video className="w-full h-full object-cover" controls loop>
              <source src="/vedio2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Video (YouTube) */}
          <div className="w-full aspect-video shadow-lg rounded-md overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nEp0H0pcKFE"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Watch Videos Section */}
      {/* <div className="mb-12">
        <h3
          className="text-xl md:text-2xl font-bold text-blue-600 text-center mb-6"
          style={{ fontFamily: "Roboto, sans-serif", color: "#004979" }}
        >
          Watch these videos to get more information about Dr. Shazia Waghoo.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Video 1 */}
          {/* <div className="relative rounded-lg overflow-hidden aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/nEp0H0pcKFE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div> */}

          {/* Video 2
    { <div className="relative rounded-lg overflow-hidden aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/nEp0H0pcKFE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div> } */}

          {/* Video 3
    { <div className="relative rounded-lg overflow-hidden aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/nEp0H0pcKFE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div> } */}

          {/* Video 4 */}
          {/* { <div className="relative rounded-lg overflow-hidden aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/nEp0H0pcKFE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div> } */}
        {/* </div>
      </div> */}

      {/* Footer */}
      <footer className="bg-gray-100 py-4 border-t border-gray-300">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Dr. Shazia Waghoo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
