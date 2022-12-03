const Button = (props) => {
  const { data, handleClick, customStyle } = props;

  return (
    <button className="btn-container" style={customStyle} onClick={handleClick}>
      {data}
    </button>
  );
};

export default Button;
