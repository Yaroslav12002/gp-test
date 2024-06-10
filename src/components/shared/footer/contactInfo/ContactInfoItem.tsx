import { ReactNode } from "react";

interface ContactInfoItemProps {
  contact: { icon: ReactNode; url: string; name: string };
}

export default function ContactInfoItem({ contact }: ContactInfoItemProps) {
  const { icon, url, name } = contact;
  return (
    <li className="flex items-center py-1 gap-y-1">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="flex justify-center items-center gap-2 outline-none text-base text-white-text laptop:hover:text-accent laptop:focus-visible:text-accent 
        transition-[color] duration-[300ms] ease-out-quart"
      >
        <div className="w-6 h-6">{icon}</div>
        {name}
      </a>
    </li>
  );
}
