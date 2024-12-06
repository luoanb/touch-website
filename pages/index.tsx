import HomeLayout from "@/layouts/home";
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
              <h1 className="text-5xl font-bold text-white mb-8">
                页游的顺心陪伴
              </h1>
              <p className="text-white text-2xl mb-4">
                还在为你的每天重复的任务花费更多时间吗?
              </p>
              <p className="text-white text-2xl mb-4">那这款游戏一定适合你</p>
              <p className="text-white text-2xl mb-4">
                你可以自由的根据需求自由的设计各种操作组合,
              </p>
              <p className="text-white text-2xl mb-4">保存起来让他重复的运行</p>
            </Container>
            <div className="hidden lg:block">
              <SlideBox
                className="right-4 absolute -bottom-36 overflow-hidden rounded-lg "
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
        <Slide>
          <Container className="pt-16 flex flex-col h-full">
            <div className="mt-16 flex-1">
              <h1 className="text-5xl font-bold mb-8">社区</h1>
              <p className="text-2xl mb-4">快捷使用同道中人的分享成果</p>
              <p className="text-2xl mb-4">当然也可以分享你的成果</p>
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
