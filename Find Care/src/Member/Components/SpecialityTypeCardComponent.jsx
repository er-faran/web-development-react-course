/* eslint-disable react/prop-types */

const SpecialityTypeCardComponent = () => {
  const specialityCardData = [
    // {
    //   imgSrc:
    //     "data:image/svg+xml,%3csvg%20width='126'%20height='…ED'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
    //   specialityText: "General physician",
    //   id: "1",
    // },
    {
      imgSrc: "https://prescripto.vercel.app/assets/Gynecologist-Av1zZu4d.svg",
      specialityText: "Gynecologist",
      id: "2",
    },
    // {
    //   imgSrc:
    //     "data:image/svg+xml,%3csvg%20width='127'%20height='…ED'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
    //   specialityText: "Dermatologist",
    //   id: "3",
    // },
    {
      imgSrc: "https://prescripto.vercel.app/assets/Pediatricians-C6nmx5n8.svg",
      specialityText: "Pediatricians",
      id: "4",
    },
    {
      imgSrc: "	https://prescripto.vercel.app/assets/Neurologist-CuaLxNpX.svg",
      specialityText: "Neurologist",
      id: "5",
    },
    {
      imgSrc:
        "	https://prescripto.vercel.app/assets/Gastroenterologist-CTgzRFeY.svg",
      specialityText: "Gastroenterologist",
      id: "6",
    },
  ];

  return specialityCardData.map((item) => {
    return (
      <div key={item?.id} className="w-[40%] lg:w-28">
        <div className="flex justify-center mb-2">
          <img
            className="w-16 sm:w-24 transform hover:scale-110 transition-transform"
            src={item?.imgSrc}
          />
        </div>
        <div className="text-xs">{item?.specialityText}</div>
      </div>
    );
  });
};

export default SpecialityTypeCardComponent;
