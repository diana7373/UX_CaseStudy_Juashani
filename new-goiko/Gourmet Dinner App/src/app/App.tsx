import imgLogo from '../imports/Landing/a989c9088a9b92c5e224205202d8c79f33d34c47.png';
import imgHero from '../imports/Landing/1620db19378180dd57c01750022c56887dd6cd3d.png';
import imgFood1 from '../imports/Landing/caea84ae638c0685467a255ed8817c7bd4f7fb50.png';
import imgFood2 from '../imports/Landing/511e6668ef00f09bf40760217c05ed03bc88ae2f.png';
import imgFood3 from '../imports/Landing/d18c2ab4d37bfa9500f3a2210520c0567e470f9e.png';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <header className="bg-[#572364] border-b border-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-5">
            <div className="text-[50px]">≡</div>
            <img src={imgLogo} alt="Cyber-Gourmet Logo" className="h-[142px] w-[144px] rounded object-cover" />
            <div className="flex items-center gap-2">
              <div className="bg-black h-[41px] w-[467px] rounded"></div>
              <div className="bg-[#d1a0de] h-[41px] w-[46px] rounded flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </svg>
              </div>
            </div>
          </div>

          <nav className="grid grid-cols-6 border-t border-black">
            {['CARTA', 'PEDIDO', 'PERSONALIZACIÓN', 'CONTACTO', 'SOBRE NOSOTROS', 'RESERVAR'].map((item) => (
              <button
                key={item}
                className="border-x border-black bg-[#572364] py-6 px-4 font-['Press_Start_2P'] text-[20px] hover:bg-[#6b2d7a] transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="relative">
            <img
              src={imgHero}
              alt="Cyber Gourmet Food"
              className="mx-auto max-w-[1381px] w-full h-auto opacity-50 rounded"
            />
          </div>

          <h1 className="font-['Press_Start_2P'] text-[50px] leading-[1.5] mt-12 mb-8 max-w-[1333px] mx-auto">
            Diseñada por ti,<br />
            perfeccionada por el fuego.
          </h1>

          <div className="border-t border-b border-white py-8 my-12">
            <p className="font-['Average_Sans'] text-[40px]">Cyber-Gourmet</p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="border-l-4 border-[#CD2E2E] pl-8 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#CD2E2E] rotate-45"></div>
                <p className="font-['Press_Start_2P'] text-[24px]">Top Players</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#CD2E2E] rotate-45"></div>
                <p className="font-['Press_Start_2P'] text-[24px]">Daily Quests</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#CD2E2E] rotate-45"></div>
                <p className="font-['Press_Start_2P'] text-[24px]">Build Mode</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="font-['Press_Start_2P'] text-[28px] mb-4">Level: Artisan.</p>
              <p className="font-['Press_Start_2P'] text-[28px] mb-4">The Lobby.</p>
              <p className="font-['Press_Start_2P'] text-[28px]">Full Loadout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div className="relative">
              <img src={imgFood1} alt="Cyber burger" className="w-full h-[295px] object-cover rounded shadow-lg" />
              <div className="bg-[#46b96e] border border-black h-[136px] -mt-8 relative z-10"></div>
            </div>
            <div className="relative">
              <img src={imgFood2} alt="Neon drinks" className="w-full h-[293px] object-cover rounded shadow-lg" />
              <div className="bg-[#46b96e] border border-black h-[136px] -mt-8 relative z-10"></div>
            </div>
            <div className="relative">
              <img src={imgFood3} alt="Cyber food" className="w-full h-[293px] object-cover rounded shadow-lg" />
              <div className="bg-[#46b96e] border border-black h-[136px] -mt-8 relative z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#572364] py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div className="space-y-6">
              <button className="bg-[#572364] px-12 py-2 font-['Average_Sans'] text-[30px] border border-white hover:bg-[#6b2d7a] transition-colors">
                Compartir
              </button>
              <button className="bg-[#572364] px-12 py-2 font-['Average_Sans'] text-[30px] border border-white hover:bg-[#6b2d7a] transition-colors block">
                Enlace
              </button>
              <button className="bg-[#572364] px-12 py-2 font-['Average_Sans'] text-[30px] border border-white hover:bg-[#6b2d7a] transition-colors block">
                Ubicación
              </button>
            </div>

            <div className="text-center">
              <img src={imgLogo} alt="Logo" className="h-[155px] w-[156px] mx-auto mb-8 rounded object-cover" />
            </div>

            <div className="space-y-6 text-right">
              <button className="bg-[#572364] px-12 py-2 font-['Average_Sans'] text-[30px] border border-white hover:bg-[#6b2d7a] transition-colors">
                Teléfono
              </button>
              <button className="bg-[#572364] px-12 py-2 font-['Average_Sans'] text-[30px] border border-white hover:bg-[#6b2d7a] transition-colors block ml-auto">
                Email
              </button>
              <button className="bg-[#572364] px-12 py-2 font-['Average_Sans'] text-[30px] border border-white hover:bg-[#6b2d7a] transition-colors block ml-auto">
                Comentarios
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="font-['Average_Sans'] text-[30px]">
              © 2026 Cyber-Gourmet S.L. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}