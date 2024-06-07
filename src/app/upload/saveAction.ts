'use server';

import { MongoClient } from 'mongodb';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { redirect } from 'next/navigation';

const validationSchema = z.object({
  name: z.string().trim().min(5).max(25),
  description: z.string().trim().min(5).max(255),
  config: z.string().min(5).max(1023),
});

export const saveAction = async (
  currentState: { message: string },
  formData: FormData,
) => {
  // use mongo client to persist the data
  const uri = process.env.MONGODB_URI || '';
  const client = new MongoClient(uri);
  const clientPromise = client.connect();

  const rawFormData = {
    name: formData.get('name'),
    description: formData.get('description'),
    config: formData.get('config'),
  };

  try {
    validationSchema.parse(rawFormData);
  } catch (error) {
    console.log(error);
    return {
      message: 'Error validating the form data.',
    };
  }

  try {
    clientPromise.then((client) => {
      const collection = client.db('dev').collection('configs');
      collection.insertOne(rawFormData);
    });
  } catch (error) {
    console.log(error);
  }

  redirect('/');
};
