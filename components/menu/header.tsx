import Logo from "@/components/icons/logo/logo";
import LogoText from "@/components/icons/logo/logoText";
import Events from "@/components/icons/events/events";
import SpaceDesign from "@/components/icons/spaceDesign/spaceDesign";
import Flowers from "@/components/icons/flowers/flowers";
import PottedPlants from "@/components/icons/pottedPlants/pottedPlants";
import Baloons from "@/components/icons/baloons/baloons";
import Contacts from "@/components/icons/contacts/contacts";
import Cart from "@/components/icons/cart/cart";

import Link from "next/link";
import style from "@/components/menu/header.module.css"
import Phone from "@/components/icons/phone/phone";

const Header = () => {
const cartCount = 1
return(
    <div className={`hidden lg:flex justify-between items-center px-[--pagePadding] py-[20px]`}>
        <div className={`flex items-end mr-[12vw]`}>
            <div className={`max-w-[80px]`}>
                <Logo />
            </div>
            <div className={`max-w-[125px]`}>
                <LogoText/>
            </div>
        </div>
        <nav className={`flex items-center flex-grow justify-between`}>
            <ul className={`flex items-center gap-8`}>
                <li className={style.navItem}>
                    <Events />
                    <Link href={``}>Мероприятия</Link>
                </li>
                <li className={style.navItem}>
                    <SpaceDesign />
                    <Link href={``}>Оформление пространств</Link>
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

            <div className={`flex items-center justify-center text-[--salad] h-[32px]`}>
                <Cart />
                {cartCount !== 0 && `${cartCount}шт`}
            </div>
            <div className={`flex flex-col items-center`}>
                <div className={`h-[24px] navItem`}>
                    <Phone/>
                </div>
                <a href={`+7 (926) 497-45-00`} className={`block`}>+7 (926) 497-45-00</a>
            </div>
        </nav>
    </div>
)
}
export default Header