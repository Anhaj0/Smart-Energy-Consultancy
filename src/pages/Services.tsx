import { Search, Wrench, FileCheck, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="bg-white">
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Technical Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Engineering-focused energy solutions for industrial and commercial facilities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-teal-600 pl-4 md:pl-8 mb-12 md:mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <Search className="h-12 w-12 text-teal-600 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Energy Audits</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Comprehensive facility assessments following ASHRAE and CEB methodologies.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Scope of Work</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Electrical load surveys and power quality analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>HVAC system performance evaluation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Lighting system assessment and upgrade analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Compressed air system leak detection and optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Motor and drive efficiency analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Building envelope thermal performance</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Deliverables</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Energy consumption breakdown by system</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Prioritized list of energy conservation measures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Financial analysis with simple payback periods</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Implementation roadmap with phasing options</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Technical specifications for recommended equipment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold mb-2">Typical Outcomes:</p>
              <p className="text-gray-600">
                Facilities implementing audit recommendations achieve 15-30% reduction in energy costs.
                Payback periods typically range from 6 months to 3 years depending on measures implemented.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-teal-600 pl-4 md:pl-8 mb-12 md:mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <Wrench className="h-12 w-12 text-teal-600 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Efficiency Consulting</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Ongoing technical support for operational optimization and equipment upgrades.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Services Offered</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Energy management system design and implementation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Process optimization for manufacturing facilities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Equipment selection and specification support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Renewable energy integration feasibility studies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Building automation and controls optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Staff training on energy-efficient operations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Technical Approach</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Baseline measurement and verification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Performance modeling and simulation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Cost-benefit analysis for multiple scenarios</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Vendor-neutral equipment recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Post-implementation verification</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold mb-2">Typical Outcomes:</p>
              <p className="text-gray-600">
                Clients achieve sustained efficiency improvements through systematic monitoring and optimization.
                Reduced energy intensity per unit of production, improved equipment reliability, and lower maintenance costs.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-teal-600 pl-4 md:pl-8">
            <div className="flex items-start space-x-4 mb-6">
              <FileCheck className="h-12 w-12 text-teal-600 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Compliance & Advisory</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Regulatory support and documentation for energy reporting requirements.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Compliance Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>CEB energy reporting and documentation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Environmental impact assessments for energy projects</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>ISO 50001 energy management system preparation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Green building certification support (LEED, EDGE)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Carbon footprint calculation and reporting</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Advisory Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Energy policy development for organizations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Strategic energy planning and budgeting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Technology evaluation and selection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Utility rate analysis and negotiation support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Expert witness and technical testimony</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold mb-2">Typical Outcomes:</p>
              <p className="text-gray-600">
                Organizations maintain regulatory readiness, avoid penalties, and position themselves for certifications.
                Clear documentation supports audits, tenders, and stakeholder reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific requirements and receive a proposal.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2 transition-colors"
          >
            <span>Request an Assessment</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
