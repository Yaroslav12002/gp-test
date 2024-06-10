import PolicyTitle from "@/src/components/policy/PolicyTitle";
import PolicyVersion from "@/src/components/policy/PolicyVersion";
import Section1 from "@/src/components/policy/Section1";
import Section2 from "@/src/components/policy/Section2";
import Section3 from "@/src/components/policy/Section3";
import Section4 from "@/src/components/policy/Section4";
import Section5 from "@/src/components/policy/Section5";
import Section6 from "@/src/components/policy/Section6";
import Section7 from "@/src/components/policy/Section7";
import Container from "@/src/components/shared/Container";

export default function Policy() {
  return (
    <Container className="pt-[96px] tablet:pt-[112px] laptop:pt-[132px] pb-8 laptop:pb-[60px] text-base laptop:text-lg">
      <PolicyTitle />
      <PolicyVersion />
      <ul>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </ul>
    </Container>
  );
}
