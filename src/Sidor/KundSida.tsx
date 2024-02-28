import { Dropdown, DropdownItem, Datepicker } from "flowbite-react";

export default function KundSida(): JSX.Element {
  return (
    <>
      <div className="bg-customBeige mx-auto w-1/2 my-52 py-10 px-20 flex items-center justify-center flex-col space-y-10 rounded-md shadow-lg">
        <form className="flex items-center justify-center flex-col space-y-10">
          <h1 className="text-5xl font-DM">{`${"Sofia"}s`} bokningar</h1>
          <div className="">
            <h2 className="text-3xl font-DM">Boka städning</h2>
            <div className="py-5">
              <Datepicker
                minDate={new Date()}
                maxDate={new Date(2024, 12, 31)}
                className=" w-12/12"
              />
            </div>
            <Dropdown label="Städare" className="w-1/3" inline>
              <DropdownItem value="estelle">Estelle</DropdownItem>
              <DropdownItem value="Marta">Märta</DropdownItem>
              <DropdownItem value="Jimmy">Jimmy</DropdownItem>
            </Dropdown>
            <div className="py-10 flex flex-row space-x-4">
              <div className="space-x-2">
                <input type="radio" value="Fonsterputs" id="Fonsterputs" />
                <label>Fönsterputs</label>
              </div>
              <div className="space-x-2">
                <input type="radio" value="Basice" id="Basic"/>
                <label>Basic</label>
              </div>
              <div className="space-x-2">
                <input type="radio" value="Flytt" id="Flytt"/>
                <label>Flyttstädning</label>
              </div>
              <div className="space-x-2">
                <input type="radio" value="Diamant" id="Diamant"/>
                <label>Diamanttvätt</label>
              </div>
              <div className="space-x-2">
                <input type="radio" value="Topp" id="Topp"/>
                <label>Toppstädning</label>
              </div>
            </div>
          </div>
          <button className="bg-customDark text-white px-32 py-2 rounded-md hover:bg-customHoverDark duration-300 ease-in-out">
            Boka nu
          </button>
        </form>
        <div>
          <h2>Kommande bokningar</h2>
          {}
        </div>
        <div>
          <h2>utförda bokningar</h2>
          {}
        </div>
      </div>
    </>
  );
}
