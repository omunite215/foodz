import "./globals.css";
import { Navbar, Footer } from "@/components/common";
import type { Metadata } from "next";
import { Poppins, Alice } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

const alice = Alice({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-alice",
});

export const metadata: Metadata = {
	title: "FoodZ",
	description: "where food meets taste",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${alice.variable}`}>
				<main className=" bg-bgWhite w-full overflow-hidden antialiased">
					<header className="sm:px-[4.5rem] xs:px-12 px-6 flexStart">
						<nav className="xl:max-w-[1440px] w-full">
							<Navbar />
						</nav>
					</header>
					<section className=" bg-bgWhite flexStart">
						<section className=" xl:max-w-[1440px] w-full z-0">
							{children}
							<Footer />
						</section>
					</section>
				</main>
			</body>
		</html>
	);
}
