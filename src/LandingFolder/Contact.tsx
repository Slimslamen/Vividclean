

export default function Contact() {
  return (
    <div className="w-full h-auto mt-12 mb-12 bg-customBeige"> 
    <h1 className="font-DM md:text-3xl text-2xl flex items-center justify-center mb-8 border-b border-gray-400 ml-28 mr-28 text-customDark">Kontakta VividClean</h1>
      <div className="w-80 h-auto flex items-center justify-center md:ml-[39%] ml-[26%]">
        <form className="max-w-sm mx-auto">
          <div>
            <label
              htmlFor="small-input"
              className="block mt-5 mb-5 text-m font-DM font-bold border-b border-gray-400 text-customDark dark:text-white"
            >
              Namn
            </label>
            <input
              type="text"
              id="small-input"
              className="block w-full p-2 mb-5 text-customDark text-xs dark:text-white"
            />
            <label
              htmlFor="small-input"
              className="block mb-5 text-m font-DM font-bold border-b border-gray-400 text-customDark dark:text-white"
            >
              E-post
            </label>
            <input
              type="text"
              id="small-input"
              className="block w-full p-2 mb-5 text-customDark text-xs dark:text-white"
            />
          </div>
          <label
            htmlFor="message"
            className="block mb-5 text-m font-DM font-bold border-b border-gray-400 text-customDark dark:text-white"
          >
            Ditt meddelande
          </label>
          <textarea
            id="message"
            className="p-2.5 mb-5 w-full text-sm text-customDark dark:text-white"
            placeholder="Skriv ditt meddelande här"
          ></textarea>
          <button type="submit" className="bg-customDark hover:bg-gray-700 rounded-lg text-customBeige font-DM mb-10 p-2">
            Kontakta oss
          </button>
        </form>
      </div>
    </div>
  );
}
