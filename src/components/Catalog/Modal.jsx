import Modal from '@mui/material/Modal';
import { ReactComponent as  Close} from "../Catalog/x.svg";


export const ModalContent = ({ open, onClose, car, addressDetails, addressDetails2 }) => {



    const { address, id, type, rentalPrice, fuelConsumption, engineSize, mileage, year, accessories, functionalities, img, description} = car;

    const firstLine = [`Id:${id}`, `Year:${year}`, `Type:${type}`]
    const secondLine = [`Fuel Consumption:${fuelConsumption}`, `Engine Size:${engineSize}`]

    const AccessoriesDetails = ({ data }) => {
        const detailsArray = [...data];

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

    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[541px] h-[752px] p-[35px] bg-white rounded-[24px] shadow-lg p-4">
                <div className="relative w-[469px] h-[248px] rounded-[14px] bg-cover bg-center no-repeat"  style={{ backgroundImage: `url(${img})` }}> </div>
                <div className="flex">
            <h2 className="font-medium text-base leading-6 mt-[14px]">
              {car.make}
              <span className="text-blue-500 ml-[4px] font-medium text-base leading-6">{car.model}</span>, <span>{car.year}</span>
            </h2>
          </div>
          <Close className='absolute top-[16px] right-[16px] cursor-pointer' onClick={onClose}/>
               <div className="flex mt-0 items-center">{addressDetails({ address })}<AccessoriesDetails data={firstLine}/></div> 
               <div className="flex items-center"><AccessoriesDetails data={secondLine}/></div> 

                <div className='mt-[14px] text-base text-[14px] leading-5'>{description}</div>
                <div className='font-medium text-[14px] mt-[24px]'>Accessories and functionalities:
                <AccessoriesDetails data={accessories}/>
                <AccessoriesDetails data={functionalities}/>
                </div>
                <div className='font-medium text-[14px] mt-[24px]'>Rental Conditions:
                <div className="flex mt-[8px]"><span className='px-[14px] py-[7px] flex justify-center items-center gap-[8px] rounded-3xl bg-gray-100'>Minimum age:<span>25</span></span> <span className='px-[14px] py-[7px] flex justify-center items-center gap-[8px] rounded-3xl bg-gray-100'>Valid driver’s license</span></div>
                <div className="flex mt-[8px]"><span className='px-[14px] py-[7px] flex justify-center items-center gap-[8px] rounded-3xl bg-gray-100'>Security deposite required</span> <span className='px-[14px] py-[7px] flex justify-center items-center gap-[8px] rounded-3xl bg-gray-100'>Mileage: <span>{mileage}</span></span> <span className='px-[14px] py-[7px] flex justify-center items-center gap-[8px] rounded-3xl bg-gray-100'>Price:<span>{rentalPrice}</span></span></div>
                </div>
                <button  className="mt-[28px] flex items-center hover:bg-blue-800 justify-center py-[12px] px-[50px] bg-blue-600 rounded-[12px] text-[14px] font-semibold leading-[20px] text-white">Rental car</button>
                </div>
                
            </Modal>
        </>
    );
};