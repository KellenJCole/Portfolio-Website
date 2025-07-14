import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

export default function DesktopSidebar() {
  const ids = ['about', 'projects', 'resume', 'contact'];

  return (
    <div className="hidden md:block fixed top-[20%] right-[5%] h-screen z-60">
      <nav className="flex flex-col justify-around items-center py-2 font-mono md:text-2xl lg:text-3xl">
        {ids.map((id) => (
          <Link
            key={id}
            to={`${id}-sentinel`}
            smooth={true}
            duration={600}
            offset={0}
            isDynamic={true}
            className="hover:underline cursor-pointer mb-2"
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </div>
  );
}
