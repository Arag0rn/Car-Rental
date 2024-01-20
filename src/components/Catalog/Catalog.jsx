import { Container } from "components/Container.jsx";
import { fetchCars } from "../../Redux/operation.js";
import { filteredCars} from "../../Redux/selector";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModalContent } from "./Modal.jsx";
import { ReactComponent as Heart } from "../Catalog/heart.svg";
import { addFavorite } from "../../Redux/Favorites/FavoritesSlice.js";
import ModelSearchPlaceholder from "./ModelSearch.jsx";
import PricesSelectPlaceholder from "./PricesMenu.jsx";






export const Catalog = ( ) => {
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null)

  const [isFavorite, setIsFavorite] = useState(false);

  
 const handleOpen = (car) => {
    setSelectedCar(car);
    setOpen(true);
  };


  const handleAddFavorite = (car) => {
    dispatch(addFavorite(car));
    setIsFavorite(prevState => !prevState);
  };


    const cars = useSelector(filteredCars);

    console.log(cars);
  
    const dispatch = useDispatch();

    const limit = 12
    useEffect(() => {
        dispatch(fetchCars({ page: 1, limit: limit }));
      }, [dispatch])

      const handleLoadMore = () => {
          const nextLimit = limit + 12; 
          dispatch(fetchCars({ page: 1, limit: nextLimit }));
      };
      
      const trimAddress = (fullAddress) => {
        const parts = fullAddress.split(', '); 
        const trimmedAddress = parts.slice(1).join(', '); 
        return trimmedAddress;
      };

      const AddressDetails = ({ address, rentalCompany }) => {
        const trimmedAddress = trimAddress(address);
        const addressParts = trimmedAddress.split(', ');
        const detailsArray = [...addressParts, rentalCompany];
      
        return (
          <div className="flex flex-wrap">
            {detailsArray.map((word, index) => (
              <div key={index} className={`text-[rgba(18,20,23,0.5)] text-[12px] font-normal leading-5${index < detailsArray.length - 1 ? ' border-r pr-[6px]' : ''}${index > 0 ? ' pl-[6px]' : ''}`}>
                {word}
              </div>
            ))}
          </div>
        );
      };

      const AddressDetails2 = ({ type, model, mileage, accessories }) => {
        const shortestFeature = accessories.reduce((shortest, current) => {
          return current.length < shortest.length ? current : shortest;
        }, accessories[0]);
        const detailsArray = [ type, model, mileage, shortestFeature];
      
        return (
          <div className="flex flex-wrap mt-[8px]">
            {detailsArray.map((word, index) => (
              <div key={index} className={`text-[rgba(18,20,23,0.5)] text-[12px] font-normal leading-5${index < detailsArray.length - 1 ? ' border-r pr-[5px]' : ''}${index > 0 ? ' pl-[6px]' : ''}`}>
                {word}
              </div>
            ))}
          </div>
        );
      };

  

    return (
        <>
    <Container>
  
  <div className="flex gap-[10px] mt-[120px]">
    <ModelSearchPlaceholder className="relative">
    <div className="absolute top-0 right-0">Car brand</div>
    </ModelSearchPlaceholder> 
    <PricesSelectPlaceholder/>
  </div>
 
  <ul className="mt-[20px] flex justify-between flex-wrap gap-x-[29px] gap-y-[50px]">
    {cars.map((car) => (
      <li className="flex flex-col w-[274px]" key={car.id}>
        <div className="relative w-[274px] h-[268px] rounded-[14px] bg-cover bg-center no-repeat"  style={{ backgroundImage: `url(${car.img})` }}>
        <Heart onClick={() => {handleAddFavorite(car);}} className={`absolute top-[14px] right-[14px] cursor-pointer ${isFavorite ? 'fill-red' : 'fill-white'}`}/>
        </div>
        <div className="mt-[20px]" >
          <div className="flex justify-between">
            <h2 className="font-medium text-base leading-6">
              {car.make}
              <span className="text-blue-500 ml-[4px] font-medium text-base leading-6">{car.model}</span>, <span>{car.year}</span>
            </h2>
            <span>{car.rentalPrice}</span>
        
          </div>

          <AddressDetails address={car.address} rentalCompany={car.rentalCompany} type={car.type} model={car.model} />
          <AddressDetails2 mileage={car.mileage} type={car.type} model={car.model} accessories={car.accessories} />

        </div>

        <button onClick={() => handleOpen(car)} className="mt-[28px] flex items-center justify-center w-[274px] h-[44px] p-[12px] bg-blue-600 rounded-[12px] text-[14px] font-semibold leading-[20px] text-white">Learn more</button>
      
      </li>
    ))}
  </ul>
  
  <div onClick={() => {handleLoadMore()}} className="mt-[100px] text-[16px] text-center font-semibold leading-[20px] text-blue-600 cursor-pointer">Load more</div>

  {selectedCar && (
  <ModalContent 
    open={open} 
    car={selectedCar}  
    onClose={() => setOpen(false)}
    addressDetails={AddressDetails}
    addressDetails2={AddressDetails2}
  />
)}

</Container>
        </>
    )
}
