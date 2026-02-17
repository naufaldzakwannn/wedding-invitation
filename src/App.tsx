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

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* COVER UNDANGAN */}
      {!opened && <InvitationCover onOpen={() => setOpened(true)} />}

      {/* ISI UNDANGAN */}
      {opened && (
        <main className="max-w-4xl mx-auto px-4">
          <ThemeToggle />
          {/* <MusicPlayer /> */}

          <Hero />
          <GuestName />
          <Countdown date="2026-08-12" />
          <Couple />
          <Event />
          <Gallery />
          <RSVP />
          <Gift />
          <Protocol />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
