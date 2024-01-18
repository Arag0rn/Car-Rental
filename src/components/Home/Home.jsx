import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
        <h1 className="text-white">Home</h1>
        <div className="text-blue-500 font-sans font-medium text-base leading-6">
  This is a Tailwind CSS component!
</div>

<Link to="/catalog">Catalog</Link>
        </>
    )
}