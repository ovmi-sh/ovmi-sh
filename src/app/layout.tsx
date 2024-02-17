import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "ovmi.sh",
	description: "Empowering Your Blockchain Journey with Cutting-Edge Web3 Tools",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"bg-slate-950 font-sans antialiased",
					fontSans.variable,
				)}
			>
				{children}
			</body>
		</html>
	);
}
