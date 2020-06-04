import React from //  useEffect,
// useState,
"react";
import AllProductsCategories from "../components/allProductsCategories/AllProductsCategories";
// import Loading from "../components/loading/Loading";

const AllProducts = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(!isLoading);
  //   }, 2000);
  // }, []);
  return (
    <React.Fragment>
      {/* {isLoading ? <Loading /> :  */}
      <AllProductsCategories />
      {/* } */}
    </React.Fragment>
  );
};

export default AllProducts;
