import React from "react";

/**  Import images from src/assets */
import l1 from "../assets/l1.png";
import jica from "../assets/l1.png";
import undp from "../assets/l1.png";
import adb from "../assets/l1.png";
import worldbank from "../assets/l1.png";
import giz from "../assets/l1.png";
import test1 from "../assets/l1.png";
import test2 from "../assets/l1.png";
import test3 from "../assets/l1.png";
import test4 from "../assets/l1.png";
import test5 from "../assets/l1.png";
import test6 from "../assets/l1.png";


type Logo = {
    name: string;
    src: string;
};

const logos: Logo[] = [
    { name: "GIZ", src: l1 },
    { name: "JICA", src: jica },
    { name: "UNDP", src: undp },
    { name: "ADB", src: adb },
    { name: "World Bank", src: worldbank },
    { name: "GIZ", src: giz },
    { name: "JICA", src: jica },
    { name: "UNDP", src: undp },
    { name: "ADB", src: adb },
    { name: "World Bank", src: worldbank },

    { name: "World Bank", src: test1 },
    { name: "GIZ", src: test2 },
    { name: "JICA", src: test3 },
    { name: "UNDP", src: test4 },
    { name: "ADB", src: test5 },
    { name: "World Bank", src: test6 },
];

export default function LogoSlider() {
    const track = [...logos, ...logos];

    return (
        <section className="py-12 bg-muted/20">
            <div className="max-w-full w-full">
            {/* test title */}
                <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    Trusted by Development Partners & Funding Agencies
                </p>

                <div className="mt-6 relative overflow-hidden">
                    {/* fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

                    {/* slider */}
                    <div className="group">
                        <div className="flex w-max items-center gap-14 px-8 py-8 logo-marquee group-hover:[animation-play-state:paused]">
                            {track.map((l, idx) => (
                                <div
                                    key={`${l.name}-${idx}`}
                                    className="flex items-center justify-center opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                                    title={l.name}
                                >
                                    <img
                                        src={l.src}
                                        alt={l.name}
                                        className="h-10 w-auto md:h-12 object-contain"
                                        loading="lazy"
                                        onError={(e) => {
                                            // hide broken image icon if path wrong
                                            (e.currentTarget as HTMLImageElement).style.display = "none";
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ✅ keyframes */}
                <style>{`
          @keyframes logo-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .logo-marquee {
            animation: logo-marquee 25s linear infinite;
          }
        `}</style>
            </div>
        </section>
    );
}