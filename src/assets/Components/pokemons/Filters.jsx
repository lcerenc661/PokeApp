import { Form } from "react-router-dom";
import FormInput from "./FormInput";

const Filters = () => {
  return (
    <Form id="search-tab" name="search-tab" className="   py-4 flex items-center xl:px-32 lg:px-16 md:px-8 md:justify-between justify-center ">
      {/* SEARCH */}
      <div className="flex items-end justify-start ">

        <FormInput
          type="search"
          label="Search"
          name="search"
        />
        <button
          type="submit"
          className="bg-[#3c40c6] hover:bg-gray-100 text-gray-50 hover:text-[#3c40c6] font-semibold   border rounded-l-none rounded-md  btn-sm  max-w-24 ">
          GO!
        </button>
        </div>
        {/* <div className=" absolute bottom-[-100%] left-[-100%] md:flex md:bottom-0 md:left-0  md:relative" >
            <img src="/pokemon-logo.svg" alt="pokemon-logo" className="h-16 scale-125" />

        
      </div> */}
    </Form>
  );
};
export default Filters;
