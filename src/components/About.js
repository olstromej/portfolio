import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Biography</h3>
            <p className="desc">
              {`I am a challenge-driven systems/software engineer and veteran of the United States Coast Guard. I have always been able to maintain a positive attitude at work even while making life-saving split-second decisions and will provide my team with a unique perspective from these experiences. My dedication to my work, the constant drive to be successful, and the willingness to always provide support to any team I am on are reasons I will be an indispensable member of any team!`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Edward Olstrom</th>
                  </tr>
                  <tr>
                    <th>Birthday</th>
                    <th>21 January 1993</th>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <th>30 years</th>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <th>Durham, N.C.</th>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+19105087320">(+1) 910 508 7320</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:eddieolstrom1@gmail.com">
                        eddieolstrom1@gmail.com
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <th>Zoom</th>
                    <th>
                      <a href="zoom:eddieolstrom1@gmail.com">eddieolstrom1@gmail.com</a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a href="img/cv.jpg" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experience
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Fidelity Investments</h5>
                          <span>( June 2023 — Today )</span>
                        </div>
                        <h3>Associate Systems Engineer</h3>
                        <p>
                         Associate Systems Engineer for Fidelity Investments.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>General Assembly</h5>
                          <span>( November 2022 — Februry 2023 )</span>
                        </div>
                        <h3>Student Software Engineer</h3>
                        <p>
                        Successfully completed three month, 420-hour full-time and full stack program conducted in-person providing experience with the latest front-end and backend programming languages, tools, and methodologies including: HTML, CSS, SASS, Javascript, jQuery, PostgreSQL, MongoDB, Python, Django, Express, NodeJS, and ReactS..{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>United States Coast Guard</h5>
                          <span>( 2015 — 2022 )</span>
                        </div>
                        <h3>Maritime Operations Manager</h3>
                        <p>
                        • Coached and mentored 150+ active-duty members on military operations, training requirements, data entry, which resulted in 50 percent increase in team safety and intentional culture-building.
                        • Managed vessel reporting (data-entry) for 1000+ hours of operations, maintenance, and crew readiness, resulting in 100% OKR evaluation.
                        • Led and oversaw $750K in maintenance projects on-site to ensure optimized vessel operations, ensuring safety for crew of 100+ service members. 
                        • Respond to search and rescue cases and provide emergency trauma care to wounded civilians. 
                        • Create training plans that would maintain qualifications to 60 people on a bi-annual basis. 
                        • Respond to non-compliant vessels and ensure compliance to all federal laws and regulations. 
                        • Developed, maintained, and facilitated 4 tech onboarding programs, resulting in 30+ certified members.
                        • Coordinated +500 hours of scheduled maintenance and inspections, resulting in 98% federal leadership rate.
                        • Organized and led emergency response drills to efficiently increase response time for search and rescue response, which increased response times by 75%.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Saint Leo University</h5>
                          <span>( 2023 - Today )</span>
                        </div>
                        <h3>Masters Degree</h3>
                        <p>
                          Studying a Masters Degree in Business Administration with a Concentration in Cybesecurity Management{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>American Public University System</h5>
                          <span>( 2021 — 2022 )</span>
                        </div>
                        <h3>Bachelor Degree</h3>
                        <p>
                          Graduated with a Bachelors Degree in Information Technology, where I achieved a 3.96 GPA, maintained Deans List recognition, and graduated with honors.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Saint Leo University</h5>
                          <span>( 2017 — 2018 )</span>
                        </div>
                        <h3>Bachelor Degree</h3>
                        <p>
                          Graduated with a Bachelors Degree in Criminal Justice with a Concentration in Homeland Security, where I achieved a 3.75 GPA.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={92}>
                    <div className="item_in">
                      <h3 className="progress_title">Javascript</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        85%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "92%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">Python &amp; Django</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        85%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">React</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        75%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={85}>
                    <div className="item_in">
                      <h3 className="progress_title">SQL</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "15%" }}
                      >
                        90%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "85%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* /Progress Bar */}
                {/* Description */}
                <div className="resumo_fn_desc">
                  <p>
                  Full List of Skills:
                  Full-Stack Development · JavaScript · React.js · Back-End Web Development · SQL · MongoDB · Mongoose ODM · jQuery · Django · NoSQL · Postman API · Relational Databases · REST APIs · Node.js · Express.js · GitHub · Git · PostgreSQL · Front-End Development · Python (Programming Language) · Microsoft Excel · Object-Oriented Programming (OOP) · Cascading Style Sheets (CSS) · HTML · Data Entry · Program Management · Microsoft Word · Troubleshooting · Teamwork · Critical Thinking · Time Management · Web Development
                  </p>
                </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
