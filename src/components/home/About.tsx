import React from "react";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* SECTION 1 */}
      <section
        className="relative bg-[#4a90b5] text-white py-32 px-12 md:px-24"
        style={{
          clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)",
          zIndex: 5,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Aktiivinen lapsi</h2>
          <p className="text-lg leading-relaxed opacity-90">
            Montessoripedagogiikassa lapsi nähdään tiedonjanoisena oppijana, joka tutkii aktiivisesti ympäristöään. Havainnoimalla lapsia kasvattaja saa tärkeää tietoa kunkin lapsen kehitystasosta ja siitä, millaista ohjausta ja oppimismateriaalia hän tarvitsee. Kasvattaja kunnioittaa lapsen pyrkimystä ohjata itse itseään ja valita opettelemiaan asioita ja taitoja.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        className="relative bg-red-800 text-gray-800 py-32 px-12 md:px-24"
        style={{
          /* (0% 0%) -> Top Left stays top
             (100% 15%) -> Top Right moves down
             (0% 85%) -> Bottom Left moves up
          */
          clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)",
          marginTop: "-100px", // Increased overlap to hide gaps
          zIndex: 10,
          paddingTop: "150px", // Extra padding to keep text clear of the slant
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-[#e67e22] mb-6">
              Montessoripedagogiikka
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Montessoripedagogiikka on aatteellisesti sitoutumaton
              kasvatusmenetelmä, joka perustuu italialaisen pedagogin ja
              lääkärin Maria Montessorin luomaan kasvatusajatteluun. Tämä osio
              kallistuu vastakkaiseen suuntaan luoden dynaamisen polun silmälle.
            </p>
          </div>

          {/* Montessori material image container */}
          <div className="flex-1 w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner border-4 border-white">
            <div className="w-full h-full flex items-center justify-center text-gray-400 italic">
              [Montessori Materials Photo]
            </div>
          </div>
        </div>
      </section>
      <section 
      className="relative bg-[#f39c12] text-white py-32 px-12"
      style={{
        /* POINTS:
          (0 0)       -> Top Left
          (50% 10%)   -> Top Middle (creates a dip)
          (100% 0)    -> Top Right
          (100% 90%)  -> Bottom Right
          (50% 100%)  -> Bottom Middle (creates a point)
          (0 90%)     -> Bottom Left
        */
        clipPath: "polygon(0 0, 50% 10%, 100% 0, 100% 90%, 50% 100%, 0 90%)",
        marginTop: "-60px",
        zIndex: 15
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Miksi valita Montessori?</h2>
        <h3 className="text-xl italic mb-8 opacity-90 text-white/80">Why choose Montessori?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Itsenäisyys</h4>
            <p className="text-sm">Lapsi oppii tekemään itse ja luottamaan kykyihinsä.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Yksilöllisyys</h4>
            <p className="text-sm">Jokainen lapsi etenee omaan tahtiinsa.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Keskittyminen</h4>
            <p className="text-sm">Rauhallinen ympäristö tukee syvää oppimista.</p>
          </div>
        </div>
      </div>
    </section>
      <section className="relative bg-[#E67E22] text-white py-32 px-12 overflow-hidden">
      {/* 🌊 The SVG Wave Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px] fill-[#f8f9fa]" // Matches the section color above
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,114.34,92.83,168,76.65,214,62.83,264,67.1,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 mt-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Yhteystiedot / Contact</h2>
        <p className="text-xl opacity-90 mb-8">
          Tule tutustumaan meidän lämpimään ja virikkeelliseen ympäristöömme.
        </p>
        
        <button className="bg-white text-[#E67E22] px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl">
          Varaa vierailu →
        </button>
      </div>
    </section>
    </div>
  );
};

export default About;