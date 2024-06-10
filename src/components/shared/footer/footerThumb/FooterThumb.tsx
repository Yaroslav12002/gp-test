import PrivacyPolicyLink from "./PrivacyPolicyLink";
import Copyright from "./Copyright";

export default function FooterThumb() {
  return (
    <div className="flex flex-col tablet:flex-row items-center tablet:justify-between w-full pt-5 tablet:pt-4 border-t-[1px] border-solid border-white-text">
      <PrivacyPolicyLink />
      <Copyright />
    </div>
  );
}
