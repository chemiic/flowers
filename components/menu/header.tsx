import Logo from "@/components/icons/logo/logo";
import LogoText from "@/components/icons/logo/logoText";
import Link from "next/link";
import Events from "@/components/icons/events/events";
import SpaceDesign from "@/components/icons/spaceDesign/spaceDesign";
import style from "@/components/menu/header.module.css"
import Flowers from "@/components/icons/flowers/flowers";
import PottedPlants from "@/components/icons/pottedPlants/pottedPlants";
import Baloons from "@/components/icons/baloons/baloons";
import Contacts from "@/components/icons/contacts/contacts";


const Header = () => {

return(
    <div className={`hidden lg:flex justify-between items-center`}>
        <div className={`flex items-end`}>
            <div className={`max-w-[80px]`}>
                <Logo />
            </div>
            <div className={`max-w-[125px]`}>
                <LogoText/>
            </div>
        </div>
        <nav>
            <ul className={`flex items-center gap-8`}>
                <li className={style.navItem}>
                    <Events />
                    <Link href={``}>Мероприятия</Link>
                </li>
                <li className={style.navItem}>
                    <SpaceDesign />
                    <Link href={``}>Оформлиние пространств</Link>
                </li>
                <li className={style.navItem}>
                    <Flowers />
                    <Link href={``}>Цветы</Link>
                </li>
                <li className={style.navItem}>
                    <PottedPlants />
                    <Link href={``}>Горшечные растения</Link>
                </li>
                <li className={style.navItem}>
                    <Baloons />
                    <Link href={``}>Воздушные шары</Link>
                </li>
                <li className={style.navItem}>
                    <Contacts />
                    <Link href={``}>Контакты</Link>
                </li>
            </ul>
        </nav>
        <div>

        </div>
    </div>
)
}
export default Header