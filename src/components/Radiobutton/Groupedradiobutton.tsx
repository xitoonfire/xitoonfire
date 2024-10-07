import RadioButton from './Radiobutton';

interface RadioButtonGroupProps {
  name: string;
  options: {
    id: string;
    label: string;
    value: string;
    checked: boolean;
    disabled?: boolean;
  }[];
  onChange: (value: string) => void;
}

function RadioButtonGroup({ name, options, onChange }: RadioButtonGroupProps) {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <div>
      {options.map(({ id, label, value, checked, disabled }) => (
        <RadioButton
          key={id}
          id={id}
          label={label}
          name={name}
          value={value}
          checked={checked}
          onChange={() => handleChange(value)}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default RadioButtonGroup;