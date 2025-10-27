import React from 'react';
import { useTranslation } from '../i18n';

const Header: React.FC = () => {
    const { t } = useTranslation();
    const cta = t<{[key:string]: string}>('header.cta');

    return (
        <header className="relative flex items-center justify-center text-center text-white overflow-hidden pb-16 border-b-2 border-white/10">
            {/* Animated background shapes */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary rounded-full filter blur-2xl animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary rounded-full filter blur-2xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10">
                <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-lg animate-float">
                    <img src="https://i.ibb.co/3s7xT6b/profile.jpg" alt={t('header.name')} className="w-full h-full object-cover" />
                </div>
                <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">{t('header.name')}</h1>
                <p className="text-lg md:text-2xl font-light opacity-90 mb-2">{t('header.tagline')}</p>
                <p className="max-w-3xl mx-auto text-sm md:text-base opacity-80 mb-8">{t('header.subTagline')}</p>
                
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <a href="#contact" className="px-8 py-3 font-semibold rounded-full bg-secondary text-white shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300">
                        {cta.hire}
                    </a>
                    <a href="#workshops" className="px-8 py-3 font-semibold rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/30 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/50">
                        {cta.workshop}
                    </a>
                    <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/30 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/50">
                        {cta.resume}
                    </a>
                </div>
            </div>
            <style>{`
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }

                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                @keyframes float {
                    0% { 
                        transform: translateY(0px);
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
                    }
                    50% { 
                        transform: translateY(-10px);
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 
                    }
                    100% { 
                        transform: translateY(0px);
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;