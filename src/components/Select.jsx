import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";
export default function Select({
  title,
  selectRef,
  defaultValue,
  options,
  className,
}) {
  return (
    <div className="relative">
      <select
        ref={selectRef}
        required
        defaultValue={defaultValue}
        className={twMerge(
          `w-24 appearance-none border border-gray-300 bg-white p-4 dark:text-night ${className}`,
        )}
      >
        <option value={defaultValue} disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 pr-3 dark:text-night">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
