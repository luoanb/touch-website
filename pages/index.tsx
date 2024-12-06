import DefaultLayout from "@/layouts/default";
import HomeLayout from "@/layouts/home";

const Slide = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    style={{ scrollSnapAlign: "start" }}
    className={`w-full h-[100vh] snap-start ${props.className}`}
  >
    {children}
  </div>
);
const SlideBox = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={`snap-mandatory snap-y h-[100vh] overflow-y-scroll ${props.className}`}
  >
    {children}
  </div>
);

const Container = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={`max-w-screen-xl mx-auto w-full px-12 ${props.className}`}
  >
    {children}
  </div>
);

export default function IndexPage() {
  return (
    <HomeLayout>
      <SlideBox>
        <Slide className="p-4">
          <div className="h-[80%] w-full bg-gradient-to-bl from-[28%] from-[#3762E2] to-[#8294EA] rounded-lg pt-12 relative">
            <Container className="px-12 mt-16">
              <h1 className="text-5xl font-bold text-white mb-8">
                页游的顺心陪伴
              </h1>
              <p className="text-white text-2xl mb-8">
                还在为你的每天重复的任务花费更多时间吗?
              </p>
              <p className="text-white text-2xl mb-8">那这款游戏一定适合你</p>
              <p className="text-white text-2xl mb-8">
                你可以自由的根据需求自由的设计各种操作组合,
                然后保存起来让他重复的运行
              </p>
            </Container>
            <video
              src="/chrome_PVI0nzvjER.mp4"
              className="w-[50%] right-4 absolute -bottom-36 rounded-lg shadow-lg shadow-gray-700"
              controls
              autoPlay={true}
            >
              <track kind="captions" />
            </video>
          </div>
        </Slide>
        <Slide>你好</Slide>
      </SlideBox>
    </HomeLayout>
  );
}
