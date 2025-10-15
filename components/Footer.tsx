
import React from 'react';
import YoutubeIcon from './icons/YoutubeIcon';
import TiktokIcon from './icons/TiktokIcon';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1c1f48] text-slate-400 border-t border-white/10">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Logo className="h-10 w-auto" />
            </div>
            <p>Potenciando los negocios online del futuro con automatización y diseño de vanguardia.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#F8F8F9] mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-[#00f0b5] transition-colors">Características</a></li>
              <li><a href="#how-it-works" className="hover:text-[#00f0b5] transition-colors">Proceso</a></li>
              <li><a href="#automation" className="hover:text-[#00f0b5] transition-colors">Automatización</a></li>
              <li><a href="#pricing" className="hover:text-[#00f0b5] transition-colors">Planes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#F8F8F9] mb-4">Síguenos</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://youtube.com/example" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-[#00f0b5] transition-all duration-300 hover:scale-110"><YoutubeIcon /></a>
                <a href="https://tiktok.com/@example" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-[#00f0b5] transition-all duration-300 hover:scale-110"><TiktokIcon /></a>
                <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-[#00f0b5] transition-all duration-300 hover:scale-110"><InstagramIcon /></a>
                <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-[#00f0b5] transition-all duration-300 hover:scale-110"><FacebookIcon /></a>
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