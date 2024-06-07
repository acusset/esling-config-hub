import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container min-h-max mx-auto px-4 flex flex-col gap-6 z-20">
      <section id="hero">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-primary mb-2">
            ESlint Config Hub
          </h1>
          <h2 className="text-3xl font-bold italic">
            Find the best ESLint config for your stack!
          </h2>
          <Link
            className="btn btn-primary btn-outline btn-block"
            href="/upload"
          >
            Share your config!
          </Link>
        </div>
      </section>
      {/*<section className="flex flex-row gap-2 flex-wrap">*/}
      {/*  <button className="btn flex-grow">React</button>*/}
      {/*  <button className="btn flex-grow btn-neutral">Next</button>*/}
      {/*  <button className="btn flex-grow btn-primary">Vue</button>*/}
      {/*  <button className="btn flex-grow btn-secondary">Node</button>*/}
      {/*  <button className="btn flex-grow btn-accent">Accent</button>*/}
      {/*</section>*/}
      {/*<CardContainer />*/}
    </main>
  );
}
