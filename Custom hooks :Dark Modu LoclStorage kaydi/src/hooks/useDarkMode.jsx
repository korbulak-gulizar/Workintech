import { useLocalStorage } from './useLocalStorage';

export function useDarkMode() {
  // testler 'geceModu' key bekliyor
  const [darkMode, setDarkMode] = useLocalStorage('geceModu', false);
  return [darkMode, setDarkMode];
}
