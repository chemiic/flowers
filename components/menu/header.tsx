'use client'
import Logo from "@/components/icons/logo/logo";
import LogoText from "@/components/icons/logo/logoText";
import Events from "@/components/icons/events/events";
import SpaceDesign from "@/components/icons/spaceDesign/spaceDesign";
import Flowers from "@/components/icons/flowers/flowers";
import PottedPlants from "@/components/icons/pottedPlants/pottedPlants";
import Contacts from "@/components/icons/contacts/contacts";
import Cart from "@/components/icons/cart/cart";

import Link from "next/link";
import style from "@/components/menu/menu.module.css"
import Phone from "@/components/icons/phone/phone";
import {usePathname} from "next/navigation";
import Balloons from "@/components/icons/balloons/balloons";

const Header = () => {

    const cartCount:number = 1;
    const path = usePathname()
    return(
        <div className={`hidden lg:flex justify-between items-center px-[--pagePadding] py-[20px] relative`}>
            <Link href={`/`} className={`flex items-end max-[1440px]:flex-col max-[1440px]:gap-1 max-[1440px]:items-center hover:cursor-pointer 
            relative min-[1440px]:z-10 ${style.logoGroup}`}>
                <div className={`max-w-[80px]`}>
                    <Logo />
                </div>
                <div className={`max-w-[125px]`}>
                    <LogoText/>
                </div>
            </Link>
            <nav className={`min-[1440px]:absolute right-0 left-0`}>
                <ul className={`flex items-center min-[1440px]:gap-[2vw] gap-3 justify-center `}>
                    <li className={`${style.navItem} ${path==='/events' && style.activeNavItem} w-[99px]` }>
                        <Link href={`/events`}>
                            <Events />
                            {path !== '/events' && `Мероприятия`}
                        </Link>
                    </li>
                    <li className={`${style.navItem} ${path==='/spaceDesign' && style.activeNavItem} w-[188px]` }>
                        <Link href={`/spaceDesign`}>
                            <SpaceDesign />
                            {path !== '/spaceDesign' && `Оформление пространств`}
                        </Link>
                    </li>
                    <li className={`${style.navItem} ${path==='/flowers' && style.activeNavItem} w-[46px]` }>
                        <Link href={"/flowers"}>
                            <Flowers />
                            {path !== '/flowers' && `Цветы`}
                        </Link>
                    </li>
                    <li className={`${style.navItem} ${path==='/pottedPlants' && style.activeNavItem} w-[149px]` }>
                        <Link href={`/pottedPlants`}>
                            <PottedPlants />
                            {path !== '/pottedPlants' && `Горшечные растения`}
                        </Link>
                    </li>
                    <li className={`${style.navItem} ${path==='/balloons' && style.activeNavItem} w-[125px]` }>
                        <Link href={`/balloons`}>
                            <Balloons />
                            {path !== '/balloons' && `Воздушные шары`}
                        </Link>
                    </li>
                    <li className={`${style.navItem} ${path==='/contacts' && style.activeNavItem}  w-[67px]` }>
                        <Link href={`/contacts`}>
                            <Contacts />
                            {path !== '/contacts' && `Контакты`}
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={`flex min-[1440px]:justify-between gap-3 items-center 
            min-[1440px]:basis-1/6 relative min-[1440px]:z-10`}>
                <div className={`flex items-center justify-center text-[--salad] h-[32px] gap-1`}>
                    <Cart />
                    {cartCount !== 0 && `${cartCount}шт`}
                </div>
                <div className={`flex flex-col items-center max-[1240px]:hidden ${style.navItem}`}>
                    <a href={`tel:+79264974500`} className={`block max-[1240px]:hidden`}>
                    <div className={`h-[24px]`}>
                        <Phone/>
                    </div>+7 (926) 497-45-00</a>
                </div>
            </div>
        </div>
    )
}
export default Header