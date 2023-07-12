export interface SectionProps {
  title: string;
  text: string;
  Svg?: SVG;
  reversed?: boolean;
  svgStyle?: React.CSSProperties;
  buttonHref?: string;
  buttonTitle?: string;
  buttonInternal?: boolean;
}
