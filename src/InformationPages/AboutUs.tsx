export default function AboutUs(): JSX.Element {
  const backgroundImage1 = "src/assets/AboutUs.jpg";
  const backgroundImage2 = "src/assets/AboutUs2.jpg";
  const backgroundImage3 = "src/assets/AboutUs3.jpg";
  const backgroundOverlayColor = " rgba(233, 216, 218, 0.6)";

  return (
    <main>
      <article
        className=" h-screen relative bg-center bg-cover flex items-start"
        style={{
          backgroundImage: `url(${backgroundImage1})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${backgroundOverlayColor}, ${backgroundOverlayColor})`,
          }}
        ></div>

        <h2 className="text-black font-medium z-10 font-DM text-7xl text-center whitespace-nowrap transform -rotate-90 origin-bottom-right">
          Vår historia
        </h2>

        <p className="flex text-xl text-left justify-center m-32 z-10">
          Ledande, engagerade och dedikerade - vår historia är själva
          drivkraften bakom vår framtid. Hos Vivid Clean tror vi på att skapa
          skillnad genom att fokusera på detaljer, och vår passion för
          hållbarhet genomsyrar allt vi gör. Från Åre i norr till södra Malmö
          strävar vi efter att leverera städtjänster av absolut högsta kvalitet
          med minimal påverkan på miljön.
        </p>
      </article>
      <article
        className=" h-screen relative bg-center bg-cover flex items-start"
        style={{
          backgroundImage: `url(${backgroundImage2})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${backgroundOverlayColor}, ${backgroundOverlayColor})`,
          }}
        ></div>
        <p className="flex text-xl text-left justify-center m-32 z-10">
          I vår värld är det detaljerna som gör skillnaden, och för oss innebär
          det att sätta hållbarhet i första rummet. Genom våra tjänster,
          inklusive löpande hemstädning och specialiserade tjänster som
          fönsterputs, storstädning och flyttstädning, strävar vi efter att inte
          bara skapa rena hem utan även en renare planet. Vi använder
          miljövänliga produkter och metoder för att säkerställa att varje
          städning är ett grönt steg mot en mer hållbar framtid.
        </p>
        <h2 className="text-black font-medium z-10 font-DM text-7xl text-center whitespace-nowrap transform rotate-90 origin-bottom-left">
          Hållbarhet
        </h2>
      </article>
      <article
        className=" h-screen relative bg-center bg-cover flex items-start"
        style={{
          backgroundImage: `url(${backgroundImage3})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${backgroundOverlayColor}, ${backgroundOverlayColor})`,
          }}
        ></div>

        <h2 className="text-black font-medium z-10 font-DM text-7xl text-center whitespace-nowrap transform -rotate-90 origin-bottom-right">
          Trygghet
        </h2>

        <p className="flex text-xl text-left justify-center m-32 z-10">
          Vi förstår vikten av trygghet - både för våra kunder och planeten.
          Därför kan du känna dig säker med både vår personal och kvaliteten på
          våra tjänster. Vårt team består av noggrant utvalda och utbildade
          medarbetare som delar vårt engagemang för hållbarhet. Genom att
          erbjuda branschens bästa arbetsvillkor och en grön inställning strävar
          vi efter att skapa en trygg och hållbar städmiljö.
        </p>
      </article>
    </main>
  );
}
