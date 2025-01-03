import { ThreeDots } from "react-loader-spinner";
export const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="20"
      width="20"
      color="black"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
