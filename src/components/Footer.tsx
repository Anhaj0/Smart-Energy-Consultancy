import { Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="h-8 w-8 text-teal-400" />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-white leading-tight">Smart Energy Consultancy</span>
                <span className="text-xs text-gray-400 leading-tight">Lanka Pvt Ltd</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Independent energy consultancy providing technical audits and efficiency services
              to Sri Lankan industries.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">Energy Audits</span></li>
              <li><span className="text-gray-400">Efficiency Consulting</span></li>
              <li><span className="text-gray-400">Compliance & Advisory</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">+94 11 234 5678</li>
              <li className="text-gray-400">info@smartenergylk.com</li>
              <li className="text-gray-400">123 Galle Road, Colombo 03</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Smart Energy Consultancy Lanka Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
