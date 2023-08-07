import React, { useEffect, useState } from 'react';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db, questionDbName } from '../../../firebase/config';
import Loading from '../../molecules/Loading';
import * as styles from './index.module.scss';
import { FData } from '../../../pages/conferenze';
import Button from '../Button';
import { decryptData } from '../../../utilities/crypto';

const ConferenceBody = () => {
  const [data, setData] = useState<FData>();
  const [selected, setSelected] = useState<number>();
  const [code, setCode] = useState<string>('');
  const [activeConference, setActiveConference] = useState<number>();

  useEffect(() => {
    const q = query(collection(db, questionDbName), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: FData = [];
      QuerySnapshot.forEach((doc) => {
        //@ts-ignore
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort((a, b) =>
        a.startAt - b.startAt != 0 ? a.startAt - b.startAt : a.createdAt - b.createdAt
      );
      setData(sortedMessages);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const entra = (id: number) => {
    if (data && selected)
      if (code === decryptData(data[selected].password)) {
        setActiveConference(id);
      } else alert('Codice errato');
    console.log(activeConference);
  };

  return (
    <div className={styles.wrap}>
      {activeConference && data ? (
        <>
          <h1>{data[activeConference].title}</h1>
        </>
      ) : (
        <>
          <h1>Conferenze</h1>
          <p>Fai domande lungo la conferenza</p>
          {data ? (
            data.length > 0 ? (
              <div className={styles.conferences}>
                {data.map((conference, key) => (
                  <div
                    key={key}
                    onClick={() => {
                      if (selected != key) setCode('');
                      setSelected(key);
                    }}
                    className={selected === key ? styles.conferenceActive : styles.conference}
                  >
                    <span className={styles.date}>
                      Start: {new Date(conference.startAt).toLocaleString()}
                      <br />
                      End: {new Date(conference.endAt).toLocaleString()}
                    </span>
                    <p>{conference.title}</p>
                    {selected === key ? (
                      <>
                        <p style={{ marginBottom: 0 }}>Inserisci il codice:</p>
                        <input
                          className={styles.inputText}
                          type="password"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                        />
                        <Button title="Entra" text="Entra" onClick={() => entra(key)} />
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>Nessuna conferenza aperta</p>
            )
          ) : (
            <Loading noTitle />
          )}
        </>
      )}
    </div>
  );
};

export default ConferenceBody;
