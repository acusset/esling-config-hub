'use server';

import { MongoClient } from 'mongodb';
import { z } from 'zod';

const validationSchema = z.object({
  name: z.string().trim().min(5).max(25),
  description: z.string().trim().min(5).max(255),
  config: z.string().min(5).max(1023),
});

export type FormState = {
  message: string;
  errors: Record<string, string[]>;
  isPending: boolean;
};

export const saveAction = async (
  currentState: FormState,
  formData: FormData, //payload
) => {
  // use mongo client to persist the data
  const uri = process.env.MONGODB_URI || '';
  const client = new MongoClient(uri);

  const rawFormData = {
    name: formData.get('name'),
    description: formData.get('description'),
    config: formData.get('config'),
  };

  const validationFields = validationSchema.safeParse(rawFormData);

  if (!validationFields.success) {
    console.log(validationFields.error.flatten());
    return {
      ...currentState,
      isPending: false,
      errors: validationFields.error.flatten().fieldErrors,
    };
  }

  try {
    const connection = await client.connect();
    const result = await connection
      .db('dev')
      .collection('configs')
      .insertOne(rawFormData);
  } catch (error) {
    return {
      errors: {},
      isPending: false,
      message: 'An error occurred while saving the config',
    };
  }

  // redirect('/?submition=true');

  return {
    errors: {},
    isPending: false,
    message: 'Config saved successfully!',
  } as FormState;
};
