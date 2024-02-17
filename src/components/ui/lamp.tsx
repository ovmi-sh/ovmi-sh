"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative flex h-[200px] flex-col items-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
                className
            )}
        >
            <div className="relative left-0 flex w-full flex-1 justify-center isolate z-0">
                <motion.div
                    initial={{ opacity: 0.5, width: "5rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-slate-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "5rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-slate-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
       {/*          <div className="absolute inset-auto z-50 h-36 w-[128rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" /> */}
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-slate-400 blur-2xl"
                />
                <motion.div
                    initial={{ width: "5rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-slate-400 "
                />

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 " />
            </div>

            <div className="z-50 flex flex-col items-center px-5 absolute">
                {children}
            </div>
        </div>
    );
};
