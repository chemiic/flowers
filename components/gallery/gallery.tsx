"use client";

import {Tab} from "@headlessui/react";
import GalleryTab from "@/components/gallery/gallery-tab";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";


const Gallery = (images: { images: any; }) => {
  const imageArr = images.images
  return (
    <Tab.Group as="div" className="flex items-center h-[600px] my-4">
      <div className="hidden pr-6 max-w-2xl sm:block lg:max-w-none h-full">
        <Tab.List className="flex flex-col gap-3 w-[100px]">
          {imageArr.map((image: any, index: any) => (
            <GalleryTab key={index} image={image}/>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square h-[600px]">

        {imageArr.map((image: string | StaticImport, index: Key | null | undefined) => (
          <Tab.Panel key={index}>
            <div className="aspect-square relative h-full rounded-sm overflow-hidden">
              <Image fill
                     sizes={"(max-width: 768px) 600px, (max-width: 1200px) 600px, 600px"}
                     src={image}
                     alt="Image"
                     className="object-cover object-center" />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;