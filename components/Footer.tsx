
import React from 'react';
import TwitterIcon from './icons/TwitterIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1c1f48] text-slate-400 border-t border-white/10">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#F8F8F9] mb-4">Labs51</h3>
            <p>Potenciando los negocios online del futuro con automatización y diseño de vanguardia.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#F8F8F9] mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-[#00f0b5] transition-colors">Características</a></li>
              <li><a href="#automation" className="hover:text-[#00f0b5] transition-colors">Automatización</a></li>
              <li><a href="#service" className="hover:text-[#00f0b5] transition-colors">Servicio</a></li>
              <li><a href="#growth" className="hover:text-[#00f0b5] transition-colors">Crecimiento</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#F8F8F9] mb-4">Síguenos</h4>
            <div className="flex space-x-4">
                <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-[#00f0b5] transition-all duration-300 hover:scale-110"><TwitterIcon /></a>
                <a href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-[#00f0b5] transition-all duration-300 hover:scale-110"><LinkedinIcon /></a>
                <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-[#00f0b5] transition-all duration-300 hover:scale-110"><GithubIcon /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Labs51 Technology. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;