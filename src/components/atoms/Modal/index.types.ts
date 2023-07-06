export default interface ModalProps {
  opened: boolean;
  close: () => void;
  title: string;
  description: string;
  price: string;
  badges?: string[];
}
