"use client";

import { SanityConfig } from "@/sanity/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function studioPage(){
    return <NextStudio config={SanityConfig} />
}