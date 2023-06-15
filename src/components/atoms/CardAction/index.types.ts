export interface FastActionProps {
  icon: React.ReactElement<HTMLOrSVGElement>;
  text: string;
  buttonText: string;
  buttonHref: string;
  linkType?: LinkType;
  description?: string;
  tag?: string;
}
