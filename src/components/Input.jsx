export const Input = ({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMessage,
  validationMessage,
  onBlurHandler,
  textarea,
}) => {
  const handleValueChange = (event) => {
    onChangeHandler(event.target.value, field);
  };

  const handleInputBlur = (event) => {
    onBlurHandler(event.target.value, field);
  };

  return (
    <>
      <div className="label">
        <span className="">{label}</span>
      </div>
      {textarea ? (
        <textarea
          type={type}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
          rows={5}
          style={{ maxWidth: "400px" }}
        />
      ) : (
        <input
          className="input"
          type={type}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
        />
      )}

      <span className="error-message">
        {showErrorMessage && validationMessage}
      </span>
    </>
  );
};
