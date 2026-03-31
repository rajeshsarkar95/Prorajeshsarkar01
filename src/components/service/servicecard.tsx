"use client";
import React, { useState } from "react";
import { ServiceCardProps } from "./service";
import { ServiceIcon } from "./serviceicon";
import { ServiceTag } from "./servicetag";

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
    const [hovered, setHovered] = useState(false);
    const { title, description, icon, tags, accentColor, accentBg } = service;

    return (
        <article
            className={`
        group relative flex flex-col gap-5 p-6 rounded-2xl border cursor-default
        bg-slate-900/60 backdrop-blur-sm
        transition-all duration-300 ease-out overflow-hidden
        ${hovered
                    ? "border-slate-600/60 bg-slate-800/70 -translate-y-1 shadow-2xl shadow-black/40"
                    : "border-slate-800/70 hover:border-slate-700/60"
                }
      `}
            style={{ animationDelay: `${index * 60}ms` }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label={`Service: ${title}`}
        >
            <div
                className={`
          absolute inset-x-0 top-0 h-px transition-opacity duration-300
          ${hovered ? "opacity-100" : "opacity-0"}
        `}
                style={{
                    background: `linear-gradient(90deg, transparent, currentColor, transparent)`,
                }}
                aria-hidden="true"
            />
            <span className="absolute top-5 right-5 text-xs font-mono font-semibold text-slate-700 select-none">
                {String(index + 1).padStart(2, "0")}
            </span>
            <div
                className={`
          w-12 h-12 rounded-xl flex items-center justify-center
          border transition-colors duration-300
          ${accentBg}
        `}
            >
                <ServiceIcon name={icon} className={`w-6 h-6 ${accentColor}`} />
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-white font-bold text-[17px] leading-snug tracking-tight pr-6">
                    {title}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {description}
                </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
                {tags.map((tag) => (
                    <ServiceTag
                        key={tag}
                        label={tag}
                        accentColor={accentColor}
                        accentBg={accentBg}
                    />
                ))}
            </div>
            <div
                className={`
          absolute bottom-5 right-5 transition-all duration-300
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}
          ${accentColor}
        `}
                aria-hidden="true"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </article>
    );
};

export default ServiceCard;