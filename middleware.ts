import { NextRequest } from "next/server";

import { moreWebsite } from "./middlewares/more-website";

export function middleware(request: NextRequest) {
  return moreWebsite(request);
}

// export const config = {
//   matcher: '/dashboard/:path*',
// }
