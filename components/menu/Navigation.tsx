'use client'

import style from "@/components/menu/menu.module.css";
import Link from "next/link";
import Events from "@/components/icons/events/events";
import SpaceDesign from "@/components/icons/spaceDesign/spaceDesign";
import Flowers from "@/components/icons/flowers/flowers";
import PottedPlants from "@/components/icons/pottedPlants/pottedPlants";
import Balloons from "@/components/icons/balloons/balloons";
import Contacts from "@/components/icons/contacts/contacts";
import {usePathname} from "next/navigation";

const Navigation = (classes?:string) =>{
  const path = usePathname()

  return(
    <nav className={`min-[1440px]:absolute right-0 left-0` + `${classes}`}>
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
  )
}
export default Navigation;