import { TrendingDown, CheckCircle2, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Reduce Energy Costs Through Technical Analysis
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Independent energy audits and efficiency assessments for Sri Lankan industries.
              Identify waste, quantify savings, ensure compliance.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2 transition-colors"
            >
              <span>Request an Energy Assessment</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">What We Solve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Energy inefficiency costs Sri Lankan businesses millions annually. We provide data-driven solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <TrendingDown className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Cost Reduction</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed audits identify inefficiencies in electrical systems, HVAC, compressed air, and process equipment.
                Typical savings: 15-30% on energy bills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <CheckCircle2 className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Efficiency Improvement</h3>
              <p className="text-gray-600 leading-relaxed">
                Engineering assessments of equipment performance, load factors, and operational patterns.
                Recommendations backed by measurement and calculation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <CheckCircle2 className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Support for CEB guidelines, environmental standards, and energy reporting requirements.
                Documentation prepared for audits and certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 text-white p-10 rounded-lg">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We conduct systematic evaluations using industry-standard methodologies. Every recommendation
                includes estimated payback periods, implementation costs, and expected savings.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">On-site measurements and data collection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Technical analysis of systems and equipment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Detailed reports with actionable findings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Implementation support and follow-up verification</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('services')}
                className="border-2 border-teal-400 hover:bg-teal-400 hover:text-slate-800 text-teal-400 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
