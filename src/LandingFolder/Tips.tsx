import { Card } from "flowbite-react";
import Sponge from "../assets/Sponge.jpg";
import Vaccum from "../assets/Vaccum.jpg";
import livingRoom from "../assets/livingRoom.jpg";

export default function Tips(): JSX.Element {
  return (
    <div className="TipsDiv flex flex-col justify-center items-center font-DM my-40">
      <h2 className="text-4xl md:text-4xl font-DM">Tips och Inspiration</h2>
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 justify-center items-center my-10">
        <Card
          className=" md:size-[380px] rounded-none cursor-pointer"
          imgAlt="A sponge"
          imgSrc={Sponge}
        >
          <div className="space-y-2 mt-4">
            <h3 className="text-xl font-serif font-semibold tracking-tight text-gray-900 dark:text-white mt-[-20px]">
              Miljövänliga städtips för hemmet
            </h3>
            <h4 className="text-xl ">Naturliga produkter för hemmet</h4>
            <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
              Vid hemstädning kan du använda enkla, naturliga ingredienser som
              ättika, bikarbonat och citron för att skapa egna
              rengöringslösningar. Dessa miljövänliga alternativ är inte bara
              effektiva utan minimerar också kemikalieavfallet och belastningen
              på miljön. Upptäck nya sätt att göra ditt hem rent och grönt
              samtidigt!
            </p>
          </div>
        </Card>
        <Card
          className="size-4/6 md:size-[380px] rounded-none"
          imgAlt="A vaccum"
          imgSrc={Vaccum}
        >
          <div className="space-y-2">
            <h3 className="text-xl font-serif font-semibold tracking-tight text-gray-900 dark:text-white">
              Städevenemang
            </h3>
            <h4 className="text-xl">Engagera dig och ditt lokalsamhälle </h4>
            <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
              Vivid Clean kan stötta och delta i städaktiviteter i samhället,
              där vi tillsammans kan rengöra utomhusområden och parker. Det är
              ett utmärkt sätt att främja medvetenheten om hållbarhet och
              gemensamt ansvar för vår planet.
            </p>
          </div>
        </Card>
        <Card
          className="size-4/6 md:size-[380px] rounded-none"
          imgAlt="Cleaning a desktop"
          imgSrc={livingRoom}
        >
          <div className="space-y-2">
            <h3 className="text-xl font-serif font-semibold tracking-tight text-gray-900 dark:text-white">
              Hållbarhet i alla rum
            </h3>
            <h4 className="text-xl">
              Små förändringar, stor skillnad
            </h4>
            <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-4 ">
              Få tips om hur man kan minska plastanvändning, byta till
              återvinningsbara rengöringsprodukter och skapa en mer hållbar
              vardag. Varje rum kan bli en plats för positiv förändring och
              bidra till att minska vår påverkan på miljön.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
