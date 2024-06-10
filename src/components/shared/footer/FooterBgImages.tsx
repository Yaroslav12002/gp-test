import IconHexagon from "../icons/IconHexagon";

export default function FooterBgImages() {
  return (
    <div className="hidden laptop:block absolute top-0 right-0 w-[129px] h-[296px] text-white-bgSecondary opacity-20">
      <IconHexagon className="absolute top-0 right-0" />
      <IconHexagon className="absolute top-[97px] left-0" />
      <IconHexagon className="absolute bottom-0 right-0" />
    </div>
  );
}
