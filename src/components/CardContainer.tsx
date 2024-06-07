'use server';
import React from 'react';
import Card from '@/components/Card';
import { MongoClient } from 'mongodb';

const CardContainer = async () => {
  let list: React.JSX.Element[] = [];
  const uri = process.env.MONGODB_URI || '';
  const client = new MongoClient(uri);

  try {
    const collection = client.db('dev').collection<{
      name: string;
      description: string;
      config: string;
    }>('configs');
    const configs = await collection.find().toArray();

    list = configs.map((config) => {
      return <Card key={config._id.toString()} name={config.name}></Card>;
    });

    console.log(configs, list.length);
  } catch (error) {
    console.log(error);
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
      {list}
    </section>
  );
};

export default CardContainer;
