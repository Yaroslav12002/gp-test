import { useTranslations } from "next-intl";
import SectionTitle from "../../shared/SectionTitle";
import Container from "../../shared/Container";
import GallerySlider from "./gallerySlider/GallerySlider";

export default function Gallery() {
  const t = useTranslations("Gallery");

  return (
    <section
      id="gallery"
      className="py-10 tablet:py-5 laptop:py-10 mb-10 tablet:mb-[60px] scroll-mt-[72px] tablet:scroll-mt-20"
    >
      <Container>
        <SectionTitle>{t("title")}</SectionTitle>
      </Container>
      <GallerySlider />
    </section>
  );
}
