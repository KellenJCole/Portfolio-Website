import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

export default function MobileFloatingHeader({
  headerRef,
  headerHeight,
}: {
  headerRef: React.RefObject<HTMLDivElement | null>;
  headerHeight: number;
}) {
  return (
    <div
      ref={headerRef}
      className="sticky top-0 z-60 bg-white dark:bg-stone-950 shadow-lg md:hidden"
    >
      <nav className="flex justify-around items-center py-2 text-sm dark:text-stone-300 text-xl text-shadow-sm dark:text-shadow-red-900">
        {['about', 'projects', 'resume', 'contact'].map((id) => (
          <Link
            key={id}
            to={`${id}-sentinel`}
            smooth
            duration={600}
            offset={-headerHeight}
            className="hover:underline cursor-pointer"
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </div>
  );
}
