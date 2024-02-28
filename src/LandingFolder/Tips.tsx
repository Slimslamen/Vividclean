import { Card } from "flowbite-react";
import Sponge from '../assets/Sponge.jpg'
import Vaccum from '../assets/Vaccum.jpg'
import CleanDesktop from '../assets/CleanDesktop.jpg'

export default function Tips(): JSX.Element {
  return (
    <div className="TipsDiv flex flex-col justify-center items-center font-DM">
        <h2 className="text-3xl md:text-4xl font-DM">Tips och Inspiration</h2>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 justify-center items-center my-10">
      <Card
        className=" size-4/6 md:size-[400px] rounded-none cursor-pointer"
        imgAlt="A sponge"
        imgSrc={Sponge}
      >
        <div className="p-2 space-y-2">
          <h3 className="text-3xl tracking-tight text-gray-900 dark:text-white mt-[-20px]">
          Städning
          </h3>
          <h4 className="text-xl">Rengör din ugn snabbt och enkelt</h4>
          <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, velit.
          </p>
        </div>
      </Card>
      <Card
        className="size-4/6 md:size-[400px] rounded-none"
        imgAlt="A vaccum"
        imgSrc={Vaccum}
      >
        <div className="space-y-2">
          <h3 className="text-3xl tracking-tight text-gray-900 dark:text-white">
          Städning
          </h3>
          <h4 className="text-xl">Oväntade gäster? Så snabbfixar du hemmet</h4>
          <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto modi fugit mollitia ipsum. Minima.
          </p>
        </div>
      </Card>
      <Card
        className="size-4/6 md:size-[400px] rounded-none"
        imgAlt="Cleaning a desktop"
        imgSrc={CleanDesktop}
      >
        <div className="space-y-2">
          <h3 className="text-3xl tracking-tight text-gray-900 dark:text-white">
            Städning
          </h3>
          <h4 className="text-xl">5 fördelar med regelbunden hemstädning</h4>
          <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, architecto fugiat eligendi neque porro pariatur repellat laborum dolor voluptas esse, fugit molestias corporis molestiae in, ut nostrum quis nam? Aperiam.
          </p>
        </div>
      </Card>
      </div>
    </div>
  );
}
