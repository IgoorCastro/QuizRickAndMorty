"use client";
import { useEffect } from "react";

export default function AnalyticsLogger() {
  useEffect(() => {
    fetch("/api/log").catch(console.error);
  }, []);

  return null; // componente invisível
};