import React, { useState } from 'react';
import * as styles from './index.module.scss';
import { SectionProps } from './index.types';
import { ReactComponent as ConnectionLeft } from '../../../assets/connectionLeft.svg';
import { ReactComponent as ConnectionRight } from '../../../assets/connectionRight.svg';
import { useInView } from 'react-intersection-observer';
import Button from '../../atoms/Button';

const Index = ({
  title,
  text,
  Svg,
  reversed = false,
  svgStyle,
  buttonHref,
  buttonInternal = true,
  buttonTitle,
  ButtonIcon,
}: SectionProps) => {
  const [on, setOn] = useState<boolean>(false);
  const [ref, inView, _entry] = useInView({
    threshold: 0.5,
    // rootMargin: '10% 0px -20% 0px',
    fallbackInView: true,
    triggerOnce: true,
  });

  const handleClick = () => {
    setOn(true);
    setTimeout(() => setOn(false), 10000);
  };

  const conditionalStyle: React.CSSProperties = inView
    ? {}
    : reversed
    ? { transform: 'translateX(70%) rotate(45deg)', opacity: 0 }
    : { transform: 'translateX(-70%) rotate(-45deg)', opacity: 0 };

  return (
    <div className={reversed ? styles.wrapReversed : styles.wrap}>
      <div ref={ref}>
        <div className={styles.leave} style={conditionalStyle}>
          {reversed ? (
            <ConnectionRight className={styles.connectionRight} />
          ) : (
            <ConnectionLeft className={styles.connectionLeft} />
          )}
          <div className={reversed ? styles.textReversed : styles.text}>
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
            {buttonHref && buttonTitle ? (
              <Button text={buttonTitle} title={buttonTitle} href={buttonHref} internal={buttonInternal}>
                {ButtonIcon ? (
                  <ButtonIcon width={20} height={20} fill="var(--nt-orange)" className={styles.buttonIcon} />
                ) : (
                  <></>
                )}
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {Svg ? (
        <Svg
          className={`${reversed ? styles.svgReversed : styles.svg} ${on ? '' : styles.svgAnimate}`}
          style={{ animationDelay: title.length / 5 + 's', opacity: inView ? 1 : 0, ...svgStyle }}
          width={240}
          fill={on ? 'var(--nt-orange)' : 'var(--nt-light-green)'}
          onClick={handleClick}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Index;
