import { MdKeyboardArrowRight } from "react-icons/md";

const Header = ({ onSearch, searchValue, onClick, onKeyDown }) => {
  return (
    <header className="bg-[url('/pattern-bg-mobile.png')] md:bg-[url('/pattern-bg-desktop.png')] bg-no-repeat bg-cover bg-center h-[33vh] md:h-[30vh] flex flex-col justify-start items-center gap-7 pt-8">
      <h1 className="text-white font-medium text-2xl md:text-4xl tracking-normal">
        IP Address Tracker
      </h1>
      <div className="flex justify-center items-center w-[90%] md:w-full">
        <input
          className="p-4 md:w-[40%] w-full rounded-s-xl placeholder-DarkGray focus:placeholdertext-VeryDarkGray cursor-pointer"
          type="text"
          placeholder="Search for any IP address or domain"
          id="search"
          onChange={onSearch}
          value={searchValue}
          onKeyDown={onKeyDown}
        />
        <button
          className="bg-black text-white cursor-pointer px-4 py-[0.92rem] rounded-e-xl hover:bg-[rgba(43,43,43,0.9)]"
          onClick={onClick}
          title="Search"
        >
          <MdKeyboardArrowRight size={26} />
        </button>
      </div>
    </header>
  );
};

export default Header;
