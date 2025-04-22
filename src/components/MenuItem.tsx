import Link from "next/link";
import { IconType } from "react-icons";

export interface MenuProps {
  title: string;
  Icon: IconType;
  address: string;
}

export default function MenuItem({ title, Icon, address }: MenuProps) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase text-sm hidden sm:inline">{title}</p>
    </Link>
  );
}
