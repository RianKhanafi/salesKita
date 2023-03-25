import { IconsName } from "assets/icons";

export interface IMenus {
  icon: IconsName;
  name: string;
  route: string;
}

export const menusSidebar: IMenus[] = [
  {
    icon: IconsName.box,
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    icon: IconsName.admin,
    name: "Users",
    route: "/dashboard/users",
  },
];

export const menusHeader: IMenus[] = [
  {
    icon: IconsName.box,
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    icon: IconsName.admin,
    name: "Users",
    route: "/dashboard/users",
  },
];
