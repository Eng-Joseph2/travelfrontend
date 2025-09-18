import React, { useState } from "react";
import CitiesStyle from "./PopularCities.module.css";

const PopularCities = () => {
  const Cities = [
    {
      id: 1,
      city: "New York",
      description:
        "New York waa magaalada aan waligeed seexan, xarunta dhaqaalaha, ganacsiga, iyo madadaalada caalamiga ah. Waxaa caan ku ah Statue of Liberty iyo Times Square.",
      image:
        "https://i.pinimg.com/1200x/d6/fe/08/d6fe08808d5d86569f5ec900a4aac179.jpg",
    },
    {
      id: 2,
      city: "California",
      description:
        "California waa gobolka qorraxda iyo xeebaha quruxda badan, sidoo kale waa hoyga Hollywood iyo Silicon Valley. Waxay isku darsataa qurux dabiici ah iyo hal-abuurnimo.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
    {
      id: 3,
      city: "Alaska",
      description:
        "Alaska waa dhul baraf, buuro dhaadheer iyo duur dabiici ah oo qurux badan. Waxaa loogu yaqaanaa safarada adventure-ka iyo muuqaalka dabiiciga ah ee cajiibka ah.",
      image:
        "https://i.pinimg.com/1200x/41/43/5c/41435c3021b6cb21eb58197ef2de384a.jpg",
    },
    {
      id: 4,
      city: "Sidney",
      description:
        "Sidney waa magaalo xeebeed qurux badan oo ku taalla Australia, caan ku ah Opera House, Harbour Bridge, iyo xeebaha Bondi Beach.",
      image:
        "https://i.pinimg.com/1200x/be/a2/1b/bea21b4ccc54d80679542e44ce849f57.jpg",
    },
    {
      id: 5,
      city: "Dubai",
      description:
        "Dubai waa magaalo casri ah oo ku taalla UAE, caan ku ah Burj Khalifa, dukaamada waaweyn, iyo nolosha raaxada.",
      image:
        "https://i.pinimg.com/736x/52/9d/8c/529d8c314036320b243c46c8779acb19.jpg",
    },
    {
      id: 6,
      city: "London",
      description:
        "London waa caasimadda Boqortooyada Ingiriiska, caan ku ah Big Ben, Buckingham Palace, iyo isku dhafka taariikhda iyo casriga.",
      image:
        "https://i.pinimg.com/736x/4b/a5/58/4ba558776c99e84782d9a2c15040f455.jpg",
    },
    {
      id: 7,
      city: "Tokyo",
      description:
        "Tokyo waa caasimadda Japan, magaalo isugu jirta dhaqanka soo jireenka ah iyo tiknoolojiyadda casriga ah. Waxaa lagu yaqaanaa neon lights iyo dhaqanka manga iyo anime.",
      image:
        "https://i.pinimg.com/1200x/88/34/f6/8834f61b609d2908863c14806ae1ba02.jpg",
    },
    {
      id: 8,
      city: "Mogadishu",
      description:
        "Mogadishu waa caasimadda Soomaaliya, magaalo xeebeed taariikhi ah oo ku taal Badweynta Hindiya. Waxay caan ku tahay xeebaha quruxda badan, dhaqanka hodanka ah, iyo suuqyada dhaqameed ee mashquulka badan. Sidoo kale waa xarun dhaqaale, ganacsi iyo siyaasadeed oo muhiim u ah dalka.",
      image:
        "https://i.pinimg.com/736x/23/ee/b5/23eeb5dce9f45b7567a1f9bfca44b9a5.jpg",
    },
  ];

  const [CurrenCity, setCurrentCity] = useState({
    id: 8,
    city: "Mogadishu",
    description:
      "Mogadishu waa caasimadda Soomaaliya, magaalo xeebeed taariikhi ah oo ku taal Badweynta Hindiya. Waxay caan ku tahay xeebaha quruxda badan, dhaqanka hodanka ah, iyo suuqyada dhaqameed ee mashquulka badan. Sidoo kale waa xarun dhaqaale, ganacsi iyo siyaasadeed oo muhiim u ah dalka.",
    image:
      "https://i.pinimg.com/736x/23/ee/b5/23eeb5dce9f45b7567a1f9bfca44b9a5.jpg",
  });

  const style = {
    backgroundImage: 'url("https://example.com/image.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "400px",
  };

  const TypeOfJourney = [
    {
        id:1,
        type: 'Public Transportations',
        image : 'https://cdn-icons-png.flaticon.com/128/11804/11804691.png'
    },
    {
        id:2,
        type: 'Nature & Adventure',
        image : 'https://cdn-icons-png.flaticon.com/128/5048/5048672.png'
    },
    {
        id:3,
        type: 'Private Transportations',
        image : 'https://cdn-icons-png.flaticon.com/128/3664/3664538.png'
    },
    {
        id:4,
        type: 'Business Tours',
        image : 'https://cdn-icons-png.flaticon.com/128/1589/1589654.png'
    },
    {
        id:5,
        type: 'Local Visit',
        image : 'https://cdn-icons-png.flaticon.com/128/3603/3603867.png'
    }
  ]

  return (
    <>
      <div className={CitiesStyle.Container}>
        <div className={CitiesStyle.Description}>
          <h1>Explore Popular Cities</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia <br /> consequat duis enim velit mollit
          </p>
        </div>
        <div className={CitiesStyle.ButtonCities}>
          {Cities.map((city) => {
            return (
              <button
                onClick={() => setCurrentCity(city)}
                className={
                  CurrenCity.city == city.city && CitiesStyle.CurrenCity
                }
              >
                {city.city}
              </button>
            );
          })}
        </div>
        <div className={CitiesStyle.FullDescription}>
            <div style={{ backgroundImage: `url(${CurrenCity.image})`, backgroundSize: "cover", height: "570px", }} > </div>
            <div className={CitiesStyle.DescriptionCity}>
                <div className={CitiesStyle.DescriptionTypoGraphy}>
                    <h1>{CurrenCity.city}</h1>
                    <p>{CurrenCity.description}</p>
                </div>
                <div className={CitiesStyle.TypeOfJourney}>
                    <div className={CitiesStyle.typeContainer}>
                        <div className={CitiesStyle.type}>
                            <img src={TypeOfJourney[0].image} alt="" width={'30px'} height={'30px'}  />
                            <p style={{color:'#D176E0'}}>{TypeOfJourney[0].type}</p>
                        </div>
                    </div>
                    <div className={CitiesStyle.typeContainer}>
                        <div className={CitiesStyle.type}>
                            <img src={TypeOfJourney[1].image} alt="" width={'30px'} height={'30px'}  />
                            <p style={{color:'#7BBCB0'}}>{TypeOfJourney[1].type}</p>
                        </div>
                        <div className={CitiesStyle.type}>
                            <img src={TypeOfJourney[2].image} alt="" width={'30px'} height={'30px'}  />
                            <p style={{color:'#E4B613'}}>{TypeOfJourney[2].type}</p>
                        </div>
                    </div>
                    <div className={CitiesStyle.typeContainer}>
                        <div className={CitiesStyle.type}>
                            <img src={TypeOfJourney[3].image} alt="" width={'30px'} height={'30px'}  />
                            <p style={{color:'#FC3131'}}>{TypeOfJourney[3].type}</p>
                        </div>
                        <div className={CitiesStyle.type}>
                            <img src={TypeOfJourney[4].image} alt="" width={'30px'} height={'30px'}  />
                            <p style={{color:'#5C9BDE'}}>{TypeOfJourney[4].type}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default PopularCities;
