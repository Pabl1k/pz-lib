import React, {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

export const useClick = (onClick: () => void): LegacyRef<any> => {
  const element: MutableRefObject<HTMLInputElement | undefined> =
    useRef<HTMLInputElement>();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default function UseClickExample() {
  const [placeholder, setPlaceholder] = useState<string>("");
  const changePlaceholder = () => setPlaceholder("Enter your text...");
  const title = useClick(changePlaceholder);
  return (
    <div>
      <h1>Hello!</h1>
      <input
        ref={title}
        placeholder={placeholder}
        onBlur={() => setPlaceholder("")}
      />
    </div>
  );
}
