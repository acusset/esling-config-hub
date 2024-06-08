'use client';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import { FormState, saveAction } from '@/app/upload/saveAction';

const Toast = ({ message }: { message: string }) => (
  <div className='toast toast-center toast-top'>
    <div className='alert alert-error'>
      <span>{message}</span>
    </div>
  </div>
);

const initialState: FormState = {
  message: '',
  errors: {},
  isPending: false,
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='btn btn-block btn-secondary'
    >
      {pending && <span className='loading loading-spinner'></span>}
      Share it!
    </button>
  );
};

const Upload = () => {
  // useFormState will be deprecated in the future to useActionState
  const [state, formAction] = useFormState<FormState, FormData>(
    saveAction,
    initialState,
  );

  return (
    <main className='container min-h-max mx-auto px-4 flex flex-col gap-6 z-20'>
      <section id='hero'>
        <Link href='/'>
          <button className='btn btn-outline btn-primary'>← Back</button>
        </Link>
      </section>
      <section>
        <form action={formAction} className='flex flex-col gap-4'>
          {state.message && <Toast message={state.message} />}
          <fieldset>
            <legend className='text-6xl font-bold text-primary mb-8'>
              Share your ESLint config
            </legend>
            <div className='flex flex-col gap-4'>
              <label htmlFor='name'>Name your config:</label>
              <input
                type='text'
                placeholder='My killer React + Next config'
                name='name'
                id='name'
                // required
                className={`input input-bordered w-full ${state.errors.name && 'input-error'}`}
              />
              <label htmlFor='description'>Short description:</label>
              <input
                type='text'
                name='description'
                required
                id='description'
                placeholder='What makes your config awesome?'
                className={`input input-bordered w-full ${state.errors.description && 'input-error'}`}
              />
              <label htmlFor='config'>Paste your config below:</label>
              <textarea
                name='config'
                required
                id='config'
                className={`textarea leading-4 textarea-bordered textarea-lg w-full ${state.errors.config && 'input-error'}`}
                rows={12}
              ></textarea>
            </div>
          </fieldset>
          <SubmitButton />
        </form>
      </section>
    </main>
  );
};

export default Upload;
