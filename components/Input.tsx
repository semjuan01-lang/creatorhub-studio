type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <div
      style={{
        marginBottom: "20px",
        width: "100%",
      }}
    >
      {label && (
        <label
          style={{
            display: "block",
            color: "#ffffff",
            marginBottom: "8px",
            fontWeight: 600,
          }}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: "10px",
          border: "1px solid #334155",
          background: "#0f172a",
          color: "#ffffff",
          outline: "none",
          fontSize: "15px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}
