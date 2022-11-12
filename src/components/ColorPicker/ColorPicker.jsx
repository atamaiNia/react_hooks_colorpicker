import { useState } from 'react';
import './ColorPicker.css';
import classNames from 'classnames';

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setactiveOptionIdx] = useState(0);

  const makeOptionClassName = index => {
    return index === activeOptionIdx
      ? 'ColorPicker__option--active'
      : 'ColorPicker__option';
  };

  const { label } = options[activeOptionIdx];

  return (
    <div className="ColorPicker">
      <h1 className="ColorPicker__title">
        Вибраний колір: <span>{label}</span>
      </h1>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setactiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
