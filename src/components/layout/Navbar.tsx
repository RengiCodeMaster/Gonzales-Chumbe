import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionId } from '../../types';
import { servicesData } from '../../data/services';

interface NavbarProps {
  onOpenService?: (serviceId: string) => void;
  onCloseService?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenService, onCloseService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check immediately on mount in case page is reloaded with scroll
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    if (onCloseService) {
      onCloseService();
    }

    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Instant scroll (behavior: 'auto') kept as requested
      window.scrollTo({
        top: offsetPosition,
        behavior: 'auto'
      });
    }
  };

  const handleServiceClick = (serviceId: string) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onOpenService) {
      onOpenService(serviceId);
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  return (
    <nav
      className={`fixed w-full z-50 h-14 md:h-16 lg:h-20 flex items-center ${isScrolled
        ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10 shadow-2xl' // Azul Profundo Difuminado
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12 flex justify-between items-center relative">
        {/* Logo */}
        <div className="cursor-pointer flex items-center gap-2 md:gap-3 relative z-50 shrink-0" onClick={() => scrollToSection(SectionId.HOME)}>
          {/* Icon */}
          <img
            src="/images/logo-icon.png"
            alt="Gonzales Chumbe"
            className={`h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300 ${isScrolled
              ? 'brightness-0 invert' // White icon when scrolled
              : 'brightness-0 invert' // White icon when transparent
              }`}
          />
          {/* Text */}
          <div className="flex flex-col">
            <h1 className="text-xs md:text-sm lg:text-sm uppercase tracking-wider font-bold leading-tight text-white">
              Gonzales Chumbe
            </h1>
            <span className={`text-[7px] md:text-[8px] lg:text-[9px] uppercase tracking-[0.2em] mt-0.5 transition-colors duration-300 ${isScrolled ? 'text-blue-200' : 'text-gray-300'
              }`}>
              Estudio Jurídico | Abogados Penalistas
            </span>
          </div>
        </div>

        {/* Desktop Nav - Changed hidden lg:flex to hidden md:flex */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-10">
          <button onClick={() => scrollToSection(SectionId.HOME)} className="nav-link">Inicio</button>
          <button onClick={() => scrollToSection(SectionId.ABOUT)} className="nav-link">Firma</button>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => scrollToSection(SectionId.SERVICES)}
              className={`nav-link flex items-center gap-1 ${dropdownOpen ? 'text-brand-primary' : ''}`}
            >
              Servicios <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu - REVERTED TO WHITE STYLE */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px] transition-all duration-300 transform origin-top ${dropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
            >
              <div className="bg-white rounded-sm shadow-2xl border-t-4 border-brand-primary p-6 grid grid-cols-2 gap-4">
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    onClick={(e) => { e.stopPropagation(); handleServiceClick(service.id); }}
                    className="flex items-start p-3 rounded hover:bg-gray-50 transition-colors text-left group"
                  >
                    <div className="mt-1 p-2 bg-brand-surfaceAlt rounded text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <service.icon size={18} />
                    </div>
                    <div className="ml-3">
                      <span className="block text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{service.title}</span>
                      <span className="block text-xs text-gray-500 mt-1 line-clamp-2">{service.subtitle}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={() => scrollToSection(SectionId.TEAM)} className="nav-link">Equipo</button>
          <button onClick={() => scrollToSection(SectionId.CONTACT)} className="nav-link">Contacto</button>
        </div>

        {/* CTA - Hidden on tablet/mobile, visible on large desktop */}
        <div className="hidden xl:flex items-center">
          <Button
            variant={isScrolled ? 'white' : 'white'}
            className={`px-8 py-3 text-xs font-bold tracking-widest ${isScrolled ? 'bg-white text-brand-primary hover:bg-blue-50' : ''}`}
            onClick={() => scrollToSection(SectionId.CONTACT)}
          >
            Consulta Inicial
          </Button>
        </div>

        {/* Mobile Toggle - Changed lg:hidden to md:hidden */}
        <button
          className="md:hidden text-white relative z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <style>{`
        .nav-link {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #e2e8f0; /* slate-200 */
            padding-bottom: 4px;
            border-bottom: 2px solid transparent;
            transition: all 0.3s;
            white-space: nowrap;
        }
        .nav-link:hover {
            color: white;
            border-bottom-color: white;
        }
      `}</style>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0f172a] flex flex-col pt-24 px-6 overflow-y-auto animate-fade-in-up h-screen">
          <div className="space-y-6 pb-20">
            <button onClick={() => scrollToSection(SectionId.HOME)} className="mobile-link block w-full text-left">Inicio</button>
            <button onClick={() => scrollToSection(SectionId.ABOUT)} className="mobile-link block w-full text-left">La Firma</button>

            <div className="border-l-2 border-white/10 pl-4 py-2 space-y-4">
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest block mb-4">Servicios</span>
              {servicesData.map(service => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className="block text-gray-400 text-base hover:text-white transition-colors text-left w-full py-1"
                >
                  {service.title}
                </button>
              ))}
            </div>

            <button onClick={() => scrollToSection(SectionId.TEAM)} className="mobile-link block w-full text-left">Equipo</button>
            <button onClick={() => scrollToSection(SectionId.CONTACT)} className="mobile-link block w-full text-left">Contacto</button>

            <div className="pt-8 pb-12">
              <Button variant="white" className="w-full justify-center py-4 text-brand-primary" onClick={() => scrollToSection(SectionId.CONTACT)}>
                Agendar Cita
              </Button>
            </div>
          </div>
        </div>
      )}
      <style>{`
          .mobile-link {
              font-family: 'Playfair Display', serif;
              font-style: italic;
              font-size: 1.75rem;
              color: white;
              transition: color 0.3s;
          }
          .mobile-link:hover {
              color: #93c5fd;
          }
      `}</style>
    </nav>
  );
};