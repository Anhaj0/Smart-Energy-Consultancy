import { Award, BookOpen, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Our Firm</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Independent energy consultancy serving Sri Lankan industries since establishment.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Smart Energy Consultancy Lanka Pvt Ltd provides technical energy services to industrial
                  and commercial facilities throughout Sri Lanka. Our work focuses on measurable efficiency
                  improvements and cost reduction through engineering analysis.
                </p>
                <p>
                  We maintain independence from equipment vendors and contractors, ensuring unbiased
                  recommendations based solely on technical merit and economic return. Our assessments
                  follow established methodologies from ASHRAE, ISO 50001, and CEB guidelines.
                </p>
                <p>
                  The firm operates with chartered engineers and energy professionals holding relevant
                  certifications. We work across multiple sectors including manufacturing, hospitality,
                  healthcare, education, and commercial real estate.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Approach</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Every engagement begins with data collection and measurement. We establish baselines,
                  identify opportunities through calculation and testing, and quantify potential savings
                  with documented assumptions.
                </p>
                <p>
                  Recommendations include implementation costs, expected savings, and payback periods.
                  We prioritize no-cost and low-cost measures first, then evaluate capital improvements
                  based on financial return.
                </p>
                <p>
                  Post-implementation, we verify results through measurement and comparison to baseline
                  conditions. This ensures accountability and helps clients demonstrate value to
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Technical Capabilities</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Award className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Qualifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Chartered Engineers (IESL)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Certified Energy Managers (CEM)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>LEED Accredited Professionals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>ISO 50001 Lead Auditors</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Building Performance Analysts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <BookOpen className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Technical Expertise</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Electrical power systems and distribution</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>HVAC design and optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Industrial process systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Building automation and controls</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Renewable energy integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Users className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Industry Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Manufacturing and industrial facilities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Commercial office buildings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Healthcare facilities and hospitals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Hotels and hospitality</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Educational institutions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Target className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Tools & Methods</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Energy modeling software (DOE-2, eQUEST)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Power quality analyzers and data loggers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Thermal imaging and infrared cameras</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Ultrasonic leak detection equipment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>Building automation system integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Professional Standards</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-slate-800 font-semibold mb-2">Independence</div>
              <p className="text-gray-600 text-sm">
                No financial ties to equipment vendors or contractors. Recommendations based solely on technical merit.
              </p>
            </div>
            <div className="text-center">
              <div className="text-slate-800 font-semibold mb-2">Confidentiality</div>
              <p className="text-gray-600 text-sm">
                All facility data, operational information, and findings remain confidential. Non-disclosure agreements standard.
              </p>
            </div>
            <div className="text-center">
              <div className="text-slate-800 font-semibold mb-2">Accountability</div>
              <p className="text-gray-600 text-sm">
                Savings estimates documented with calculations. Post-implementation verification confirms results.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Memberships & Affiliations</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Institution of Engineers, Sri Lanka (IESL)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Association of Energy Engineers (AEE)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE)</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Sri Lanka Sustainable Energy Authority</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Green Building Council of Sri Lanka</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>International Organization for Standardization (ISO)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
