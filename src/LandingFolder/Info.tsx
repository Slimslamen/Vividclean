import sofa from "../assets/sofa.jpg";
import woman from "../assets/womenKitchen.jpg";
import bathRoom from "../assets/bathRoom.jpg";

export default function Info(): JSX.Element {
  return (
    <div className="flex flex-col my-40 w-5/6 mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img src={sofa} alt="livingroom" className="w-full md:w-1/2 h-1/4" />
        <div className="p-10 space-y-5 w-5/6">
          <h3 className="text-center text-4xl md:text-5xl font-DM md:w-96 mx-auto">
            Mer än bara service.
          </h3>
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Tryggt</h4>
            <p className="font-DM">
              Du kan känna dig trygg med både vår personal och kvaliteten på
              våra tjänster. Vårt team av noggrant utvalda och utbildade
              medarbetare har några av branschens bästa villkor och är lika
              engagerade som de är skickliga.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Flexibelt</h4>
            <p className="font-DM">
              Vi formar våra tjänster efter dig. Med tillgång till hela vårt
              breda tjänsteutbud formar vi varje detalj efter dina behov. Du kan
              känna dig säker på att resultatet alltid blir precis som du vill.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Enkelt</h4>
            <p className="font-DM">
              Det är enkelt att vara kund hos oss. Våra innovativa tjänster,
              tekniska lösningar och dedikation till tillgänglighet gör att du
              kan räkna med ett friktionsfritt och smidigt samarbete.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className="flex flex-col space-y-2 items-center p-10 w-5/6">
          <h3 className="text-center text-4xl md:text-5xl font-DM mb-10">
            I vår värld är det detaljerna som gör skillnaden.
          </h3>
          <p className="font-DM">
            Från Gävle i norr till Malmö i söder levererar vi tjänster till
            hemmet av absolut högsta kvalitet. Genom vår löpande hemstädning,
            eller våra engångstjänster som till exempel fönsterputs,
            storstädning eller flyttstädning ger vi dig tid till annat. För oss
            räcker det inte att möta dina förväntningar. Vi vill överträffa dem.
          </p>
        </div>
        <img src={woman} alt="woman in kitchen" className="w-full md:w-1/2 h-1/4" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img src={bathRoom} alt="bathroom" className="w-full md:w-1/2 h-[40em]" />
        <div className="flex flex-col p-10 space-y-2 justify-center w-5/6 md:w-1/2">
          <div className="space-y-5 mb-5 flex justify-center items-center flex-col">
            <h3 className="text-center text-4xl md:text-5xl font-DM">
              Allt du behöver på ett ställe.
            </h3>
            <p className="font-DM">
              För dig som har hemstädning har vi samlat allt du behöver under
              ett och samma tak i vår app.
            </p>
          </div>
          <ul className="list-disc font-DM">
            <li>Se dina städtillfällen</li>
            <li>Av- eller omboka din städtillfälle</li>
            <li>Hantera din städbeskrivning</li>
            <li>Håll koll på dina fakturor</li>
            <li>Lämna ett omdöme</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
