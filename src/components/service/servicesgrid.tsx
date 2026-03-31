"use client";

import React from "react";
import { ServicesGridProps } from "./service";
import { SERVICES_DATA } from "./services";
import { ServiceCard } from "./servicecard";
import { SectionHeader } from "./sectionsheader";

export const ServicesGrid: React.FC<ServicesGridProps> = ({
    services = SERVICES_DATA,
    title = "End-to-End Digital Services",
    subtitle =
    "From idea to deployment and beyond — we handle every layer of the stack so your team can focus on what matters.",
}) => {
    return (
        <section
            className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden"
            aria-labelledby="services-heading"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
                    backgroundSize: "48px 48px",
                    maskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)",
                }}
            />
            <div
                className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none"
                aria-hidden="true"
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title={title} subtitle={subtitle} />
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
                    role="list"
                    aria-label="Our services"
                >
                    {services.map((service, index) => (
                        <div key={service.id} role="listitem">
                            <ServiceCard service={service} index={index} />
                        </div>
                    ))}
                </div>
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                    <p className="text-slate-500 text-sm">
                        Need something not listed above?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-slate-700 hover:border-slate-500 hover:bg-slate-800 px-5 py-2.5 rounded-full transition-all duration-200"
                    >
                        Let&apos;s talk about your project
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;