import { useState } from "react";

import Hero from "./components/Hero";
import GuestName from "./components/GuestName";
import Couple from "./components/Couple";
import Event from "./components/Event";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Gift from "./components/Gift";
import Protocol from "./components/Protocol";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import InvitationCover from "./components/InvitationCover";
import ThemeToggle from "./components/ThemeToggle";
import Animate from "./components/Animate";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* COVER UNDANGAN */}
      {!opened && <InvitationCover onOpen={() => setOpened(true)} />}

      {/* ISI UNDANGAN */}
      {opened && (
        <div className="overflow-hidden">
          <ThemeToggle />
          <MusicPlayer />

          <main className="max-w-4xl mx-auto">
            {/* Hero - fade in langsung tanpa delay */}
            <Animate direction="fade" duration={1200}>
              <Hero groomName="Ahmad Fauzi" brideName="Aisyah Putri" date="12 Agustus 2026" />
            </Animate>

            {/* Guest Name - dari bawah */}
            <Animate direction="up" delay={100} duration={800}>
              <GuestName />
            </Animate>

            {/* Countdown - scale in */}
            <Animate direction="scale" delay={150} duration={900}>
              <Countdown date="2026-08-12" />
            </Animate>

            {/* Couple - dari bawah */}
            <Animate direction="up" delay={100} duration={800}>
              <Couple />
            </Animate>

            {/* Event - dari bawah */}
            <Animate direction="up" delay={100} duration={800}>
              <Event />
            </Animate>

            {/* Gallery - blur to sharp */}
            <Animate direction="blur" duration={1000}>
              <Gallery />
            </Animate>

            {/* RSVP - dari bawah */}
            <Animate direction="up" delay={100} duration={800}>
              <RSVP />
            </Animate>

            {/* Gift - scale in */}
            <Animate direction="scale" delay={100} duration={800}>
              <Gift />
            </Animate>

            {/* Protocol - dari bawah */}
            <Animate direction="up" delay={100} duration={800}>
              <Protocol />
            </Animate>

            {/* Footer - fade in */}
            <Animate direction="fade" duration={800}>
              <Footer />
            </Animate>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
