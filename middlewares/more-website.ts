import { NextResponse, NextRequest } from "next/server";

const OTHER_HOST_PAGES: Record<string, string> = {
  "www.graphictheory.top": "/graphictheory",
  "localhost:3000": "/graphictheory",
};

export const websiteInfos = {
  "/graphictheory": {
    title: "Web结构概念编辑器"
  }
}

export function moreWebsite(request: NextRequest) {
  const host = request.nextUrl.host;
  const pathname = request.nextUrl.pathname;
  console.log("pathname", pathname);
  console.log("pathname", pathname);

  if (pathname == "/" || pathname == "") {
    const website = OTHER_HOST_PAGES[host];
    console.log("website", website);


    if (website) {
      return NextResponse.redirect(new URL(website, request.url));
    }
  }

  return NextResponse.next();
}
