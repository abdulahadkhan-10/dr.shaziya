import React from 'react';
import { Phone, Mail, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4">
          <h1
            className="text-xl md:text-3xl text-center font-bold pt-2"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            Dr. Shazia Waghoo Portfolio
          </h1>
        </div>
      </header>

      {/* Yellow accent line */}
      <div className="w-full h-2.5" style={{ backgroundColor: '#FFC107' }}></div>

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
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                Dr. Shazia Waghoo
              <div className='w-[19rem] h-0.5 rounded-lg bg-[#FFD54F] mt-2'></div>
              </h2>
              
              <p
  className="text-blue-500 font-semibold text-xl mb-4 tracking-widest"
  style={{ fontFamily: 'Times New Roman, serif' }}
>
  MBBS, DNB GENERAL SURGERY,<p>  Diploma in Hernia Essentials<p>(by Asia Pacific Society,Endorsedb by Royal College of Surgeons,Edinburgh)</p>
</p>
</p>

              <h3
                className="text-lg font-bold mb-4"
                style={{ fontFamily: 'Inria Sans, sans-serif', color: '#004979' }}
              >
                A seasoned Laparoscopic, Hernia, and Breast Surgeon
              </h3>
              <p
                className="text-gray-700 text-base mb-6 leading-relaxed"
                style={{ fontFamily: 'Inria Sans, sans-serif' }}
              >
                Dr. Shazia Waghoo is a skilled Laparoscopic, Hernia, and Breast Surgeon based in Mumbai
                with over 10 years of experience. She is known for minimally invasive techniques and a
                strong patient-focused approach.
              </p>

              {/* Areas of Expertise */}
              <div className="mb-14 mt-10">
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  Areas Of Expertise :
                </h3>
                <div
                  className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-800 text-base"
                  style={{ fontFamily: 'Inria Sans, sans-serif' }}
                >
                  {[
                    'Hernia Surgeries',
                    'Laparoscopic Surgeries',
                    'Thyroid Surgeries',
                    'Gastrointestinal Surgeries',
                    'Colorectal Surgeries',
                    'Laser Surgeries',
                    'Breast Surgeries',
                    'Abdominal Wall Reconstruction',
                  ].map((item) => (
                    <div className="flex items-center" key={item}>
                      <span className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-blue-500 mr-2"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="bg-blue-500 font-bold py-3 mt-[-20] px-8 rounded-full hover:bg-blue-600 transition duration-300 text-sm"
                style={{ color: '#FFD54F', fontFamily: 'Times New Roman, serif' }}
              >
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
  {[
    { path: "heart.svg", number: '2,000+', label: 'Happy Patients' },
    { path: "middle.svg", number: '10 +', label: 'Years of Experience' },
    { path: "last.svg", number: '1,000+', label: 'Successful Surgeries' },
  ].map((stat) => (
    <div
      className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
      key={stat.label}
    >
      {/* SVG / Image */}
      <img src={stat.path} alt={stat.label} className="mx-auto mb-4 w-12 h-12" />

      <h3
        className="text-3xl font-bold text-gray-900"
        style={{ fontFamily: 'inter, serif' }}
      >
        {stat.number}
      </h3>
      <p className="text-gray-600 text-base">{stat.label}</p>
    </div>
  ))}
</div>


        {/* Hospital Affiliations and Contact */}
        <div className='w-full mb-8 h-[0.8px] rounded-lg bg-[#0085DC]'></div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Hospital Affiliations */}
          <div className="bg-white">
            <h3
              className="text-4xl font-bold text-blue-600 mb-2"
              style={{ fontFamily: 'Jaldi, sans-serif', color: '#004979' }}
            >
              Hospital Affiliations
            </h3>
            {/* Yellow line */}
              <div className='w-[20rem] mb-2 h-0.5 rounded-lg bg-[#FFD54F]'></div>
            {/* Subtext */}
            <p
              className="text-xl mb-4"
              style={{ fontFamily: 'Jaldi, sans-serif', color: '#004979' }}
            >
              Affiliated with 7+ reputed Hospitals and 
              <p>
              Clinics in Mumbai
              </p>
            </p>

            <ul className="space-y-3 text-xl text-gray-700">
              {[
                'Criticare Asia, Kurla West',
                'VLSR, The Clinic',
                'The Diagnostic Hub',
                'SRV CHEMBUR',
                'Chembur clinic (Dr Sheth Clinic)',
                'Precision super speciality',
                'NM Aesthetics',
              ].map((hospital) => (
                <li
                  className="flex items-center font-semibold"
                  style={{ fontFamily: 'Poppins' }}
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
              style={{ fontFamily: 'Times New Roman, serif' }}
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
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  Phone
                </h4>
              </div>
              <p className="text-gray-900 text-base ml-12">9833584847 | 9892933421</p>
            </div>
            {/* Email */}
            <div>
              <div className="flex items-center mb-2">
                <div className="p-2.5 rounded-full mr-3 bg-yellow-400">
                  <Mail className="w-5 h-5 text-gray-900" />
                </div>
                <h4
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  Email
                </h4>
              </div>
              <p className="text-gray-900 text-base ml-12">drshaziawaghoo@gmail.com</p>
            </div>
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
      style={{ fontFamily: 'Inter, sans-serif',color:'#004979' }}
    >
      <img src="/social-work.svg" alt="Social Work" className="w-6 h-6 mr-2" />
      <span>Social Work</span>
    </h3>

    <ul className="space-y-3 text-base font-semibold text-gray-700">
      {[
        'Free Surgical Camp At Sehat NGO, Kurla West',
        'Health Camp At Criticare Asia Hospital',
      ].map((work) => (
        <li
          className="flex items-start"
          key={work}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-blue-500 mr-3 mt-1.5 flex-shrink-0"></span>
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
      style={{ fontFamily: 'Inter, sans-serif',color:'#004979' }}
    >
      <img src="/member.svg" alt="Membership" className="w-6 h-6 mr-2" />
      <span>Membership</span>
    </h3>

    <ul className="space-y-3 text-base font-semibold text-gray-700">
      {[
        'Member of Association of Surgeons of India and Maharashtra Surgical Society',
        'Member of Asia-Pacific Hernia Society, & Hernia Society of India',
        'Member of Minimal Access Surgeons of India',
      ].map((member) => (
        <li
          className="flex items-start"
          key={member}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-blue-500 mr-3 mt-1.5 flex-shrink-0"></span>
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
            style={{ fontFamily: 'Inter, sans-serif',color:'#004979' }}
          >
                          <div className='w-full mb-5 h-[1px] rounded-lg bg-[#0085DC]'></div>

            Why you should Consult Dr. Shazia Waghoo
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h4
                className="font-bold text-gray-900 mb-3 text-base"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Experienced Doctor in Minimally-Invasive Surgery
              </h4>
              <p
                className="text-gray-700 text-base leading-relaxed"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Our brand is well-regarded in the medical community for its accurate
                diagnosis and precise surgical care, specializing in advanced laser
                and laparoscopic treatments.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h4
                className="font-bold text-gray-900 mb-3 text-base"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Approachable & Available to Consult at Multiple Locations
              </h4>
              <p
                className="text-gray-700 text-base leading-relaxed"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                We offer advanced surgical care across multiple locations with
                follow-up consultations. Our approach ensures optimal treatment plans
                and full post-op support for a fast recovery.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h4
                className="font-bold text-gray-900 mb-3 text-base"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Cashless Facilities & Rehabilitation Services Available
              </h4>
              <p
                className="text-gray-700 text-base leading-relaxed"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                We support you throughout your surgical journey — from pre-surgery
                onboarding and insurance to scheduling and post-op care. Our goal is
                to ensure a smooth, stress-free experience and complete recovery.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className='w-full mb-8 h-[0.8px] rounded-lg bg-[#0085DC]'></div>

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
          <span style={{ color: '#FFD54F' }}>View Profile</span>
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
          <img src="/like.svg" alt="Like" className="w-6 h-6 cursor-pointer" />
          <img src="/comment.svg" alt="Comment" className="w-6 h-6 cursor-pointer" />
          <img src="/send.svg" alt="Send" className="w-6 h-6 cursor-pointer" />
          <img src="/save.svg" alt="Save" className="w-6 h-6 cursor-pointer ml-auto" />
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
          <span style={{ color: '#FFD54F' }}>View Profile</span>
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
          <img src="/like.svg" alt="Like" className="w-6 h-6 cursor-pointer" />
          <img src="/comment.svg" alt="Comment" className="w-6 h-6 cursor-pointer" />
          <img src="/send.svg" alt="Send" className="w-6 h-6 cursor-pointer" />
          <img src="/save.svg" alt="Save" className="w-6 h-6 cursor-pointer ml-auto" />
        </div>
        <p className="text-gray-700 text-sm font-medium">30 likes</p>
        <p className="text-gray-600 text-xs">Add a comment...</p>
      </div>
    </div>

    {/* Post 3 */}
    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
      {/* Post Image */}
      <div className="relative">
        <img
          src="/post_3.webp"
          alt="Instagram Post 3"
          className="w-full h-64 object-cover"
        />
        <a
          href="https://www.instagram.com/she_the_surgeon/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
        >
          <span style={{ color: '#FFD54F' }}>View Profile</span>
        </a>
      </div>

      {/* Post Footer */}
      <div className="p-3">
        <a
          href="https://www.instagram.com/p/DLkDaJiKLFZ/?igsh=eG1lczB5a2h1czcz"
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
          <img src="/save.svg" alt="Save" className="w-6 h-6 cursor-pointer ml-auto" />
        </div>
        <p className="text-gray-700 text-sm font-medium">120 likes</p>
        <p className="text-gray-600 text-xs">Add a comment...</p>
      </div>
    </div>
  </div>
</div>

      <div className='w-full mb-8 h-[0.8px] rounded-lg bg-[#0085DC]'></div>

{/* Watch Videos Section */}
{/* Watch Videos Section */}
<div className="mb-12">
  <h3
    className="text-xl md:text-2xl font-bold text-blue-600 text-center mb-6"
    style={{ fontFamily: 'Roboto, sans-serif',color:'#004979' }}
  >
    Watch these videos to get more information about Dr. Shazia Waghoo.
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Video 1 */}
    <div className="relative rounded-lg overflow-hidden aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/nEp0H0pcKFE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    {/* Video 2 */}
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

    {/* Video 3 */}
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

    {/* Video 4 */}
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
  </div>
</div>


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
