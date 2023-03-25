import IconPlusSvg from "./plus";
import LogoSvg from "./logo";
import ChavronRight from "./chevronRight";
import ChavronLeft from "./chevronLeft";
import MoreSvg from "./more";
import BellSvg from "./bell";
import BoxSvg from "./box";
import GraphSvg from "./graph";
import PieSvg from "./pie";
import LogoutSvg from "./logout";
import ArrowLeft from "./arrowLeft";
import TrashSvg from "./trash";
import SvgSearch from "./search";
import SvgFilter from "./filter";
import SvgEmailConfirm from "./emailConfirm";
import SvgProduct from "./allProduct";
import SvgOpen from "./open";
import SvgClose from "./close";
import MinusSVG from "./menus";
import MenuSvg from "./menu";
import HomeSvg from "./home";
import AdminSvg from "./admin";
import StockSvg from "./stock";
import ArrowOpenSVG from "./arrowOpen";
import StoreSvg from "./store";
import TreeDotSvg from "./treedots";
import ConfirmationSvg from "./confirmation";
import SuccessSvg from "./success";

export enum IconsName {
  logo = "logo",
  plus = "plus",
  chevronRight = "chevronRight",
  chevronLeft = "chevronLeft",
  more = "more",
  bell = "bell",
  box = "box",
  graph = "graph",
  logout = "logout",
  pie = "pie",
  arrowLeft = "arrowLeft",
  trash = "trash",
  search = "search",
  filter = "filter",
  open = "open",
  close = "close",
  minus = "minus",
  menu = "menu",
  home = "home",
  admin = "admin",
  stock = "stock",
  arrowOpen = "arrowOpen",
  store = "store",
  treedot = "treedot",
  //
  emailConfirm = "emailConfirm",
  allCategories = "allCategories",
  conformation = "confirmation",
  success = "success",
}
interface IconsComponent {
  name?: IconsName;
  height?: number;
  color?: string;
  width?: number;
}
export default function Icons({ name, width, height, color }: IconsComponent) {
  const renderIcon = () => {
    const props = { width, height, fill: color };
    switch (name) {
      case IconsName.logo:
        return <LogoSvg {...props} />;
      case IconsName.plus:
        return <IconPlusSvg {...props} />;
      case IconsName.chevronRight:
        return <ChavronRight {...props} />;
      case IconsName.chevronLeft:
        return <ChavronLeft {...props} />;
      case IconsName.more:
        return <MoreSvg {...props} />;
      case IconsName.bell:
        return <BellSvg {...props} />;
      case IconsName.box:
        return <BoxSvg {...props} />;
      case IconsName.graph:
        return <GraphSvg {...props} />;
      case IconsName.logout:
        return <LogoutSvg {...props} />;
      case IconsName.pie:
        return <PieSvg {...props} />;
      case IconsName.arrowLeft:
        return <ArrowLeft {...props} />;
      case IconsName.trash:
        return <TrashSvg {...props} />;
      case IconsName.search:
        return <SvgSearch {...props} />;
      case IconsName.filter:
        return <SvgFilter {...props} />;
      case IconsName.open:
        return <SvgOpen {...props} />;
      case IconsName.close:
        return <SvgClose {...props} />;
      case IconsName.emailConfirm:
        return <SvgEmailConfirm {...props} />;
      case IconsName.allCategories:
        return <SvgProduct {...props} />;
      case IconsName.menu:
        return <MenuSvg {...props} />;
      case IconsName.minus:
        return <MinusSVG {...props} />;
      case IconsName.home:
        return <HomeSvg {...props} />;
      case IconsName.admin:
        return <AdminSvg {...props} />;
      case IconsName.stock:
        return <StockSvg {...props} />;
      case IconsName.arrowOpen:
        return <ArrowOpenSVG {...props} />;
      case IconsName.store:
        return <StoreSvg {...props} />;

      case IconsName.treedot:
        return <TreeDotSvg {...props} />;

      case IconsName.conformation:
        return <ConfirmationSvg {...props} />;
      case IconsName.success:
        return <SuccessSvg {...props} />;
      default:
        return null;
    }
  };

  return <div>{renderIcon()}</div>;
}
