const FormInput = ({ label, type, handleChange, place }) => {
  return (
    <div className="mb-0">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id={label}
        type={type}
        name={label}
        placeholder={place}
    }
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
