import React, { useEffect, useState } from "react";
import { COUNTER_DATA } from "../utils/helper";
const EchoCounter = () => {
    const AnimateCount = ({ start, end }) => {
        const [value, setValue] = useState(start);
        useEffect(() => {
            let startTimestamp = null;
            const duration = 2000;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setValue((progress * (end - start) + start).toFixed(1));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }, [end, start]);
        return <span>{value}</span>;
    };
    return (
        <div id="solution" className="-mt-1 text-white lg:pt-14 md:pt-12 pt-[60px] bg-dark-black lg:pb-[175px] md:pb-12 pb-[60px] relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="gap-8 max-sm:gap-6 text-center flex max-md:flex-wrap items-center justify-center">
                    {COUNTER_DATA.map(({ id, number, prefix = "", unit = "", description }, index) => (
                        <div key={id}
                            className={`lg:w-[41%] w-full px-3 flex flex-col justify-center items-center max-lg:mb-6 ${index !== COUNTER_DATA.length - 1 ? "border-gradient" : ""
                                }`} >
                            <div className="flex items-center justify-center lg:text-5xl text-3xl font-semibold leading-custom-sm">
                                {prefix && <span className="lg:text-5xl text-3xl font-semibold leading-custom-sm">{prefix}</span>}
                                {index < 3 ? (
                                    <AnimateCount start={0} end={number} />
                                ) : (
                                    <span>{number}</span>
                                )}
                                {unit && <span className="lg:text-5xl text-3xl font-semibold leading-custom-sm">{unit}</span>}
                            </div>
                            <p className="lg:text-base text-sm text-white font-normal pt-2 md:max-w-[187px] leading-custom-xl">{description}</p>
                        </div>))}
                </div>
            </div>
        </div>
    );
};
export default EchoCounter;