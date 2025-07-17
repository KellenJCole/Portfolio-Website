import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="rounded-full hover:bg-gray-950 dark:hover:bg-gray-300"
    >
      {isDark ? '🌞' : '🌙'}{' '}
    </button>
  );
}
