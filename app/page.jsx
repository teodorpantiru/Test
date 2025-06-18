"use client";

import { useEffect, useState, Suspense } from "react";
import ClientPageWrapper from "./components/ClientPageWrapper";
import Loader from "./components/Loader";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // optional splash delay

    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) return <Loader />;

  return (
    <Suspense>
      <ClientPageWrapper />
    </Suspense>
  );
}
