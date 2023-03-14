function ToggleTheme({ icon, onClick }) {
  return (
    <button onClick={onClick} className="flex gap-2">
      <span className="text-[#111517] dark:text-white">{icon}</span>
      <p className="text-xs font-semibold text-[#111517] dark:text-white md:text-sm">
        Dark Mode
      </p>
    </button>
  );
}

export default ToggleTheme;
