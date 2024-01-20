
import { Container } from "components/Container";
import { Link } from "react-router-dom";




export const Header = () => {


  return (
    <>
    <Container>
       <div className="bg-blue-600 ">
        
            <div className="flex justify-center items-center gap-[10px] min-h-[100px]">
                <Link className="text-white" to="/home">Home</Link>
                <Link className="text-white" to="/catalog">Catalog</Link>
                <Link className="text-white" to="/favorites">Favorites</Link> 
        </div>
      
        </div> 
    </Container> 
   </>

  );
};