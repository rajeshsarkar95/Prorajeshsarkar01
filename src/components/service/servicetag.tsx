"use client";

import React from "react";
import { ServiceTagProps } from "./service";

export const ServiceTag: React.FC<ServiceTagProps> = ({
  label,
  accentBg,
}) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium border ${accentBg} transition-colors duration-200`}
  >
    {label}
  </span>
);

export default ServiceTag;