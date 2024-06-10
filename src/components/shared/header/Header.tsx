"use client";
import { useState } from "react";
import Container from "../Container";
import LogoLink from "../LogoLink";
import BurgerMenuButton from "./BurgerMenuButton";
import PhoneLink from "./PhoneLink";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);

  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  return (
    <header className="fixed top-0 left-0 z-20 w-full h-[72px] tablet:h-20 bg-blue">
      <Container className="flex justify-between items-center h-full">
        <LogoLink className="w-[78px] tablet:w-[110px] h-10 tablet:h-14" />
        <div className="flex items-center tablet:gap-x-5">
          <PhoneLink />
          <BurgerMenuButton
            isHeaderMenuOpened={isHeaderMenuOpened}
            toggleHeaderMenuOpen={toggleHeaderMenuOpen}
          />
        </div>
      </Container>
      <HeaderMenu
        isHeaderMenuOpened={isHeaderMenuOpened}
        setIsHeaderMenuOpened={setIsHeaderMenuOpened}
      />
    </header>
  );
}
