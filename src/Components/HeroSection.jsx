import heroImg from "../assets/hero-img.jpg";

function HeroSection() {
  return (
    <>
      <div className="bg-[#F2F0F1] pt-8 px-4">
        <div>
          <h1 className="text-4xl font-black w-80 ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="w-88 text-[14px] text-[#7e7972dd] font-medium pt-3">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="w-full bg-black text-white flex justify-center items-center py-4 rounded-4xl my-5">
            <a href="/" className="">
              Shop Now
            </a>
          </div>
          <div className="flex w-full justify-around ">
            <div>
              <p className="text-3xl font-bold flex items-center">200+</p>
              <p className="text-[#7e7972dd] text-[14px]">
                International Brands
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold">2,000+</p>
              <p className="text-[#7e7972dd] text-[14px]">
                High-Quality Products
              </p>
            </div>
          </div>
          <div className="w-full flex items-center flex-col pt-3">
            <p className="text-3xl font-bold">30,000+</p>
            <p className="text-[#7e7972dd] text-[14px]">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden pt-12">
        <img
          src={heroImg}
          alt="hero-image"
          className="w-full h-full object-cover scale-125"
        />
      </div>
    </>
  );
}

export default HeroSection;
