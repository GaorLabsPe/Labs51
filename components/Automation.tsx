import React from 'react';
import BoltIcon from './icons/BoltIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import EmailIcon from './icons/EmailIcon';
import SheetIcon from './icons/SheetIcon';
import InvoiceIcon from './icons/InvoiceIcon';
import UsersIcon from './icons/UsersIcon';
import CogIcon from './icons/CogIcon';

const Automation: React.FC = () => {
    const automations = [
        { icon: <WhatsappIcon />, text: 'Notificaciones de pedidos por WhatsApp' },
        { icon: <WhatsappIcon />, text: 'Seguimiento de carritos abandonados' },
        { icon: <CogIcon />, text: 'Gestión de productos con variantes' },
        { icon: <InvoiceIcon />, text: 'Generación de reportes de ventas' },
        { icon: <UsersIcon />, text: 'Dashboard y CRM para gestión de clientes' },
        { icon: <BoltIcon />, text: 'Y muchas más integraciones...' },
    ]
    const automationImageSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhdXRvLWdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4YTJiZTIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMGYwYjUiLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9ImF1dG8tc2hhZG93IiB4PSItMzAlIiB5PSItMzAlIiB3aWR0aD0iMTYwJSIgaGVpZ2h0PSIxNjAlIj48ZmVEcm9wU2hhZG93IGR4PSIwIiBkeT0iOCIgc3RkRGV2aWF0aW9uPSIxNSIgZmxvb2QtY29sb3I9IiMwMDAwMDAiIGZsb29kLW9wYWNpdHk9IjAuMiIvPjwvZmlsdGVyPjwvZGVmcz48ZyBvcGFjaXR5PSIwLjYiPjxwYXRoIGQ9Ik0gMjUwIDI1MCBRIDEwMCAxMDAgODAgODAiIHN0cm9rZT0idXJsKCNhdXRvLWdyYWQpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNSAxMCIvPjxwYXRoIGQ9Ik0gMjUwIDI1MCBRIDQwMCAxMDAgNDIwIDgwIiBzdHJva2U9InVybCgjYXV0by1ncmFkKSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjUgMTAiLz48cGF0aCBkPSJNICAyNTAgMjUwIFEgMTAwIDQwMCA4MCA0MjAiIHN0cm9rZT0idXJsKCNhdXRvLWdyYWQpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNSAxMCIvPjxwYXRoIGQ9Ik0gMjUwIDI1MCBRIDQwMCA0MDAgNDIwIDQyMCIgc3Ryb2tlPSJ1cmwoI2F1dG8tZ3JhZCkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI1IDEwIi8+PC9nPjxnIGZpbHRlcj0idXJsKCNhdXRvLXNoYWRvdykiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCwgMjUwKSI+PHBhdGggZD0iTSAwIC00MCBBIDQwIDQwIDAgMCAxIDAgNDAgQSA0MCA0MCAwIDAgMSAwIC00MCBaIE0gMCAtMzAgTCA1IC0yNSBMIDUgLTE1IEwgMCAtMTAgTCAtNSAtMTUgTCAtNSAtMjUgWiBNIDAgMzAgTCA1IDI1IEwgNSAxNSBMIDAgMTAgTCAtNSAxNSBMIC01IDI1IFogTSAtMzAgMCBMIC0yNSA1IEwgLTE1IDUgTCAtMTAgMCBMIC0xNSAtNSBMIC0yNSAtNSBaIE0gMzAgMCBMIDI1IDUgTCAxNSA1IEwgMTAgMCBMIDE1IC01IEwgMjUgLTUgWiIgZmlsbD0iIzFjMWY0OCIgY2xhc3M9ImFuaW1hdGUtc3BpbiIgc3R5bGU9ImFuaW1hdGlvbi1kdXJhdGlvbjogMTBzOyB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7Ii8+PHBhdGggZD0iTSAwIC00MCBBIDQwIDQwIDAgMCAxIDAgNDAgQSA0MCA0MCAwIDAgMSAwIC00MCBNIDAgMCBBIDE1IDE1IDAgMCAxIDAgMCIgc3Ryb2tlPSJ1cmwoI2F1dG8tZ3JhZCkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCwgNTApIiBmaWx0ZXI9InVybCgjYXV0by1zaGFkb3cpIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIzMCIgZmlsbD0iIzFjMWY0OCIvPjxwYXRoIGQ9Ik0yMiAzOGwxLjMgLTMuOWE3IDcgMCAxIDEgMi40IDIuNGwtMy43IC43IiBzdHJva2U9IiM4YTJiZTIiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5MCwgNTApIiBmaWx0ZXI9InVybCgjYXV0by1zaGFkb3cpIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIzMCIgZmlsbD0iIzFjMWY0OCIvPjxwYXRoIGQ9Ik0yMiAyNCBMMzAgMzIgTDM4IDI0IiBzdHJva2U9IiMwMGYwYjUiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHJlY3QgeD0iMjIiIHk9IjI0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBzdHJva2U9IiMwMGYwYjUiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCwgMzkwKSIgZmlsdGVyPSJ1cmwoI2F1dG8tc2hhZG93KSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiMxYzFmNDgiLz48cGF0aCBkPSJNMjIgMzBoMTYgTTIyIDI0aDE2IE0yMiAzNmgxMCIgc3Ryb2tlPSIjOGEyYmUyIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTAsIDM5MCkiIGZpbHRlcj0idXJsKCNhdXRvLXNoYWRvdykiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIiBmaWxsPSIjMWMxZjQ4Ii8+PGNpcmNsZSBjeD0iMzAiIGN5PSIyNiIgcj0iNCIgc3Ryb2tlPSIjMDBmMGI1IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjIgMzh2LTJhNCA0IDAgMCAxIDQgLTRoOGE0IDQgMCAwIDEgNCA0djIiIHN0cm9rZT0iIzAwZjBiNSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9zdmc+";
  return (
    <section id="automation" className="py-24" data-animate-section>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:order-last">
            <img src={automationImageSrc} alt="Flujos de automatización para e-commerce usando la integración n8n" className="max-w-md w-full h-auto" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
               <span className="gradient-text">Automatización con n8n</span>
               <span className="block text-[#F8F8F9]">que trabaja para ti</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">Ahorra tiempo y optimiza tus procesos con flujos de trabajo personalizados. Gracias a nuestra experiencia en integración n8n, creamos automatizaciones que se ejecutan 24/7, permitiéndote enfocarte en crecer.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {automations.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-[#1c1f48] rounded-xl border border-transparent hover:border-[#00f0b5]/50 transition-colors duration-300">
                  <div className="flex-shrink-0 text-[#00f0b5] mr-4">
                    {item.icon}
                  </div>
                  <span className="text-[#F8F8F9] font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;