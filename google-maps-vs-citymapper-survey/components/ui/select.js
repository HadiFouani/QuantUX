export function Select({ children, value, onChange }) {
    return (
      <select
        className="border p-2 rounded-md w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {children}
      </select>
    );
  }
  
  export function SelectItem({ children, value }) {
    return <option value={value}>{children}</option>;
  }
  