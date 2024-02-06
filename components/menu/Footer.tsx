'use client'
import Logo from "@/components/icons/logo/logo";
import Link from "next/link";
import LogoText from "@/components/icons/logo/logoText";
import style from "@/components/menu/menu.module.css";
import Events from "@/components/icons/events/events";
import SpaceDesign from "@/components/icons/spaceDesign/spaceDesign";
import Flowers from "@/components/icons/flowers/flowers";
import PottedPlants from "@/components/icons/pottedPlants/pottedPlants";
import Balloons from "@/components/icons/balloons/balloons";
import Contacts from "@/components/icons/contacts/contacts";
import {usePathname} from "next/navigation";
import Phone from "@/components/icons/phone/phone";
import Email from "@/components/icons/email/email";
import FooterLine from "@/components/icons/footerLine/footerLine";
import Telegram from "@/components/icons/telegram/telegram";
import Vk from "@/components/icons/vk/vk";

const Footer = () => {
  const path = usePathname()
  return(
    <footer className={`bg-[--gray] text-[--crystal] flex footer justify-between items-center py-6 px-[--pagePadding]
    max-[1240px]:flex-col gap-6 mt-auto`}>
      <Link href={`/`} className={`flex items-end max-[1440px]:flex-col max-[1440px]:gap-1 max-[1440px]:items-center hover:cursor-pointer 
            relative min-[1440px]:z-10 ${style.footerLogoGroup}`}>
        <div className={`max-w-[80px]`}>
          <Logo />
        </div>
        <div className={`max-w-[125px]`}>
          <LogoText/>
        </div>
      </Link>
      <div className={`flex flex-col gap-6 justify-center items-center min-[1440px]:absolute right-0 left-0
      max-[1240px]:mt-6`}>
        <nav>
          <ul className={`flex items-center min-[1440px]:gap-[2vw] gap-3 justify-center flex-col md:flex-row`}>
            <li className={`${style.footerNavItem} ${path==='/events' && style.footerActiveNavItem} w-[99px]` }>
              <Link href={`/events`}>
                <Events />
                {path !== '/events' && `Мероприятия`}
              </Link>
            </li>
            <li className={`${style.footerNavItem} ${path==='/spaceDesign' && style.footerActiveNavItem} w-[188px]` }>
              <Link href={`/spaceDesign`}>
                <SpaceDesign />
                {path !== '/spaceDesign' && `Оформление пространств`}
              </Link>
            </li>
            <li className={`${style.footerNavItem} ${path==='/flowers' && style.footerActiveNavItem} w-[46px]` }>
              <Link href={"/flowers"}>
                <Flowers />
                {path !== '/flowers' && `Цветы`}
              </Link>
            </li>
            <li className={`${style.footerNavItem} ${path==='/pottedPlants' && style.footerActiveNavItem} w-[149px]` }>
              <Link href={`/pottedPlants`}>
                <PottedPlants />
                {path !== '/pottedPlants' && `Горшечные растения`}
              </Link>
            </li>
            <li className={`${style.footerNavItem} ${path==='/balloons' && style.footerActiveNavItem} w-[125px]` }>
              <Link href={`/balloons`}>
                <Balloons />
                {path !== '/balloons' && `Воздушные шары`}
              </Link>
            </li>
            <li className={`${style.footerNavItem} ${path==='/contacts' && style.footerActiveNavItem}  w-[67px]` }>
              <Link href={`/contacts`}>
                <Contacts />
                {path !== '/contacts' && `Контакты`}
              </Link>
            </li>
          </ul>
        </nav>
        <FooterLine/>
        <div className={`text-center`}>
          <p>Алиссус, 2023</p>
          <p>Королёв, ул. Советская, д. 47, к4</p>
        </div>
      </div>
      <div className={`flex flex-col items-end gap-3 relative z-10 max-[1240px]:items-center`}>
        <a href={`tel:+79264974500`} className={`flex gap-2 hover:cursor-pointer`}>
          <div className={`h-[24px] ${style.footerNavItem}`}>
            <Phone/>
          </div>
          <span className={`block`}>+7 (926) 497-45-00</span>
        </a>
        <a href={`mailto:info@alissum.ru`} className={`flex gap-2 hover:cursor-pointer`}>
          <div className={`h-[24px] ${style.footerNavItem}`}>
            <Email/>
          </div>
          <span className={`block`}>info@alissum.ru</span>
        </a>
        <div className={`flex gap-2 items-center`}>
          <a href={``}>
            <Vk/>
          </a>
          <a href={``}>
            <Telegram/>
          </a>
        </div>
        <button className={`px-[50px] py-[10px] text-[--crystal] uppercase font-light text-xs`}
        style={{
          background: `linear-gradient(180deg, #74A541 0%, rgba(116, 165, 65, 0.10) 100%)`
        }}>Яндекс</button>
      </div>
    </footer>
  )
}
export default Footer