interface SectionSubTitleProps {
  children: string;
}

export default function SectionSubTitle({ children }: SectionSubTitleProps) {
  return <h3 className="text-baseb laptop:text-lgb">{children}</h3>;
}
