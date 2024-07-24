export interface ButtonProps {
  hoverWhite?: boolean;
  text: string;
  onClick?: () => void;
  title: string;
  href?: string;
  internal?: boolean;
  bigger?: boolean;
  children?: React.ReactNode;
  simple?: boolean;
}
