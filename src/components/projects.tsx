"use client";
import { motion } from 'framer-motion';
import { PinContainer } from './ui/3d-pin';

export default function Projects() {
    return (
        <motion.div
            className="w-full flex items-center justify-center mt-24"
            initial={{
                opacity: 0,
                y: 150
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            <PinContainer
                title="iykyk.ovmi.sh"
                href="https://iykyk.ovmi.sh"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem]">
                    <h3 className="max-w-xs font-reross-rectangular !pb-2 !m-0 font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        iykyk
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                            Type Safe, Extensible, and Modular by design. Build scalable and quality frontends for Tendermint chains.
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
            </PinContainer>
        </motion.div>
    )
}
