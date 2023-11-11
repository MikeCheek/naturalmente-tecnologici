export default interface ContattaciCardProps {
  title: string;
  text: string;
  link: string;
  opened: boolean;
  minimized: boolean;
  open: () => void;
  close: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
