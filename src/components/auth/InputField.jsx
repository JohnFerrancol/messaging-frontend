const InputField = ({ id, name, value, label, borderColor, textarea = false, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-[#0BD953]" id={label} htmlFor={id}>
        {label}
      </label>

      {textarea ? (
        <textarea
          className={`${borderColor} text-white font-medium bg-[#2a3942] w-full p-2 rounded-lg shadow-xs border-0 border-b-2 focus:outline-none focus:border-b-3 `}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={`${borderColor} text-white font-medium bg-[#2a3942] w-full p-2 rounded-lg shadow-xs border-0 border-b-2 focus:outline-none focus:border-b-3`}
          id={id}
          name={name}
          value={value}
          type={name === 'password' || name === 'confirm-password' ? 'password' : 'text'}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputField;
