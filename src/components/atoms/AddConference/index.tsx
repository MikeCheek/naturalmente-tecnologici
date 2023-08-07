import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import * as styles from './index.module.scss';
import Button from '../Button';
import { db, questionDbName } from '../../../firebase/config';
import { addDoc, collection } from 'firebase/firestore';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Index = () => {
  const [title, setTitle] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [secret, setSecret] = useState<string>();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const addConference = () => {
    if (startDate != null && endDate != null && title && password && secret) {
      if (process.env.GATSBY_SECRET === secret)
        addDoc(collection(db, questionDbName), {
          questions: [],
          createdAt: new Date(Date.now()).getTime(),
          title: title,
          startAt: startDate.getTime(),
          endAt: endDate.getTime(),
          password: password,
        })
          .then(() => {
            alert('Aggiunto');
          })
          .catch((e) => {
            alert('Error');
            console.error(e);
          });
      else alert('Secret errato');
    } else alert('Compila tutti i campi');
  };

  return (
    <div className={styles.wrap}>
      <h1>Aggiungi una conferenza interattiva!</h1>
      <input
        className={styles.inputText}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titolo conferenza"
      />
      <input
        className={styles.inputText}
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <DateTimePicker className={styles.inputDate} onChange={setStartDate} value={startDate} />
      <DateTimePicker className={styles.inputDate} onChange={setEndDate} value={endDate} />
      <input
        className={styles.inputText}
        type="password"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        placeholder="Secret word"
      />
      <Button text="Aggiungi" title="Aggiungi conferenza" onClick={addConference} />
    </div>
  );
};

export default Index;
