"use client";

import {TeamProvider} from "@/contexts/team-context";
import React, {ReactNode} from "react";

export const Providers = ({ children }: {children: ReactNode }) => (
    <TeamProvider>
        {children}
    </TeamProvider>
);