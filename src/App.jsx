import React from 'react';
import ScanScroll from './components/sections/ScanScroll';
import FloatingCards from './components/sections/FloatingCards';
import MapSection from './components/sections/MapSection';
import SuccessSection from './components/sections/SuccessSection';
import { FeatureText } from './components/ui/FeatureText';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <div className="relative w-full bg-[var(--bg-primary)] min-h-screen selection:bg-[var(--accent-purple)] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Desktop Layout: Split Screen */}
      <div className="lg:flex flex-row-reverse w-full relative">

        {/* RIGHT COLUMN: Sticky Animation Container */}
        {/* On mobile: Fixed background. On Desktop: Sticky on right. */}
        <div className="fixed inset-0 lg:static lg:w-1/2 lg:h-screen lg:sticky lg:top-0 z-0 lg:z-10">
          <ScanScroll />
          {/* Overlays that track scroll but live in the visual container */}
          <FloatingCards />
          <MapSection />
          <SuccessSection />
        </div>

        {/* LEFT COLUMN: Scrollable Content */}
        {/* On mobile: Transparent over fixed bg. On Desktop: Solid/Frosted bg on left. */}
        <div className="relative w-full lg:w-1/2 z-10 lg:z-20 pointer-events-none lg:pointer-events-auto">

          {/* Spacer for mobile to show initial phone state */}
          <div className="h-[50vh] lg:h-20" />

          {/* SECTION 1: INTRO */}
          <div className="h-[80vh] flex items-center justify-center lg:justify-start lg:pl-20 px-6">
            <FeatureText
              title="Revolutionizing offline shopping"
              subtitle="Scan before you buy. Save instantly. Decide smarter."
              align="left"
              isStatic={true} // New prop to disable fixed positioning logic in FeatureText
            />
          </div>

          {/* SECTION 2: SCAN */}
          <div className="h-[80vh] flex items-center justify-center lg:justify-start lg:pl-20 px-6">
            <FeatureText
              title="See the real price. Instantly."
              subtitle="No guessing. No haggling."
              align="left"
              isStatic={true}
            />
          </div>

          {/* SECTION 3: PRICE */}
          <div className="h-[80vh] flex items-center justify-center lg:justify-start lg:pl-20 px-6">
            <FeatureText
              title="Best Local Deal"
              subtitle="All fees included. 100% transparent pricing."
              align="left"
              isStatic={true}
            />
          </div>

          {/* SECTION 4: MAP */}
          <div className="h-[80vh] flex items-center justify-center lg:justify-start lg:pl-20 px-6">
            <FeatureText
              title="Online vs Local."
              subtitle="Your call."
              align="left"
              isStatic={true}
            />
          </div>

          {/* SECTION 5: SUCCESS */}
          <div className="h-[80vh] flex items-center justify-center lg:justify-start lg:pl-20 px-6">
            <FeatureText
              title="Scan. Compare. Save."
              subtitle="The future of shopping is here."
              align="left"
              isStatic={true}
            />
          </div>

          <div className="h-[20vh]" />
        </div>

      </div>

      {/* Mobile Scroll Spacer to drive the fixed logic if needed, but above we just use normal flow */}
      {/* We need a tall container to drive the ScrollTrigger if we use body scrub.
          But here we have real content "divs".
          We need to ensure ScanScroll/Animation triggers map to these Sections.
      */}

    </div>
  );
}

export default App;
