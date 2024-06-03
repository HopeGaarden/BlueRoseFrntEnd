import { useRef, useState, useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const SegmentedControl = ({
  name,
  segments,
  callback,
  defaultIndex = 0,
  controlRef
}) => {
  const [activeIndex, setActiveIndex] = useState(() => {
    const storedIndex = sessionStorage.getItem("activeIndex");
    return storedIndex !== null ? parseInt(storedIndex, 10) : defaultIndex;
  });
  const componentReady = useRef();
  const navigate = useNavigate();

  // Determine when the component is "ready"
  useEffect(() => {
    componentReady.current = true;
  }, []);

  useEffect(() => {
    const activeSegmentRef = segments[activeIndex].ref;
    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    style.setProperty("--highlight-width", `${offsetWidth}px`);
    style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
  }, [activeIndex, callback, controlRef, segments]);

  const onInputChange = (value, index) => {
    setActiveIndex(index);
    sessionStorage.setItem("activeIndex", index.toString()); // Store index in localStorage
    callback(value, index);
    if (segments[index].path) {
      navigate(segments[index].path);
    }
  };

  return (
    <div className="controls-container" ref={controlRef}>
      <div className={`controls ${componentReady.current ? "ready" : "idle"}`}>
        {segments?.map((item, i) => (
          <div
            key={item.value}
            className={`segment ${i === activeIndex ? "active" : ""}`}
            ref={item.ref}
            onClick={() => onInputChange(item.value, i)}
          >
            <input
              type="radio"
              value={item.value}
              id={item.label}
              name={name}
              onChange={() => {}} // Dummy onChange handler to prevent console warnings
              checked={i === activeIndex}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentedControl;
