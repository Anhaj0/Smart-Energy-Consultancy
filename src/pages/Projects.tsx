import { Building2, Factory, TrendingDown } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Textile Manufacturing Facility - Katunayake',
      sector: 'Manufacturing',
      icon: Factory,
      challenge: 'High electricity costs (Rs. 8.5M/month) with aging equipment and unmonitored loads. No baseline data for energy consumption patterns.',
      methodology: [
        'Seven-day electrical load survey using data loggers',
        'Power quality analysis identifying harmonic distortion',
        'Thermal imaging of electrical panels and motors',
        'Compressed air system leak detection and flow measurement',
        'HVAC performance testing and load calculations'
      ],
      outcomes: [
        'Identified 890 kW of demand reduction opportunities',
        'Recommended VFD installation on 12 large motors',
        'Compressed air system improvements saving 145 kW',
        'LED lighting retrofit for 18,000 sq ft production floor',
        'Projected annual savings: Rs. 18.2M (22% reduction)',
        'Implementation payback: 2.1 years'
      ]
    },
    {
      title: 'Commercial Office Complex - Colombo',
      sector: 'Commercial',
      icon: Building2,
      challenge: 'HVAC system consuming 65% of total building energy. Tenant complaints about temperature control and high common area charges.',
      methodology: [
        'Chiller plant efficiency testing and load profiling',
        'Air handling unit performance verification',
        'Building automation system audit and optimization',
        'Occupancy pattern analysis for different zones',
        'Cooling load modeling and equipment sizing review'
      ],
      outcomes: [
        'Chiller optimization reducing energy intensity by 28%',
        'Revised control sequences for improved comfort',
        'Fresh air intake optimization saving 85 kW',
        'Condensed implementation into occupied hours',
        'Annual savings: Rs. 6.4M on electricity costs',
        'Improved tenant satisfaction scores'
      ]
    },
    {
      title: 'Food Processing Plant - Kurunegala',
      sector: 'Industrial',
      icon: Factory,
      challenge: 'High-temperature processing requiring significant thermal and electrical energy. Limited visibility into energy consumption by process line.',
      methodology: [
        'Sub-metering installation for individual production lines',
        'Steam system efficiency evaluation and trap survey',
        'Refrigeration system performance assessment',
        'Process heat recovery opportunity analysis',
        'Baseline establishment for energy per unit production'
      ],
      outcomes: [
        'Steam system efficiency improved from 68% to 84%',
        'Heat recovery reducing boiler load by 15%',
        'Refrigeration system optimization saving 65 kW',
        'Energy monitoring system enabling process control',
        'Annual savings: Rs. 12.8M (18% reduction)',
        'Established KPIs for ongoing energy management'
      ]
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Representative examples of energy audit methodology and outcomes. Client names withheld for confidentiality.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
                  <div className="bg-slate-800 text-white p-6">
                    <div className="flex items-start space-x-4">
                      <IconComponent className="h-10 w-10 text-teal-400 flex-shrink-0" />
                      <div>
                        <div className="inline-block bg-teal-600 text-white text-sm px-3 py-1 rounded mb-2">
                          {project.sector}
                        </div>
                        <h2 className="text-2xl font-bold">{project.title}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center space-x-2">
                        <span className="bg-gray-200 text-slate-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                        <span>Challenge</span>
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-10">{project.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center space-x-2">
                        <span className="bg-gray-200 text-slate-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                        <span>Methodology</span>
                      </h3>
                      <ul className="space-y-2 pl-10">
                        {project.methodology.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2 text-gray-700">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center space-x-2">
                        <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                          <TrendingDown className="h-4 w-4" />
                        </span>
                        <span>Outcomes</span>
                      </h3>
                      <ul className="space-y-2 pl-10">
                        {project.outcomes.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2 text-gray-700">
                            <span className="text-teal-600 mt-1">•</span>
                            <span className={i >= project.outcomes.length - 2 ? 'font-semibold' : ''}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 text-white p-10 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Results-Driven Approach</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Every project follows rigorous measurement and verification protocols. Savings calculations are conservative
              and based on actual operating conditions, not theoretical maximums.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-2">15-30%</div>
                <div className="text-gray-300">Typical Cost Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-2">1-3 yrs</div>
                <div className="text-gray-300">Average Payback Period</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-400 mb-2">100%</div>
                <div className="text-gray-300">Measurement-Based</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
