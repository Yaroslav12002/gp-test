interface SectionTitleProps {
  children: string;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-lgb laptop:text-xlsb ">{children}</h2>;
}
