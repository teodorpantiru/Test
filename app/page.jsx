import { Suspense } from "react";
import ClientPageWrapper from "./components/ClientPageWrapper";

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPageWrapper />
    </Suspense>
  );
}
