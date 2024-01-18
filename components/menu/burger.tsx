'use client'
import {useRef, useState} from "react";
import { CSSTransition } from 'react-transition-group'
const Burger = () => {
    const [showGoTop, setShowGoTop] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const showGoTopRef = useRef(null)

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
                    className={"bg-[--crystal] overflow-hidden h-full"}
                    ref={blockDInfoRef}
                    style={{
                        position: 'fixed',
                        width: '100%',
                    }}
                >
                    asdasooidyahsd
                </div>
            </CSSTransition>
        </>
    )
}
export default Burger
