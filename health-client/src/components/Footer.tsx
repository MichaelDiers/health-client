export function Footer({
  isLightTheme,
  toggleLightTheme,
}: {
  isLightTheme: boolean,
  toggleLightTheme: () => void,
}) {
  return (
    <footer>
      <span className='material-symbols-outlined button' onClick={toggleLightTheme}>{isLightTheme ? 'dark_mode' : 'light_mode'}</span>
    </footer>
  )
}
