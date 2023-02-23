import React, { useState, Fragment } from "react";
import Image from "next/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ConnectKitButton } from "connectkit";
import truncateEthAddress from "truncate-eth-address";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";
import Link from "next/link";

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="flex justify-between p-3 md:p-6 w-full items-center">
      <div className="cursor-pointer">
        <Link href='/'>
        <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </Link>
      </div>
      <div className="p-3 bg-neutral-800 rounded-3xl md:flex flex-row space-x-3 hidden">
        <MagnifyingGlassIcon className="w-5" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-white md:w-[300px] lg:w-[500px] cursor-pointer border-none outline-none"
        />
      </div>
      <div className="md:flex hidden px-4 py-3 bg-transparent hover:bg-transparent rounded-3xl text-center justify-center cursor-pointer">
        <ConnectButton accountStatus="address" chainStatus="icon" />
      </div>

      {/*mobile Nav */}

      <div className="flex md:hidden">
        {openNav ? (
          <Transition
            as={Fragment}
            show={openNav}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 rotate-[-120deg] scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <div className="min-h-screen min-w-full absolute z-10 left-0 top-0 backdrop-blur-sm items-center justify-center flex flex-col">
              <div className="absolute right-3 top-4">
                <XMarkIcon
                  onClick={() => setOpenNav(!openNav)}
                  className="w-8 transition duration-150 ease-out hover:ease-in cursor-pointer"
                />
              </div>
              <div className="absolute top-20 space-y-6">
                <div className="p-3 bg-neutral-800 rounded-3xl flex flex-row space-x-3">
                  <MagnifyingGlassIcon className="w-5" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent text-white md:w-[300px] lg:w-[500px] cursor-pointer border-none outline-none"
                  />
                </div>

                <div className="flex px-4 py-3 bg-transparent hover:transparent rounded-3xl text-center justify-center cursor-pointer">
                  <ConnectButton accountStatus="address" chainStatus="icon" />
                </div>
              </div>
            </div>
          </Transition>
        ) : (
          <Bars3Icon
            onClick={() => setOpenNav(!openNav)}
            className="w-8 transition duration-150 ease-out hover:ease-in cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
