import Container from "../Container";
import FooterNavigationMenu from "./FooterNavigationMenu";
import ContactInfo from "./contactInfo/ContactInfo";
import LogoLink from "../LogoLink";
import FooterThumb from "./footerThumb/FooterThumb";
import SocialLinks from "../socialLinks/SocialLinks";
import FooterBgImages from "./FooterBgImages";

export default function Footer() {
  return (
    <footer className="w-full bg-primary py-10">
      <Container className="flex flex-col items-center tablet:items-start gap-y-5">
        <LogoLink className="laptop:hidden relative z-10 w-[110px] h-14" />
        <div className="relative flex flex-col gap-y-5 tablet:gap-y-0 tablet:flex-row tablet:justify-between tablet:w-full">
          <LogoLink className="hidden laptop:block relative z-10 w-[110px] h-14" />
          <FooterNavigationMenu />
          <div className="flex flex-col justify-between gap-y-6 tablet:gap-y-0 tablet:w-1/2 laptop:w-[45%]">
            <ContactInfo />
            <SocialLinks />
          </div>
          <FooterBgImages />
        </div>
        <FooterThumb />
      </Container>
    </footer>
  );
}
