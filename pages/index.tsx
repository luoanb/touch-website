import { siteConfig } from "@/config/site";
import HomeLayout from "@/layouts/home";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";
import { createContext, useContext } from "react";

export interface SlideContextProps {
  direction?: "horizontal" | "vertical";
  width?: any;
  height?: any;
}

export type SlideBoxProps = SlideContextProps &
  React.HTMLAttributes<HTMLDivElement>;

const SlideBoxContent = createContext<SlideContextProps>({
  direction: "vertical",
  width: "100%",
  height: "500px",
});

const Slide = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const content = useContext(SlideBoxContent);

  return (
    <div
      {...props}
      style={{
        scrollSnapAlign: "start",
        width: "100%",
        height: "100%",
      }}
      className={`snap-start shrink-0 ${props.className}`}
    >
      {children}
    </div>
  );
};

const SlideBox = ({
  children,
  height = "500px",
  width = "100%",
  direction = "vertical",
  ...props
}: SlideBoxProps) => {
  const content = { height, width, direction };
  // horizontal: 水平

  return (
    <SlideBoxContent.Provider value={content}>
      <div
        {...props}
        style={{ height, width }}
        className={`snap-mandatory  ${direction == "horizontal" ? "overflow-x-scroll overflow-y-hidden flex snap-x" : "overflow-y-scroll overflow-x-hidden snap-y"} ${props.className}`}
      >
        {children}
      </div>
    </SlideBoxContent.Provider>
  );
};

const Container = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={`max-w-screen-xl mx-auto w-full px-12 ${props.className || ""}`}
  >
    {children}
  </div>
);

export default function IndexPage() {
  return (
    <HomeLayout>
      <SlideBox height="100vh">
        <Slide className="p-4">
          <div className="h-[80%] w-full bg-gradient-to-bl from-[28%] from-[#3762E2] to-[#8294EA] rounded-lg pt-12 relative">
            <Container className="px-12 mt-16">
              <h1 className="sm:text-5xl text-3xl font-bold text-white mb-8">
                页游的顺心陪伴
              </h1>
              <p className="text-white sm:text-2xl text-xl mb-4">
                还在为你的每天重复的任务花费更多时间吗?
              </p>
              <p className="text-white sm:text-2xl text-xl mb-4">
                那这款游戏一定适合你
              </p>
              <p className="text-white sm:text-2xl text-xl mb-4">
                你可以自由的根据需求自由的设计各种操作组合,
              </p>
              <p className="text-white sm:text-2xl text-xl mb-4">
                保存起来让他重复的运行
              </p>
            </Container>
            <div className="hidden lg:block">
              <SlideBox
                className="right-4 xxl:right-[256px] absolute -bottom-36 overflow-hidden rounded-lg "
                height="800px"
                width="450px"
              >
                <Slide>
                  <img
                    src="/kdqb-autoplay.gif"
                    className="w-full h-full rounded-lg shadow-lg shadow-gray-700 overflow-hidden"
                    alt=""
                  />
                </Slide>
                <Slide>
                  <img
                    src="/kdqb-autoplay2.gif"
                    className="w-full h-full rounded-lg shadow-lg shadow-gray-700 overflow-hidden"
                    alt=""
                  />
                </Slide>
              </SlideBox>
            </div>
          </div>
        </Slide>
        <Slide className="flex justify-center items-center lg:hidden">
          <img
            src="/kdqb-autoplay.gif"
            className="w-full rounded-lg shadow-lg shadow-gray-700 overflow-hidden"
            alt=""
          />
        </Slide>
        <Slide className="flex justify-center items-center lg:hidden">
          <img
            src="/kdqb-autoplay2.gif"
            className="w-full rounded-lg shadow-lg shadow-gray-700 overflow-hidden"
            alt=""
          />
        </Slide>
        <Slide className="">
          <Container className="pt-32 flex flex-col h-full">
            <h1 className="sm:text-5xl text-3xl font-bold  mb-8">浏览器推荐</h1>
            <p className="sm:text-2xl text-xl mb-8">
              建议从<strong>官方渠道</strong>或成熟的<strong>应用市场</strong>
              下载所需浏览器, 以下浏览器均支持Chrome插件
            </p>
            <p className="sm:text-2xl text-xl mb-2">
              在电脑上推荐三款浏览器可供选择:{" "}
            </p>
            <div className=" sm:text-xl text-medium mb-2">
              <Link
                target="_blank"
                href={siteConfig.browserLinks.edge}
                className="sm:text-xl text-medium text-medium underline"
              >
                Edge浏览器
              </Link>
              <Chip color="default" size="sm">
                外部
              </Chip>
              是Window最新的浏览器，可用于替代曾经的IE浏览器
            </div>
            <div className="sm:text-xl text-medium mb-2">
              <Link
                target="_blank"
                href={siteConfig.browserLinks.safe360}
                className="sm:text-xl text-medium underline"
              >
                360安全浏览器
              </Link>
              <Chip color="default" size="sm">
                外部
              </Chip>
              360出品, 安全有保障
            </div>
            <div className=" sm:text-xl text-medium mb-2">
              <Link
                target="_blank"
                href={siteConfig.browserLinks.chrome}
                className="sm:text-xl text-medium underline"
              >
                Google Chrome浏览器<span className="text-sm">(需科学上网)</span>
              </Link>
              <Chip color="default" size="sm">
                外部
              </Chip>
              是Google官方出品，支持Windows、Mac、Android、iOS等平台
            </div>
            <p className=" sm:text-2xl text-xl mb-2 mt-8">在安卓手机上推荐</p>
            <div className=" sm:text-xl text-medium mb-2">
              <Link
                target="_blank"
                href={siteConfig.browserLinks.safe360}
                className="sm:text-xl text-medium underline"
              >
                狐猴浏览器
              </Link>
              <Chip color="default" size="sm">
                外部
              </Chip>
              是为数不多在安卓手机上支持Chrome插件的浏览器.
              <strong>请到通过该浏览器在Edge商店内下载安装</strong>
            </div>
            <p className=" sm:text-2xl text-xl mb-2 mt-8">
              苹果手机目前还没有支持Chrome插件的浏览器, 敬请期待
            </p>
          </Container>
        </Slide>
        <Slide>
          <Container className="pt-16 flex flex-col h-full">
            <div className="mt-16 flex-1">
              <h1 className="sm:text-5xl text-3xl font-bold mb-8">社区</h1>
              <p className="sm:text-2xl text-xl mb-4">
                快捷使用同道中人的分享成果
              </p>
              <p className="sm:text-2xl text-xl mb-4">当然也可以分享你的成果</p>
            </div>
            <div className="flex justify-center mb-4">
              <a href="https://beian.miit.gov.cn">黔ICP备2021002125号-1</a>
            </div>
          </Container>
        </Slide>
      </SlideBox>
    </HomeLayout>
  );
}
