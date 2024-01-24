'use client'
import {useRef, useState} from "react";
import { CSSTransition } from 'react-transition-group'
import Logo from "@/components/icons/logo/logo";
import LogoText from "@/components/icons/logo/logoText";
import style from "@/components/menu/menu.module.css";
import Events from "@/components/icons/events/events";
import Link from "next/link";
import SpaceDesign from "@/components/icons/spaceDesign/spaceDesign";
import Flowers from "@/components/icons/flowers/flowers";
import PottedPlants from "@/components/icons/pottedPlants/pottedPlants";
import Contacts from "@/components/icons/contacts/contacts";
import Phone from "@/components/icons/phone/phone";
import Balloons from "@/components/icons/balloons/balloons";
import {usePathname} from "next/navigation";
const Burger = () => {
    const [isOpen, setIsOpen] = useState(false)

    const showGoTopRef = useRef(null)

    const router = usePathname()
    const cartCount = 1
    const blockDInfoRef = useRef(null)
    return(
        <>
            {/*Burger button */}
            <div
                className={`flex lg:hidden
                absolute top-3 right-3 z-50 justify-center items-center w-10 h-10 opacity-100 transition-opacity hover:cursor-pointer`}
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                <div className={"w-[25px] h-[16px] flex flex-col items-center justify-between"}>
                    <div
                        className={"w-[25px] h-[2px] bg-[--salad] transition-all duration-500 origin-[3px]"}
                        style={{
                            transform: isOpen ? 'rotate(45deg) ' : 'rotate(0)',
                        }}
                    ></div>
                    <div
                        className={"w-[25px] h-[2px] bg-[--salad] transition-all duration-100 origin-[3px]"}
                        style={{
                            transform: isOpen ? 'translateX(10px)' : 'translateX(0)',
                            opacity: isOpen ? '0' : '1',
                        }}
                    ></div>
                    <div
                        className={"w-[25px] h-[2px] bg-[--salad] transition-all duration-500 origin-[3px]"}
                        style={{
                            transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)',
                        }}
                    ></div>
                </div>
            </div>

            {/*Burger content*/}
            <CSSTransition in={isOpen} nodeRef={blockDInfoRef} timeout={500} unmountOnExit classNames='alert'>
                <div
                    className={"bg-[--crystal] overflow-hidden h-full relative z-40"}
                    ref={blockDInfoRef}
                    style={{
                        position: 'fixed',
                        width: '100%',
                    }}
                >
                    <div className={`flex flex-col justify-between items-stretch py-[20px] h-full gap-3`}>
                        <div className={`flex flex-col items-center gap-1`}>
                            <div className={`max-w-[80px]`}>
                                <Logo />
                            </div>
                            <div className={`max-w-[125px]`}>
                                <LogoText/>
                            </div>
                        </div>
                        <nav className={`flex flex-col items-center justify-between`}>
                            <ul className={`flex flex-col items-center gap-3 justify-center `}>
                                <li className={`${style.navItem} ${router==='/events' && style.activeNavItem} w-[99px]` }>
                                    <Link href={`/events`}>
                                        <Events />
                                        {router !== '/events' && `Мероприятия`}
                                    </Link>
                                </li>
                                <li className={`${style.navItem} ${router==='/spaceDesign' && style.activeNavItem} w-[188px]` }>
                                    <Link href={`/spaceDesign`}>
                                        <SpaceDesign />
                                        {router !== '/spaceDesign' && `Оформление пространств`}
                                    </Link>
                                </li>
                                <li className={`${style.navItem} ${router==='/flowers' && style.activeNavItem} w-[46px]` }>
                                    <Link href={"/flowers"}>
                                        <Flowers />
                                        {router !== '/flowers' && `Цветы`}
                                    </Link>
                                </li>
                                <li className={`${style.navItem} ${router==='/pottedPlants' && style.activeNavItem} w-[149px]` }>
                                    <Link href={`/pottedPlants`}>
                                        <PottedPlants />
                                        {router !== '/pottedPlants' && `Горшечные растения`}
                                    </Link>
                                </li>
                                <li className={`${style.navItem} ${router==='/balloons' && style.activeNavItem} w-[125px]` }>
                                    <Link href={`/balloons`}>
                                        <Balloons />
                                        {router !== '/balloons' && `Воздушные шары`}
                                    </Link>
                                </li>
                                <li className={`${style.navItem} ${router==='/contacts' && style.activeNavItem}  w-[67px]` }>
                                    <Link href={`/contacts`}>
                                        <Contacts />
                                        {router !== '/contacts' && `Контакты`}
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className={`flex  justify-center items-center`}>
                            <a href={`tel:+79264974500`} className={`block`}>
                                <div className={`h-[24px]`}>
                                    <Phone/>
                                </div>+7 (926) 497-45-00</a>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}
export default Burger
