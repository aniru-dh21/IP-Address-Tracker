const Info = ({ infoData }) => {
  return (
    <section className="flex flex-col justify-between items-center md:gap-5 md:flex-row absolute z-10 w-[90%] md:w-[80%] bg-white p-6 rounded-xl  -translate-y-[40%] md:-translate-y-[50%] [@media(max-height:820px)]:-translate-y-[30%]">
      <article className="w-full md:w-[22%] text-center md:text-start">
        <h2 className="text-DarkGray font-medium text-sm md:text-base">
          IP ADDRESS
        </h2>
        <p className="font-medium leading-none mt-2 text-xl md:text-2xl break-all">
          {infoData.ip}
        </p>
      </article>
      <div className="w-0 md:w-[1px] bg-DarkGray h-3 md:h-10"></div>
      <article className="w-full md:w-[22%] text-center md:text-start">
        <h2 className="text-DarkGray font-medium text-sm md:text-base">
          LOCATION
        </h2>
        <p className="font-medium leading-none mt-2 text-xl md:text-2xl">
          {infoData.city}, {infoData.country_name}
        </p>
      </article>
      <div className="w-0 md:w-[1px] bg-DarkGray h-3 md:h-10"></div>
      <article className="w-full md:w-[22%] text-center md:text-start">
        <h2 className="text-DarkGray font-medium text-sm md:text-base">
          TIMEZONE
        </h2>
        <p className="font-medium leading-none mt-2 text-xl md:text-2xl">
          UTC{" "}
          {infoData.utc_offset
            ? infoData.utc_offset.slice(0, 3)
            : infoData.utc_offset}
          :
          {infoData.utc_offset
            ? infoData.utc_offset.slice(3)
            : infoData.utc_offset}
        </p>
      </article>
      <div className="w-0 md:w-[1px] bg-DarkGray h-3 md:h-10"></div>
      <article className="w-full md:w-[22%] text-center md:text-start">
        <h2 className="text-DarkGray font-medium text-sm md:text-base">ISP</h2>
        <p className="font-medium leading-6 md:leading-6 mt-2 text-xl md:text-2xl">
          {infoData.org}
        </p>
      </article>
    </section>
  );
};

export default Info;
