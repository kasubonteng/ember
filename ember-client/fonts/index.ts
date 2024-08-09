import localFont from "next/font/local";

export const gilroy = localFont({
	src: [
		{
			path: "./Gilroy-Light.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "./Gilroy-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./Gilroy-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./Gilroy-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./Gilroy-Heavy.ttf",
			weight: "900",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-gilroy",
});
