import React, { useEffect, useState } from 'react';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db, questionDbName } from '../../../firebase/config';
import Loading from '../../molecules/Loading';
import * as styles from './index.module.scss';
import { FData } from '../../../pages/conferenze';

const ConferenceBody = () => {
  const [data, setData] = useState<FData>();

  useEffect(() => {
    const q = query(collection(db, questionDbName), orderBy('createdAt', 'desc'), limit(50));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: FData = [];
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
    <div className={styles.wrap}>
      <h1>Conferenze</h1>
      <p>Domande e info su conferenze real time</p>
      {data ? (
        data.length > 0 ? (
          <div>
            {data.map((conference, key) => (
              <p key={key} className={styles.conference}>
                {conference.title}
                <span className={styles.date}>{new Date(conference.createdAt).toLocaleDateString()}</span>
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
