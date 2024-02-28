import { useEffect, useState } from "react";

interface IReview{
  id: number;
  Content: string;
  name: string;
  city: string
}

const Reviews:IReview[] = [
  {
    id: 0,
    Content:
      "Alltid professionellt bemötande av alla på Hemfrid. Städresultatet är superbra.",
    name: "Sara",
    city: "Stockholm",
  },
  {
    id: 1,
    Content: "Super kvicka! De lämnade allt fläckfritt.",
    name: "John",
    city: "Malmö",
  },
  {
    id: 2,
    Content:
      "Kommer definitivt anlita VividClean igen! De var väldigt professionella.",
    name: "Sofia",
    city: "Göteborg",
  },
  {
    id: 3,
    Content:
      "Skulle aldrig kunna ta hjälp av någon annan än VividClean. De gör mig aldrig besviken.",
    name: "Anders",
    city: "Motala",
  },
  {
    id: 4,
    Content: "De var trevliga och professionella.",
    name: "Bertil",
    city: "Uppsala",
  },
];

export default function Review(): JSX.Element {
  const [currentReview, setCurrentReview] = useState<IReview>(Reviews[0]);

  useEffect(() => {
    setTimeout(() => {
      if (currentReview.id === Reviews.length - 1) {
        setCurrentReview(Reviews[0]);
      } else {
        setCurrentReview(Reviews[currentReview.id + 1]);
      }
    }, 5000);
  }, [currentReview]);

  return (
    <div className="p-0 md:p-20 w-full h-[40em] md:h-[22em] flex flex-col space-y-8 items-center justify-center bg-customDark text-white my-20 font-DM">
      <div className="ReviewAnimation flex justify-center items-center flex-col w-4/5" key={currentReview.id}>
        <h3 className="w-2/3 text-3xl">
          <h2 className="py-10 text-xl font-serif font-bold">Om VividClean</h2>
          <span className=" pr-3 text-3xl">”</span>
          {currentReview.Content}
          <span className=" pl-3 text-2xl">”</span>
        </h3>
        <p>
          {currentReview.name}, {currentReview.city}
        </p>
      </div>
    </div>
  );
}
