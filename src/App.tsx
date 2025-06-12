import React from 'react';
import { Phone, Mail, MapPin, Linkedin, GraduationCap, Briefcase, Award, Users, Clock, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-4xl font-bold mb-2">Zhiqi Ryan Huang</h1>
              <p className="text-xl text-blue-100 font-medium">Mathematics & Science Tutor</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-blue-100">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">1725 London Street, Vancouver, BC</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">604-446-4706</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">ryanhuang4706@gmail.com</span>
              </div>
              {/* Make the LinkedIn line a real link */}
              <a
                href="https://www.linkedin.com/in/ryan-huang-9b5045318/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-100 hover:underline"
              >
                <Linkedin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </header>
        {/* ...rest of your component... */}
      </div>
    </div>
  );
}


        <div className="px-8 py-8">
          {/* Summary */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-blue-700 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Professional Summary</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Dedicated and patient Math and Science tutor with over 1 year of experience delivering personalized instruction to students across academic levels. Committed to fostering curiosity, building confidence, and guiding students toward academic success through customized learning plans and thoughtful support.
            </p>
          </section>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Experience */}
              <section>
                <div className="flex items-center mb-6">
                  <Briefcase className="w-6 h-6 text-blue-700 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Professional Experience</h2>
                </div>

                <div className="space-y-8">
                  {/* Private Tutor */}
                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Private Math & Science Tutor</h3>
                        <p className="text-teal-600 font-medium">Freelance • Vancouver, BC</p>
                      </div>
                      <span className="text-gray-600 font-medium mt-2 sm:mt-0">April 2024 – Present</span>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Delivered 1-on-1 tutoring for middle and high school students in Mathematics and Science, including AP and IB coursework
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Assessed students' understanding and developed tailored learning plans based on individual goals and gaps
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Tracked academic progress and adapted instructional strategies for ongoing improvement
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Fostered a supportive learning environment through encouragement, clear explanations, and regular feedback
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Maintained detailed session records, including performance notes and parent updates
                      </li>
                    </ul>
                  </div>

                  {/* Kumon Instructor */}
                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-teal-600">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Math and English Instructor</h3>
                        <p className="text-teal-600 font-medium">Kumon Education Centre • Burnaby, BC</p>
                      </div>
                      <span className="text-gray-600 font-medium mt-2 sm:mt-0">November 2021 – March 2024</span>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Guided students through foundational and advanced concepts in math and English
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Reinforced self-paced learning, accuracy, and time management
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Supported students ranging from early learners to high school level
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Education */}
              <section>
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-6 h-6 text-blue-700 mr-3" />
                  <h2 className="text-xl font-bold text-gray-800">Education</h2>
                </div>

                <div className="space-y-6">
                  {/* Bachelor's Degree */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">Bachelor of Science – Mathematics</h3>
                    <p className="text-blue-700 font-medium text-sm mb-1">University of British Columbia</p>
                    <p className="text-gray-600 text-sm">Vancouver, BC • Ongoing</p>
                  </div>

                  {/* Science One */}
                  <div className="bg-teal-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">Science One Program</h3>
                    <p className="text-teal-700 font-medium text-sm mb-1">University of British Columbia</p>
                    <p className="text-gray-600 text-sm">Alumni 2024-2025</p>
                  </div>

                  {/* IB Diploma */}
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">IB Diploma Programme</h3>
                        <p className="text-green-700 font-medium text-sm mb-1">New Westminster Secondary School</p>
                        <p className="text-gray-600 text-sm">Graduate 2020-2024</p>
                      </div>
                      <div className="flex items-center bg-green-100 px-2 py-1 rounded">
                        <Award className="w-4 h-4 text-green-700 mr-1" />
                        <span className="text-green-700 font-bold text-sm">40/42</span>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-700"><span className="font-medium">Mathematics HL:</span> 7</p>
                      <p className="text-gray-700"><span className="font-medium">Physics HL:</span> 7</p>
                      <p className="text-gray-700"><span className="font-medium">Chemistry HL:</span> 6</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section>
                <div className="flex items-center mb-6">
                  <BookOpen className="w-6 h-6 text-blue-700 mr-3" />
                  <h2 className="text-xl font-bold text-gray-800">Core Skills</h2>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-800 font-medium text-sm">Personalized Instruction & Assessment</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-800 font-medium text-sm">IB and AP Teaching Experience</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-800 font-medium text-sm">Progress Tracking & Constructive Feedback</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-800 font-medium text-sm">Bilingual: English & Mandarin</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-800 font-medium text-sm">Effective Communication & Patience</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
