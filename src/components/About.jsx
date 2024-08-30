import React from "react";

// This is About section ka heading hai
function About() {
  return (
    <div id="about"
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      style={{ marginTop: '10px' }}
    >
      {/*About */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-800 border-b-4 border-green-600 pb-3">
          About Me
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Hello, I'm Yash Srivastava, a passionate Web developer with a keen eye for the
          MERN Stack. With a background in IT, I strive to create impactful and
          visually stunning software solutions that leave a lasting impression.
        </p>

        {/* Ye Education & Training */}
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Education & Training
        </h2>
        <ul className="list-disc pl-8 mb-8 text-gray-700">
          {/*  details list item hai */}
          <li className="mb-2">B. Tech., Babu Banarsi Das Engineering College, Lucknow, UP (BBDEC), 2021-2025</li>
          <li className="mb-2">Intermediate, St. Xavier,s High School, Basti, UP, 2021</li>
          <li className="mb-2">High-School, RCC Public School, Basti, UP, 2019</li>
        </ul>

        {/* Ye Skills & Expertise section ka heading hai */}
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Skills & Expertise
        </h2>
        <ul className="list-disc pl-8 mb-8 text-gray-700">
          {/* Ye skill set list item hai */}
          <li className="mb-2">Proficient in ReactJS, MongoDB, HTML, CSS, JavaScript, Python, MySQL</li>
          <li className="mb-2">Experienced with basic NodeJS, web scraping using Python (BeautifulSoup)</li>
          <li className="mb-2">Strong grasp of web development and software design principles</li>
          <li className="mb-2">Excellent problem-solving skills</li>
          <li className="mb-2">Effective communicator and collaborator</li>
        </ul>

        {/* Ye Professional Experience i */}
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Professional Experience
        </h2>
        <ul className="list-disc pl-8 mb-8 text-gray-700">
          {/* Ye professional experience list item hai */}
          <li className="mb-4">
            Core Team Member, Google Developer Student Club.
            <br />
            <span className="text-gray-600">
              Contributed to the planning and execution of various developer-focused events and initiatives.
            </span>
          </li>
          <li className="mb-4">
            Lead, Photography Club
            <br />
            <span className="text-gray-600">
              Directed and organized photography events, managed club activities, and mentored new members.
            </span>
          </li>
          <li className="mb-4">
            Participant, Geeks-for-Geeks Hackathon, [2023]
            <br />
            <span className="text-gray-600">
              Developed a lawyer-client website interface using Python, React, HTML, CSS, Bootstrap, and jQuery.
            </span>
          </li>
        </ul>

        {/* Ye Achievements & Awards section ka heading hai */}
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Achievements & Awards
        </h2>
        <ul className="list-disc pl-8 mb-8 text-gray-700">
          {/* Ye achievement list item hai */}
          <li className="mb-2">Hackathon Participation, Geeks-for-Geeks, [2023]</li>
          <li className="mb-2">Core Team Member, Google Developer Student Club, [2023]</li>
        </ul>

        {/* Ye Mission Statement section ka heading hai */}
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Mission Statement
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          My mission is to leverage my skills and creativity to deliver
          innovative solutions in web development that exceed client expectations
          and contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
