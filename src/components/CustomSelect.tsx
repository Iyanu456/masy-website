import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
  label?: string;
  options: string[];
  onChange?: (value: string) => void; // notifies parent
}

export default function CustomSelect({ label, options, onChange }: CustomSelectProps) {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);
  const [customValue, setCustomValue] = useState(""); // for "Others, please specify"

  const handleSelect = (opt: string) => {
    setSelected(opt);
    setOpen(false);

    // Clear custom value if user selects a regular option
    if (opt !== "Others, please specify") setCustomValue("");

    // Notify parent
    if (onChange) onChange(opt === "Others, please specify" ? customValue : opt);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className="relative w-full">
      {label && <label className="block mb-4 text-sm font-medium">{label}</label>}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center rounded-lg px-4 py-3 text-gray-700 bg-[#FAFAFA]"
      >
        {selected}
        <ChevronDown size={18} className="text-gray-500 ml-2" />
      </button>

      {/* Options */}
      {open && (
        <ul className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-48 overflow-y-auto">
          {options.map((opt, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(opt)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selected === opt ? "bg-gray-50 font-medium" : ""
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}

      {/* Custom input for "Others" */}
      {selected === "Others, please specify" && (
        <input
          type="text"
          placeholder="Please specify"
          value={customValue}
          onChange={handleCustomChange}
          className="mt-2 w-full rounded-lg px-4 py-3 text-gray-700 bg-[#FAFAFA]"
        />
      )}
    </div>
  );
}
