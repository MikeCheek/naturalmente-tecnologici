import React, { useEffect, useState } from 'react';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import Loading from '../../molecules/Loading';

type Data = {
  questions: string[];
  createdAt: number;
  id: string;
}[];

const ConferenceBody = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const q = query(collection(db, 'question-answer'), orderBy('createdAt', 'desc'), limit(50));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: Data = [];
      QuerySnapshot.forEach((doc) => {
        //@ts-ignore
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort((a, b) => a.createdAt - b.createdAt);
      setData(sortedMessages);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Conferenze</h1>
      <p>Domande e info su conferenze real time</p>
      {data ? (
        data.length > 0 ? (
          <div>
            {data.map((conference, key) => (
              <p key={key}>
                {conference.id} {new Date(conference.createdAt).toLocaleString()}
              </p>
            ))}
          </div>
        ) : (
          <p>Nessuna conferenza aperta</p>
        )
      ) : (
        <Loading noTitle />
      )}
    </div>
  );
};

export default ConferenceBody;
