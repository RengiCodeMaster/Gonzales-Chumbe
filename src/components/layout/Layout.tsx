import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
    return (
        <div className="min-h-screen font-sans selection:bg-brand-primary selection:text-white relative">
            <Navbar />

            {/* GLOBAL BACKGROUND TEXTURE */}
            <div
                className="fixed inset-0 bg-repeat opacity-40 mix-blend-multiply pointer-events-none z-0"
                style={{ backgroundImage: "url('/images/team-bg-texture.png')", backgroundSize: '600px' }}
            ></div>

            <main className="relative z-10 flex-grow">
                <Outlet />
            </main>

            <Footer />

            {/* Floating Action Buttons Container */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
                {/* WhatsApp Button (Bottom) - Explicit z-index and shadow */}
                <a
                    href="https://wa.me/51954857599?text=Hola,%20deseo%20realizar%20una%20consulta%20legal."
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:scale-105 z-50"
                    aria-label="WhatsApp"
                >
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.298.347-.497.115-.198.058-.372-.029-.548-.087-.174-.792-1.908-1.085-2.613-.29-.705-.584-.609-.806-.62-.204-.011-.437-.014-.669-.014-.233 0-.61.087-.929.434-.319.347-1.216 1.19-1.216 2.903 0 1.714 1.247 3.371 1.421 3.606.173.235 2.454 3.75 5.945 5.257 2.33 1.006 2.805.806 3.305.757.5-.049 1.603-.655 1.829-1.288.225-.633.225-1.176.158-1.288-.068-.112-.249-.179-.547-.328zM12 21.602c-1.765 0-3.428-.475-4.881-1.29l-.35-.197-3.633.953.969-3.541-.228-.363A9.563 9.563 0 0 1 3.513 12c0-5.239 4.263-9.49 9.49-9.49 5.228 0 9.49 4.262 9.49 9.49 0 5.228-4.262 9.489-9.492 9.602z M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.109 1.517 5.852L.039 24l6.324-1.658A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
