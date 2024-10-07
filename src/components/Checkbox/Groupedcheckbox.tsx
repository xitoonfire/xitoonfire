import Checkbox from './Checkbox';

interface CheckboxGroupProps {
  checkboxes: {
    id: string;
    label: string;
    checked: boolean;
    disabled?: boolean;
  }[];
  onChange: (id: string) => void;
}

function CheckboxGroup({ checkboxes, onChange }: CheckboxGroupProps) {
  const handleChange = (id: string) => {
    onChange(id);
  };

  return (
    <div>
      {checkboxes.map(({ id, label, checked, disabled }) => (
        <Checkbox
          key={id}
          id={id}
          label={label}
          checked={checked}
          onChange={() => handleChange(id)}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default CheckboxGroup;