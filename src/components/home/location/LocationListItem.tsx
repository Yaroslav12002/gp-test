import Image from "next/image";

interface LocationListItemProps {
  location: { title: string; icon: string; alt: string };
}

export default function LocationListItem({ location }: LocationListItemProps) {
  const { title, alt, icon } = location;
  return (
    <li className="flex items-center gap-2.5">
      <Image
        src={`/images/icons/${icon}`}
        width="0"
        height="0"
        alt={alt}
        className="w-[32px] h-[32px]"
      />
      <div>
        <h3 className="text-base laptop:text-md">{title}</h3>
      </div>
    </li>
  );
}
