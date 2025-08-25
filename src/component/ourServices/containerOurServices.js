import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomCardWithBox from "../sharedComponents/customCardWithBox"; // Adjust the path
import { useTranslation } from "react-i18next";
import { fetchAllservices } from "../../redux/reducer/servicesReducer";

const ContainerOurServices = () => {
  const dispatch = useDispatch();
  const { allServices, loading, error } = useSelector((state) => state.ourServices);
  const {i18n,t} = useTranslation();

  // Dispatch fetchAllServices only if services are not already fetched
  React.useEffect(() => {
      dispatch(fetchAllservices());
    
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error ) {
    return <p>Error: {error}</p>;
  }
  if(allServices?.length === 0 ) {
    return(
      <p>No services available</p>
    )
  }
  // console.log(allServices)
  return (
    <div className="">  
      <div className="flex flex-col items-center justify-center text-center max-container">
        {/* <CustomLines /> */}
        {/* <CustomBigText title={t('ProhibitedItemsTitle')} /> */}
      <div className="py-10 mx-4 lg:mx-0">
        {allServices.length === 0 ? (
          <p>No services available</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {allServices.map((service) => {
              const title = i18n.language === "ar" ? service.title?.ar : service.title?.en;
              const shortDes = i18n.language === "ar" ? service.shortDes?.ar : service.shortDes?.en;

              return(
              <div key={service._id} className="flex">
                <CustomCardWithBox
                  title={title}
                  subTitle={shortDes}
                  img={service.img}
                />
              </div>
            )})}
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ContainerOurServices;
 