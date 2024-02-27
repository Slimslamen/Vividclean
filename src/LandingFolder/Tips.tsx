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
        className=" size-4/6 md:size-[400px] rounded-none"
        imgAlt="A sponge"
        imgSrc={Sponge}
      >
        <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white mt-[-20px]">
        Sponging
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, velit.
        </p>
      </Card>
      <Card
        className="size-4/6 md:size-[400px] rounded-none"
        imgAlt="A vaccum"
        imgSrc={Vaccum}
      >
        <h5 className="text-2xl  tracking-tight text-gray-900 dark:text-white">
         Vaccuming
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 ">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto modi fugit mollitia ipsum. Minima.
        </p>
      </Card>
      <Card
        className="size-4/6 md:size-[400px] rounded-none"
        imgAlt="Cleaning a desktop"
        imgSrc={CleanDesktop}
      >
        <h5 className="text-2xl  tracking-tight text-gray-900 dark:text-white">
          Cleaning
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, architecto fugiat eligendi neque porro pariatur repellat laborum dolor voluptas esse, fugit molestias corporis molestiae in, ut nostrum quis nam? Aperiam.
        </p>
      </Card>
      </div>
    </div>
  );
}
