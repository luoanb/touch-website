import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, DownloadIcon } from "@/components/icons";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit mr-2">
          <NextLink
            className="flex justify-start items-center gap-1 w-[180px]"
            href="/"
          >
            <img alt="logo" className="p-2 w-[80px]" src="/logo.png" />
            <p className="font-bold text-lg">结构概念编辑器</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2 w-[500px]">
          <p className="text-small light:text-gray-500 dark:text-gray-400 ml-2">
            新一代的思维导图
          </p>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden xl:flex basis-1/5 xl:basis-full "
        justify="end"
      >
        {/* <NavbarMenuItem>
          <Tooltip content="正在开发中, 敬请期待">
            <Link
              target="_blank"
              color={"foreground"}
              href="#"
              onClick={
                (e) => e.preventDefault()
                // message
              }
              size="lg"
              className="flex items-center text-small"
            >
              <span className="mr-1">社区</span>
            </Link>
          </Tooltip>
        </NavbarMenuItem> */}
      </NavbarContent>

      <NavbarContent className="xl:hidden basis-1 pl-4" justify="end">
        {/* <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link> */}
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            <Tooltip content="正在开发中, 敬请期待">
              <Link
                target="_blank"
                color={"foreground"}
                href="#"
                onClick={
                  (e) => e.preventDefault()
                  // message
                }
                size="lg"
                className="flex items-center"
              >
                <span className="mr-1">社区</span>
              </Link>
            </Tooltip>
          </NavbarMenuItem>
        </div>
      </NavbarMenu> */}
    </NextUINavbar>
  );
};
