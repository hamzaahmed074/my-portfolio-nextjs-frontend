import { Poppins } from "next/font/google";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
export const ayrRounded = localFont({
  src: "./AYRRounded-Regular.otf",
  display: "swap",
  variable: "--font-ayr"
});

export const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
  subsets: ['latin'],
});
