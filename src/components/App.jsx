import ColorPicker from './ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4caf50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'grey', color: '#607d88' },
  { label: 'pink', color: '#e91e63' },
  { label: 'indigo', color: '#3f51b5 ' },
];

export const App = () => {
  return (
    <div className="Container">
      <h1>React - color picker</h1>
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
};
