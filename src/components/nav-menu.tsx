import { usePathname } from "next/navigation";

interface NavMenuProps {
  label: string;
  href: string;
  isActive: boolean;
}

const NavMenu = () => {
  const pathname = usePathname();

  return <div></div>;
};
