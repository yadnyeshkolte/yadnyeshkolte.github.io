import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
                <Moon className="h-5 w-5 text-gray-700" />
            )}
        </button>
    );
};

export default ThemeToggle;