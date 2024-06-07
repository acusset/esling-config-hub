'use client';
import React, { useState } from 'react';
import { saveAction } from '@/app/upload/saveAction';
import { useFormStatus, useFormState } from 'react-dom';
import Link from 'next/link';

const Upload = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(saveAction, {
    message: '',
  });

  const SubmitButton = () => (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-block btn-secondary"
    >
      Share it!
    </button>
  );

  return (
    <main className="container min-h-max mx-auto px-4 flex flex-col gap-6 z-20">
      <section id="hero">
        <Link href="/">
          <button className="btn btn-outline btn-primary">← Back</button>
        </Link>
      </section>
      <section>
        <form action={formAction} className="flex flex-col gap-4">
          {state.message && (
            <div className="alert text-error">{state.message}</div>
          )}
          <fieldset>
            <legend className="text-6xl font-bold text-primary mb-8">
              Share your ESLint config
            </legend>
            <div className="flex flex-col gap-4">
              <label htmlFor="name">Name your config:</label>
              <input
                type="text"
                placeholder="My killer React + Next config"
                name="name"
                id="name"
                required
                className="input input-bordered input-lg w-full"
              />
              <label htmlFor="description">Short description:</label>
              <input
                type="text"
                name="description"
                required
                id="description"
                placeholder="What makes your config awesome?"
                className="input input-bordered input-lg w-full"
              />
              <label htmlFor="config">Paste your config below:</label>
              <textarea
                name="config"
                required
                id="config"
                className="textarea leading-4 textarea-bordered textarea-lg w-full"
                rows={8}
              ></textarea>
              <SubmitButton />
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default Upload;
