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
            className="flex justify-start items-center gap-1 w-[160px]"
            href="/"
          >
            <img alt="logo" className="p-2 w-[80px]" src="/logo.png" />
            <p className="font-bold text-inherit">快速点击助手</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2 w-[500px]">
          <p className="text-small light:text-gray-500 dark:text-gray-400 ml-2">
            Chrome插件-网页快捷操作助手, 可实现短时间内快手连续点击加速.
          </p>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
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
        <NavbarMenuItem>
          <Link
            target="_blank"
            color={"foreground"}
            href={siteConfig.links.installation}
            size="lg"
            className="flex items-center"
          >
            <span className="mr-1">安装教程</span>
            <Chip color="default" size="sm">
              外部
            </Chip>
          </Link>
        </NavbarMenuItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.download}
            startContent={<DownloadIcon className="text-danger" />}
            variant="flat"
          >
            下载
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link> */}
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))} */}
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
          <NavbarMenuItem>
            <Link
              target="_blank"
              color={"foreground"}
              href={siteConfig.links.installation}
              size="lg"
              className="flex items-center"
            >
              <span className="mr-1">安装教程</span>
              <Chip color="default" size="sm">
                外部
              </Chip>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color={"foreground"}
              href={siteConfig.links.download}
              size="lg"
            >
              插件下载
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
