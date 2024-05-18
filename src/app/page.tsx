'use client';
import React from 'react';

export default function Home() {
  const handleOnDragEnter = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleOnDragExit = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <main className={'container min-h-max mx-auto px-4'}>
      <h1 className="text-6xl font-bold text-primary">
        Tired of spending time creating an ESlint flat configuration?
      </h1>
      <h2 className="text-3xl font-bold">
        Find the best ESLint conf iguration for your project!
      </h2>
      <div
        className="border-4 min-h-40 border-dashed border-primary rounded-lg text-center"
        onDragEnter={handleOnDragEnter}
        onDragEnd={handleOnDragExit}
      >
        <h2>Drag and drop here!</h2>
      </div>
    </main>
  );
}
