import { useState, useEffect, useRef } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { options } from "./FilterFormData";
import Panel from "./Panel";

function FilterForm({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) return;

      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((options) => {
    return (
      <div
        className="cursor-pointer p-2"
        onClick={() => handleOptionClick(options)}
        key={options.value}
      >
        {options.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="relative mt-6 lg:mt-12">
      <Panel
        className="flex justify-between items-center cursor-pointer py-4 px-6"
        onClick={handleClick}
      >
        {value?.label || "Filter by Region"}
        {isOpen ? <GoChevronDown /> : <GoChevronRight />}
      </Panel>

      {isOpen && (
        <Panel className="absolute mt-2 pl-4">{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default FilterForm;
