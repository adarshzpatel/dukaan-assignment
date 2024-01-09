import ArrowPointerIcon from "../assets/icons/ArrowPointerIcon";
import BarGraphIcon from "../assets/icons/BarGraphIcon";
import ChevronDownIcon from "../assets/icons/ChevronDownIcon";
import ClipboardIcon from "../assets/icons/ClipboardIcon";
import ColorPlateIcon from "../assets/icons/ColorPlateIcon";
import DiscountIcon from "../assets/icons/DiscountIcon";
import FourSquaresIcon from "../assets/icons/FourSquaresIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import LightningIcon from "../assets/icons/LightningIcon";
import LoudspeakerIcon from "../assets/icons/LoudspeakerIcon";
import PaymentIcon from "../assets/icons/PaymentIcon";
import TruckIcon from "../assets/icons/TruckIcon";
import UsersIcon from "../assets/icons/UsersIcon";
import WalletIcon from "../assets/icons/WalletIcon";


type SidebarItemProps = {
  icon: React.ReactNode;
  name: string;
  isActive: boolean;
  href: string;
};

const SidebarItem = ({ icon, name, isActive, href }: SidebarItemProps) => {
  // IMPROVEMENT : Move isActive logic inside SidebarItem component to check current path and passed href
  // const isActive = href === currentPath
  return (
    <a
      href={href}
      className={`px-4 py-2 flex  items-center gap-2.5 rounded  ${
        isActive
          ? "text-white bg-white/20"
          : "text-gray-200 hover:text-gray-100 hover:bg-white/10"
      }`}
    >
      {icon}
      <p>{name}</p>
    </a>
  );
};

const Sidebar = () => {
  // + Sidebar
  //   - square logo x ( Nishan | Visit Store ) x Chevron
  // + Side bar item
  //   - icon x name
  // + Wallet balamce
  const items = [
    {
      icon: <HomeIcon />,
      name: "Home",
      href: "#",
      isActive: false,
    },
    {
      icon: <ClipboardIcon />,
      name: "Orders",
      href: "#",
      isActive: false,
    },
    {
      icon: <FourSquaresIcon />,
      name: "Products",
      href: "#",
      isActive: false,
    },
    {
      icon: <TruckIcon />,
      name: "Delivery",
      href: "#",
      isActive: false,
    },
    {
      icon: <LoudspeakerIcon />,
      name: "Marketing",
      href: "#",
      isActive: false,
    },
    {
      icon: <BarGraphIcon />,
      name: "Analytics",
      href: "#",
      isActive: false,
    },
    {
      icon: <PaymentIcon />,
      name: "Payments",
      href: "#",
      isActive: true,
    },
    {
      icon: <ArrowPointerIcon />,
      name: "Tools",
      href: "#",
      isActive: false,
    },
    {
      icon: <DiscountIcon />,
      name: "Discounts",
      href: "#",
      isActive: false,
    },
    {
      icon: <UsersIcon />,
      name: "Audience",
      href: "#",
      isActive: false,
    },
    {
      icon: <ColorPlateIcon />,
      name: "Appearance",
      href: "#",
      isActive: false,
    },
    {
      icon: <LightningIcon />,
      name: "Plugins",
      href: "#",
      isActive: false,
    },
  ];

  return (
    <aside className="p-4 w-56 bg-[#1E2640] hidden lg:flex flex-col gap-4 sticky top-0 left-0 h-screen">
      <div className="flex items-center gap-4 ">
        <div className="rounded-lg h-10 w-10 bg-white overflow-hidden">
          <img src="/pfp.png" className="object-cover object-center" alt="" />
        </div>
        <div className="flex-1">
          <p className="text-gray-100 text-[15px]">Nishyan</p>
          <a
            href="#"
            className="underline text-gray-300 text-[13px] underline-offset-2"
          >
            Visit Store
          </a>
        </div>
        <button>
          <ChevronDownIcon className="text-white" />
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-1">
        {items.map((it) => (
          <SidebarItem key={`sidebar-item-${it.name}`} {...it} />
        ))}
      </div>
      <div className="bg-[#353C53] rounded-md flex items-center gap-2 p-2">
        <div className="bg-white/10 h-10 w-10 flex items-center justify-center  rounded-md">
          <WalletIcon />
        </div>
        <div>
          <span className="text-[13px] text-white/80 ">Available Credits</span>
          <p className="text-white  font-medium">222.10</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar