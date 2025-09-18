// <<<<<<< HEAD
import Footer from "../Footer/Footer"
import Galleries from "./Gallery/Galleries"
import Header from "./Header/Header"
import LastStories from "./LastStories/LastStories"
import PopularCities from "./PopularCities/PopularCities"
import TourCards from "./TourCards/TourCards"
import WildLifeAlaska from "./WildLifeAlaska/WildLifeAlaska"


const Home = () => {

    return(
        <>
        
            <Header/>
            <PopularCities/>
            <TourCards/>
            <WildLifeAlaska/>
            <Galleries/>
            <LastStories/>
            <Footer/>
        </>
    )
}
export default Home
// =======
// import DisplayProduct from "./Display/DisplayProduct";
// import Header from "./Header/Header";
// import PopularCities from "./PopularCities/PopularCities";

// const Home = () => {
//   return (
//     <>
//       <Header />
//       <PopularCities />
//       <DisplayProduct />
//     </>
//   );
// };
// export default Home;
// >>>>>>> f5606a320b3ffe70cd426b911378b9143c14dc03
