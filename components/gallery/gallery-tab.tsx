import Image from "next/image";
import {cn} from "@/utils/tw-merge";
import {Tab} from "@headlessui/react";


const GalleryTab = (image: any) => {
  return (
    <Tab className="relative block aspect-square cursor-pointer items-center justify-center rounded-sm bg-white h-full">
      {({selected}) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-sm">
            <Image fill
                   sizes={"(max-width: 768px) 300px, (max-width: 1200px) 300px, 300px"}
                   src={image.image}
                   alt="Image"
                   className="object-cover object-center" />
          </span>
          <span className={cn("absolute inset-0 ring-2 rounded-sm", selected ? "ring-[--gray]" : "ring-transparent")} />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;