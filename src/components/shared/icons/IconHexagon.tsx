interface IconHexagonProps {
  className?: string;
}

export default function IconHexagon({ className }: IconHexagonProps) {
  return (
    <svg
      width="89"
      height="102"
      viewBox="0 0 88 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="icon hexagon"
    >
      <path
        d="M0.5 25.7881L44 0.577901L87.5 25.7881V76.2119L44 101.422L0.5 76.2119V25.7881Z"
        stroke="currentColor"
      />
    </svg>
  );
}
