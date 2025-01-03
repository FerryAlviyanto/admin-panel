const Banner = () => {
  return (
    <div className="container mt-32">
      <div className="grid lg:grid-cols-[66%, 34%] gap-6 pr-[15px]">
        {/* Kartu Produk Pertama */}
        <div className="h-[200px] md:h-[260px] bg-[url(/mousepad.png)] bg-no-repeat bg-cover bg-center rounded-xl p-8 md:p-16 shadow-lg transition-transform transform hover:scale-105">
          <p className="text-[#a9acad] text-lg font-semibold">
            Sale 20% off all store
          </p>
          <h2 className="text-[#d4cdcd] font-bold text-2xl sm:text-3xl max-w-[240px]">
            2E Gaming Mouse Pad control PG 330
          </h2>
          <a
            className="inline-block mt-6 bg-accent text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition"
            href="#"
          >
            Shop Now
          </a>
        </div>

        {/* Kartu Produk Kedua */}
        <div className="h-[200px] md:h-[260px] bg-[url(/Keyboard.png)] bg-no-repeat bg-cover bg-center rounded-xl p-8 md:p-16 shadow-lg transition-transform transform hover:scale-105">
          <p className="text-[#646363] text-lg font-bold">
            Sale 40% off all store
          </p>
          <h2 className="text-[#413f3f] font-bold text-2xl sm:text-4xl max-w-[240px]">
            Mechanical Keyboard Fude F800
          </h2>
          <a
            className="inline-block mt-6 bg-accent text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition"
            href="#"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
