const Categories = ({ slide }) => {
  const { image, name } = slide;
  return (
    <div className="item pb-8">
      <img src={image} alt={name} className="rounded-xl" />
      <h3 className="mt-4 font-medium text-lg">{name}</h3>
    </div>
  );
};

export default Categories;
