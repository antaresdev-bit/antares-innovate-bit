const CategoryButtons = ({ activeCategory, onCategoryChange }) => {
    const categories = [
      { id: "all", label: "Todos", icon: "4.png", width: "136.46px" },
      { id: "creativity", label: "Creatividad", icon: "3.png", width: "196.8px" },
      { id: "technology", label: "Tecnologia", icon: "2.png", width: "196.8px" },
      { id: "consulting", label: "Consultoria", icon: "1.png", width: "196.8px" }
    ];
  
    return (
      <div className="flex flex-col sm:flex-row flex-wrap mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] gap-4 border-b pb-[43px]">
        {categories.map(({ id, label, icon, width }) => (
          <button
            key={id}
            onClick={() => onCategoryChange(id)}
            className={`flex items-center justify-center h-[48px] ${
              id === activeCategory 
                ? "bg-white text-[#02021E]" 
                : "border-[1px] border-white bg-transparent text-white"
            } text-[20px] rounded-[32px] hover:bg-white hover:text-[#02021E] transition duration-300 font-bold sm:mr-[19px] lg:mr-[34px]`}
            style={{ fontFamily: "HandelGothic", width }}
          >
            <img
              src={`/assets/images/portafolio/${icon}`}
              alt={`Icono ${label}`}
              className="w-[38.17px] h-[38.17px] mr-2"
            />
            {label}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryButtons;