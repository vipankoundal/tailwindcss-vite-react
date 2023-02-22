const Button = (props) => {
  return (
    <div className="bg-blue-700 py-2 px-6 my-10 text-white inline-block font-medium rounded-full">
      {props.name}
    </div>
  );
};

export default Button;
