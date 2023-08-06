import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import * as styles from './index.module.scss';
import Button from '../Button';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Index = () => {
  const [startDate, setStartDate] = useState<Value>(new Date());
  const [endDate, setEndDate] = useState<Value>(new Date());

  return (
    <div className={styles.wrap}>
      <h1>Aggiungi una conferenza interattiva!</h1>
      <input className={styles.inputText} type="text" placeholder="Titolo conferenza" />
      <input className={styles.inputText} type="text" placeholder="Password" />
      <DateTimePicker className={styles.inputDate} onChange={setStartDate} value={startDate} />
      <DateTimePicker className={styles.inputDate} onChange={setEndDate} value={endDate} />
      <Button text="Aggiungi" title="Aggiungi conferenza" onClick={() => {}} />
    </div>
  );
};

export default Index;
