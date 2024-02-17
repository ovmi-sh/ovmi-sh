"use client";
import Projects from "@/components/projects";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<main className="flex flex-col items-center w-full gap-4 justify-center mt-32">
			<motion.h1
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 text-center font-reross-quadratic font-bold tracking-tight text-8xl"
			>
				ovmi.sh
			</motion.h1>

			<LampContainer>
				<motion.h2
					initial={{ opacity: 0, y: 80 }}
					whileInView={{ opacity: 1, y: 80 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="bg-gradient-to-b from-slate-200 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
				>
					Empowering Your Blockchain Journey<br />with Cutting-Edge Web3 Tools
				</motion.h2>
			</LampContainer>
			
			<Projects />
		</main>
	);
}
