import { cn } from "@/lib/utils";
import React from "react";

export default function Line({ className }: { className?: string }) {
  return <div className={cn("bg-secondary-foreground/20 w-full h-[0.11rem] rounded-xl", className)} />
};
