import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { servicesData } from '../../data/services';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<any>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check immediately on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const handleServiceClick = (serviceId: string) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(`/servicios?open=${serviceId}`);
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

  // "Dark Content" logic is removed. We always use White text, but change background on scroll.
  const isDarkBg = isScrolled || mobileMenuOpen || location.pathname !== '/';

  return (
    <nav
      className={`fixed w-full z-50 h-20 transition-all duration-300 flex items-center ${isDarkBg
        ? 'bg-brand-darker/95 backdrop-blur-md border-b border-brand-primary/20 shadow-lg' // Slate 950 + Border
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="cursor-pointer flex items-center gap-3 relative z-50 shrink-0 group">
          {/* Icon */}
          <img
            src="/images/logo-icon.png"
            alt="Gonzales Chumbe"
            className="h-10 md:h-12 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
          />
          {/* Text */}
          <div className="flex flex-col">
            <h1 className="text-sm tracking-widest font-bold leading-none text-white uppercase transition-colors duration-300">
              Gonzales Chumbe
            </h1>
            <span className="text-[10px] tracking-[0.3em] mt-1 uppercase text-brand-accent group-hover:text-white transition-colors duration-300">
              Estudio Jurídico
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-xs font-bold tracking-[0.15em] uppercase text-white transition-colors py-2 relative group"
          >
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bf9b30] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/nosotros"
            className="text-xs font-bold tracking-[0.15em] uppercase text-white transition-colors py-2 relative group"
          >
            Firma
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bf9b30] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/servicios"
              className={`flex items-center gap-1 text-xs font-bold tracking-[0.15em] uppercase transition-colors py-2 relative group text-white`}
            >
              Servicios <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-[#bf9b30]' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#bf9b30] transition-all duration-300 ${dropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Dropdown Menu - Dark Premium & Visible */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-8 w-[640px] transition-all duration-300 transform origin-top ${dropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
            >
              <div className="bg-brand-darker rounded-xl shadow-2xl border border-white/10 p-2 grid grid-cols-2 overflow-hidden">
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    onClick={(e) => { e.stopPropagation(); handleServiceClick(service.id); }}
                    className="flex items-start p-4 rounded-lg hover:bg-brand-dark/50 transition-all text-left group gap-4 border border-transparent hover:border-[#bf9b30]/20"
                  >
                    <div className="mt-1 p-2 bg-brand-dark rounded-lg text-[#bf9b30] group-hover:bg-[#bf9b30] group-hover:text-brand-darker transition-colors duration-300 border border-white/5 group-hover:border-[#bf9b30]">
                      <service.icon size={20} />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{service.title}</span>
                      <span className="block text-xs text-brand-secondary mt-1 line-clamp-2 group-hover:text-gray-400">{service.subtitle}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/equipo"
            className="text-xs font-bold tracking-[0.15em] uppercase text-white transition-colors py-2 relative group"
          >
            Equipo
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bf9b30] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <div className="w-px h-6 mx-2 bg-white/20 transition-colors duration-300"></div>

          <Link to="/contacto">
            <Button variant="white" className="px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:scale-105 shadow-xl shadow-brand-accent/20 border-none transition-all duration-300">
              Agendar Cita
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 rounded-full transition-colors text-white hover:bg-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <style>{`
        /* Minimalist fallback just in case, but using Tailwind primarily */
        .mobile-link {
            font-family: 'Roboto', sans-serif;
            font-size: 1.75rem;
            color: white;
            transition: color 0.3s;
        }
        .mobile-link:hover {
            color: #bf9b30; /* Muted Gold */
        }
      `}</style>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-brand-darker flex flex-col pt-24 px-8 overflow-y-auto animate-fade-in-up h-screen border-t border-brand-primary/10">
          <div className="space-y-8 pb-20">
            <Link to="/" className="mobile-link block w-full text-left font-bold" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
            <Link to="/nosotros" className="mobile-link block w-full text-left font-bold" onClick={() => setMobileMenuOpen(false)}>La Firma</Link>

            {/* Collapsible Mobile Services */}
            <div className="border-b border-brand-secondary/20 pb-4">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full mobile-link text-left group font-bold"
              >
                <span>Servicios</span>
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#bf9b30]' : 'text-gray-400'}`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <div className="border-l-2 border-[#bf9b30] pl-6 space-y-4 ml-1">
                  {servicesData.map(service => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service.id)}
                      className="block text-gray-300 text-lg hover:text-[#bf9b30] transition-colors text-left w-full py-2 font-medium"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/equipo" className="mobile-link block w-full text-left font-bold" onClick={() => setMobileMenuOpen(false)}>Equipo</Link>
            <Link to="/contacto" className="mobile-link block w-full text-left font-bold" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>

            <div className="pt-8 pb-12">
              <Link to="/contacto">
                <Button variant="white" className="w-full justify-center py-4 shadow-xl shadow-[#bf9b30]/10" onClick={() => setMobileMenuOpen(false)}>
                  Agendar Cita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
