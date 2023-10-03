function Input({ type, name, value, onChange, placeHolder }) {
  return (
    <div>
      <input
        className="border-2 border-blue-400 py-2 w-72 px-2 outline-none mb-2 rounded-lg"
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

export default Input;
