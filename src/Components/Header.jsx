import {
  IconChevronDown,
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconUser,
  IconX,
} from "@tabler/icons-react";

function Header() {
  return (
    <div>
      <div className="bg-black text-white flex items-center justify-between py-2 md:px-24 md:py-2">
        <div></div>
        <div className="flex gap-1 align-center">
          <p className="text-xs">
            Sign up and get 20% off to your first order.
          </p>
          <a href="#" className="underline text-xs">
            Sign Up Now
          </a>
        </div>
        <button>
          <IconX className="hidden md:block" />
        </button>
      </div>

      <div className="flex justify-between px-2 py-1 md:px-24 md:py-5.5 items-center">
        <div className="flex gap-4 items-center py-2 px-1">
          <a href="/">
            <IconMenu2 className="md:hidden pt-1 " />
          </a>
          <a href="/" className="font-black text-3xl">
            SHOP.CO
          </a>
          <div className="hidden md:flex gap-4 pl-3 text-[14px] items-center">
            <a href="/" className=" flex items-center">
              Shop
              <IconChevronDown className="w-4.5 pt-0.5" />
            </a>
            <a href="/" className="">
              On Sale
            </a>
            <a href="/" className="">
              New Arrivals
            </a>
            <a href="/" className="">
              Brands
            </a>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <input
              className="bg-gray-200 w-125 pl-11 py-2 rounded-3xl hidden sm:block mr-3"
              type="text"
              placeholder="Search for products..."
            />
            <IconSearch className="absolute right-1 md:top-2 md:left-3 md:text-gray-500" />
          </div>
          <button>
            <IconShoppingCart />
          </button>
          <button>
            <IconUser />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
