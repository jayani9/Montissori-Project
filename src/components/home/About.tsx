import img1 from "./../../assets/about_images/img1.png";
import img2 from "./../../assets/about_images/img2.png";
import img3 from "./../../assets/about_images/img3.png";
import img4 from "./../../assets/about_images/img4.png";

const About = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* SECTION 1 */}
      <section className="relative bg-white text-white py-16 px-6 md:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed opacity-90 text-amber-700 ">
            Montessoripedagogiikka on aatteellisesti sitoutumaton kasvatusmenetelmä, joka perustuu italialaisen pedagogin ja lääkärin Maria Montessorin (1870-1952) luomaan kasvatusajatteluun. Montessorimenetelmää käytetään kouluissa ja päiväkodeissa ympäri maailmaa.
          </p>
          <p className="text-xl leading-relaxed opacity-90 text-amber-700 pt-4">
            Montessori pedagogy is an ideologically neutral educational method based on the educational philosophy created by the Italian educator and physician Maria Montessori (1870-1952). The Montessori method is used in schools and daycare centers around the world.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        className="relative bg-[#4a90b5] text-white py-24 md:py-32 px-6 md:px-24"
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)",
          zIndex: 10,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 md:flex-[2]">
            <h2 className="text-4xl lg:text-4xl font-bold mb-6 tracking-tight">
              Aktiivinen lapsi
            </h2>
            <p className="text-lg leading-relaxed opacity-95">
              Montessoripedagogiikassa lapsi nähdään tiedonjanoisena oppijana,
              joka tutkii aktiivisesti ympäristöään. Havainnoimalla lapsia
              kasvattaja saa tärkeää tietoa kunkin lapsen kehitystasosta ja
              siitä, millaista ohjausta ja oppimismateriaalia hän tarvitsee.
              Kasvattaja kunnioittaa lapsen pyrkimystä ohjata itse itseään ja
              valita opettelemiaan asioita ja taitoja.
            </p>
          </div>

          <div className="flex-1 w-full max-w-sm md:max-w-none">
            <div className="aspect-[4/5] w-full overflow-hidden transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full flex items-center justify-center">
                <img src={img2} alt="" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-white text-gray-700 py-20 md:py-40 px-6 md:px-24"
        style={{
          clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
          marginTop: "-60px",
          paddingTop: "120px",
          zIndex: 5,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[#4a90b5]">The Active Child</h2>
          <p className="text-lg leading-relaxed text-[#4a90b5]">
            In Montessori pedagogy, a child is seen as a curious learner who actively explores their environment. By observing children, educators gain valuable insights into each child's developmental stage and their needs for guidance and learning materials. Educators respect the child's desire to guide themselves and choose what they want to learn and master.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section
        className="relative bg-red-400 text-gray-800 py-24 md:py-32 px-6 md:px-24"
        style={{
          clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0 92%)",
          marginTop: "-80px",
          zIndex: 10,
          paddingTop: "130px",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src={img1}
            className="object-cover w-full max-w-xs md:w-[360px] h-auto transform md:rotate-2 hover:rotate-0 transition-transform duration-500 rounded-2xl"
            alt=""
          />
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-6">
              Herkkyyskaudet
            </h2>
            <p className="text-lg leading-relaxed text-white">
              Montessoripedagogiikassa huomioidaan varhaiskasvatusikäisten lasten erilaiset herkkyyskaudet. Aistien kehittämisen herkkyyskaudella lapsi jäsentää ympäristöään eri aistiensa avulla. Kielellisen kehityksen herkkyyskausi käsittää lukemaan oppimisen ja kirjoittamisen. Järjestyksen herkkyyskaudella järjestys ympäristössä ja päivärutiineissa on lapselle tärkeää. Liikkeen koordinaation herkkyyskaudella lapsi kokeilee mielellään ponnistelua vaativia tehtäviä. Sosiaalisen käyttäytymisen herkkyyskaudella lapsen mielenkiinto kohdistuu kodin, päiväkodin ja oman yhteisön käytäntöihin.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative bg-white text-gray-800 py-20 md:py-32 px-6 md:px-24"
        style={{
          clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0 92%)",
          marginTop: "-100px",
          zIndex: 9,
          paddingTop: "140px",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-red-400 mb-6">
            Sensitive Periods
          </h2>
          <p className="text-lg leading-relaxed text-red-400">
            Montessori pedagogy takes into account the various sensitive periods in the early childhood years. During the sensory sensitivity period, a child organizes their environment using their different senses. The sensitivity period for language development includes learning to read and write. During the sensitivity period for order, a child places importance on order in their environment and daily routines. In the sensitivity period for coordination of movement, a child willingly explores challenging tasks. In the sensitivity period for social behavior, a child's interest is directed towards the practices in their home, daycare, and community.
          </p>
        </div>
      </section>

      {/* SECTION 4 */}
      <section
        className="relative bg-[#f39c12] text-white py-24 md:py-32 px-6 md:px-24"
        style={{
          clipPath: "polygon(0 0, 50% 5%, 100% 0, 100% 95%, 50% 100%, 0 95%)",
          marginTop: "-60px",
          zIndex: 15,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-bold mb-6 tracking-tight leading-tight">
              Yksilöllistä oppimista tukeva välineistö
            </h2>
            <p className="text-lg leading-relaxed opacity-95">
              Montessoripäiväkodissa lapsen aktiivisuutta ja omatoimisuutta kunnioitetaan
              valmistellulla välineistöllä ja ympäristöllä. Välineistö ryhmitellään käytännön
              elämän töihin, aistimateriaaleihin, äidinkieleen, matematiikkaan ja kulttuuriin.
              Tehtävät etenevät yksinkertaisesta haastavampaan ja niiden avulla lapsi pystyy
              etenemään oman kehitystahtinsa ja kiinnostuksensa mukaisesti. Useimmat tehtävistä on
              suunniteltu niin, että lapsi huomaa itse virheensä ja saa siten mahdollisuuden keksiä
              ratkaisun itse.
            </p>
          </div>

          <div className="flex-1 w-full max-w-sm md:max-w-none">
            <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full flex items-center justify-center">
                <img src={img3} alt="" className="w-[85%] h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative text-gray-700 py-20 md:py-32 px-6 md:px-24 z-10"
        style={{
          clipPath: "polygon(0 0, 50% 5%, 100% 0, 100% 95%, 50% 100%, 0 95%)",
          marginTop: "-60px",
          paddingTop: "120px",
          zIndex: 14,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[#f39c12]">
            Individualized Learning Materials
          </h2>
          <p className="text-lg leading-relaxed text-[#f39c12]">
            In a Montessori daycare, a child's activity and independence are respected through prepared materials and an environment. The materials are categorized into practical life activities, sensory materials, language, mathematics, and culture. Tasks progress from simple to more challenging, allowing a child to advance at their own pace and based on their interests. Most tasks are designed so that the child can recognize their own errors and, thus, have the opportunity to find solutions independently.
          </p>
        </div>
      </section>

      {/* SECTION 5 */}
      <section
        className="relative bg-[#27ae60] text-white py-24 md:py-32 px-6 md:px-24"
        style={{
          clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0 92%)",
          marginTop: "-80px",
          zIndex: 20,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">
              Sosiaaliset taidot
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              Kokoonnumme päivittäin yhteiseen piirituokioon, jossa lorujen ja laulujen lomassa harjoittelemme vuorovaikutustilanteita. Montessoripedagogiikassa myös lasten keskinäiset vuorovaikutussuhteet ovat merkittävässä roolissa lapsen kehityksessä. Eri ikäiset lapset toimivat yhdessä ja päivän aikana keskustellaan, leikitään ja lauletaan yhdessä. Lasten keskinäistä kilpailua vältetään, toisen työskentelyä kunnioitetaan ja lapselle annetaan vastuuta ympäristöstään. Näin lapsi oppii arvostamaan itseään ja ottamaan muut huomioon.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <img src={img4} className="w-full max-w-sm h-auto transform md:rotate-2 hover:rotate-0 transition-transform duration-500 rounded-2xl" alt="" />
          </div>
        </div>
      </section>

      <section
        className="relative bg-[#f0fff4] text-gray-800 py-20 md:py-32 px-6 md:px-24"
        style={{
          clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0 100%)",
          marginTop: "-100px",
          paddingTop: "160px",
          zIndex: 15,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-green-800">
            Social Skills
          </h2>
          <p className="text-lg leading-relaxed text-green-800">
            We gather daily for a group time where we practice interaction through poems and songs. In Montessori pedagogy, children's interactions with each other also play a significant role in a child's development. Children of different ages work together, engage in discussions, play, and sing together throughout the day. Competition among children is avoided, another child's work is respected, and children are given responsibility for their environment. This way, children learn to value themselves and consider the needs of others.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;