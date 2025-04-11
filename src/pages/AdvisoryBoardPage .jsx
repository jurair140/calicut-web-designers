import React from 'react';
import NavBar from '../components/NavBar';
import photoHeader from '../assets/photo-1.jpg';

const AdvisoryBoardPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />

      {/* Banner */}
      <div className="relative h-64 md:h-full w-full overflow-hidden">
        <img
          src={photoHeader}
          alt="Advisory Board Banner"
          className="w-full md:h-[500px] opacity-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">
            Advisory Board
          </h1>
        </div>
      </div>

      {/* Honorary Consultant */}
      <section className="px-6 py-16 md:px-16 lg:px-32 text-gray-100">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-12">
                Our Honorary Consultant
            </h2>

            <div className=" mx-auto bg-white/5 rounded-2xl p-6 md:p-10 border border-yellow-400/20 shadow-lg text-center flex gap-6">
                <div className="flex flex-col items-center gap-4">
                {/* Consultant Image */}
                <img
                    src="https://lumea.in/belly6/assets/images/blog/blog-grid/pic1.jpg"
                    alt="Dr. Praveen Kumar T. K."
                    className="w-40 h-52 object-cover rounded-xl border-4 border-yellow-400 shadow-md"
                />

                {/* Name & Designation */}
                <div>
                    <h3 className="text-2xl font-semibold text-yellow-300">Dr. PRAVEEN KUMAR T. K.</h3>
                    <p className="text-sm text-gray-300 italic mt-1">
                    Assistant Professor, Department of Physical Education<br />
                    Government College, Kerala
                    </p>
                </div>
                </div>

                {/* Academic Qualifications */}
                <div className="mt-6 text-left text-sm leading-relaxed text-gray-300">
                <h4 className="text-lg font-semibold text-yellow-200 mb-2">Academic Qualifications:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Ph.D. in Physical Education and Health, University of Kerala (2006)</li>
                    <li>M.P.Ed from LNCPE (SAI), Trivandrum, Kerala</li>
                    <li>Diploma in Sports Coaching – Gymnastics, NIS Patiala</li>
                    <li>UGC Junior Research Fellowship (JRF) & Lectureship</li>
                    <li>Joint Secretary, Kerala State Gymnastics Association</li>
                    <li>Former Secretary, Kozhikode District Gymnastics Association</li>
                    <li>Official Judge – Gymnastics Federation of India</li>
                    <li>1st Rank in Diploma – Gymnastics, NIS Patiala</li>
                </ul>
                </div>
            </div>
        </section>

      {/* Board Members */}
      <section className="px-6 py-16 md:px-16 lg:px-32">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">Board Members</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
          {[
            "PROF. (DR) T. VIJAYAKUMAR – M.Sc, Ph.D, FRSC (London), Emeritus Professor AIMS",
            "DR S. A. SELVAN – MBBS, MS (Anatomy), Govt Medical College, Calicut",
            "DR T.K. JAYARAJAN – MBBS, MS, FICS",
            "T. U. VIJAYASEKHARAN – IAS (Retd), Former Secretary, Govt. of India",
            "C. M. PRADIP KUMAR – Superintendent of Police (Vigilance, Calicut)",
            "A. J. BABU – Bureau Chief, Malayala Manorama, Calicut",
            "V.K. RAJEEV MENON – Deputy Superintendent of Police, Calicut City",
            "C. M. DIPAK – NIS Kolkata, Coach at Universal Soccer School",
            "JOHNS MATHEW – International Lifestyle Consultant, Greece",
            "DR BEENA BAHULEYAN – MD, DGO, Assistant Professor, Calicut Medical College",
            "T. K. RAJ MOHAN – Superintendent of Police (Intelligence, Calicut)",
            "A. J. BABU – Deputy Superintendent of Police, Calicut City",
            "R. MADHU SHANKER – Press Club President, Calicut",
            "DR. T.K. PRAVEEN KUMAR – Ph.D (Health & Fitness)",
            "K. P. ASHRAF – Former Tamil Nadu State Football Team Captain, Chennai",
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white/5 p-4 rounded-xl border border-yellow-400/10 hover:shadow-yellow-500/10 transition-shadow"
            >
              <p className="text-sm">{member}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdvisoryBoardPage;
