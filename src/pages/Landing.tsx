import MobileFloatingHeader from '../components/MobileFloatingHeader';
import DesktopSidebar from '../components/DesktopSidebar';
import IntroTypeWriter from '../components/IntroTypewriter';
import Disclaimer from '../components/Disclaimer';
import { useHeaderSize } from '../hooks/useHeaderSize';

export default function Landing() {
  const { ref: headerRef, height: headerHeight } = useHeaderSize();
  return (
    <div className="flex flex-col min-h-screen">
      <Disclaimer />
      <section
        id="home"
        className="
            sticky top-0
            flex items-center justify-center
            bg-timberwolf dark:bg-dark-1
            z-10
          "
        style={{ height: `calc(100vh - ${headerHeight}px)` }}
      >
        <IntroTypeWriter />
      </section>
      <MobileFloatingHeader headerRef={headerRef} headerHeight={headerHeight} />
      <DesktopSidebar />
      {/* About “card” */}
      <div
        id="about-sentinel"
        style={{ height: 0, scrollMarginTop: `${headerHeight}px` }}
      />
      <section
        id="about"
        className="
            sticky top-0
            h-screen
            bg-ashgray dark:bg-dark-2
            z-20
          "
      >
        <div className="pt-16 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 dark:text-gray-300">
            About Me
          </h2>
          {/* …about content… */}
        </div>
      </section>

      {/* Projects “card” */}
      <div
        id="projects-sentinel"
        style={{ height: 0, scrollMarginTop: `${headerHeight}px` }}
      />
      <section
        id="projects"
        className="
            sticky top-0
            h-screen
            bg-olivine dark:bg-dark-3
            z-30
          "
      >
        <div className="pt-16 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 dark:text-gray-300">
            Projects
          </h2>
          {/* …projects content… */}
        </div>
      </section>

      {/* Resume “card” */}
      <div
        id="resume-sentinel"
        style={{ height: 0, scrollMarginTop: `${headerHeight}px` }}
      />
      <section
        id="resume"
        className="
            sticky top-0
            h-screen
            bg-battleshipgray dark:bg-dark-4
            z-40
          "
      >
        <div className="pt-16 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 dark:text-gray-300">
            Resume & Skills
          </h2>
          {/* …resume content… */}
        </div>
      </section>

      {/* Contact “card” */}
      <div
        id="contact-sentinel"
        style={{ height: 0, scrollMarginTop: `${headerHeight}px` }}
      />
      <section
        id="contact"
        className="
            sticky top-0
            h-screen
            bg-englishviolet dark:bg-dark-5
            z-50
          "
      >
        <div className="pt-16 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 dark:text-gray-300">
            Contact
          </h2>
          {/* …contact content… */}
        </div>
      </section>
    </div>
  );
}
