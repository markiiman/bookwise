import React from "react";

// This page is shown when a user tries to make a request to API too quickly. (rate limiting - see ratelimit.ts)
const TooFast = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100 text-center">
        Whoa, Slow Down There, Speedy!
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        Looks like you&apos;ve been a little too eager. We&apos;ve put a
        temporary pause on your excitement. 🚦 Chill for a bit, and try again
        shortly.
      </p>
    </main>
  );
};

export default TooFast;
