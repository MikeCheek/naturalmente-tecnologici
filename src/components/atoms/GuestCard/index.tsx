import React, { useState } from 'react';
import ImageTemp from '../ImageTemp';
import * as styles from './index.module.scss';
import GuestCardProps from './index.types';
import ShowOnView from '../ShowOnView';
import Button from '../Button';
import program from '../../../utilities/program';
import Badge from '../Badge';

const GuestCard = ({ children, name, description, field, id, mentor }: GuestCardProps) => {
  const [more, setMore] = useState<boolean>(false);

  const daysPerforming = program
    .filter(
      (day) =>
        day.timeline.filter((e) => e.starring).filter((event) => event.starring?.find((star) => star?.name === name))
          .length > 0
    )
    .map((d) => ({ name: d.day, day: d.numberDay }));

  return (
    <ShowOnView>
      <div className={more ? styles.cardActive : styles.card} id={id}>
        {children ?? <ImageTemp name={name} />}
        <div className={styles.details}>
          <span className={styles.title}>
            <h3>{name}</h3>
            {field ? (
              <div className={styles.fieldWrap}>
                {field.map((elem, key) => (
                  <h4 key={key} className={styles.field}>
                    {elem}
                  </h4>
                ))}
              </div>
            ) : null}
            {daysPerforming && daysPerforming.length > 0 ? (
              <div className={styles.badges}>
                {program
                  .map((p) => p.numberDay)
                  .map((day, key) => (
                    <Badge
                      key={key}
                      name={day.toString()}
                      on={daysPerforming.filter((d) => d.day === day).length > 0}
                      href={daysPerforming.find((d) => d.day === day)?.name}
                    />
                  ))}
              </div>
            ) : (
              <></>
            )}
            {mentor ? <p className={styles.speaker}>Mentor: {mentor.join(', ')}</p> : <></>}
          </span>

          <div className={`${more ? styles.aboutMore : styles.about}`}>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
          {description ? (
            <div className={styles.buttonWrap}>
              <Button
                text={`Leggi di${more ? ' meno' : ' più'}`}
                title={`Leggi di${more ? ' meno' : ' più'}`}
                onClick={() => setMore((state) => !state)}
                simple
              />
              <div className={styles.fade}></div>
            </div>
          ) : (
            <></>
          )}

          {/* {theme ? (
          <div className={styles.theme}>
            <span className={styles.pre}>Tema della conferenza</span>
            <div className={styles.quote}>
              <i>“{theme}„</i>
            </div>
          </div>
        ) : null} */}
        </div>
      </div>
    </ShowOnView>
  );
};

export default GuestCard;
