import { Form } from "react-router-dom";
import FormInput from "./FormInput";


const Filters = () => {
  return (
    <Form className="align-element bg-base-200 rounded-md sm:px-44 px-20 py-4 grid grid-col-2 sm:grid-cols-1 gap-x-4 items-center ">
      {/* SEARCH */}
      <div className="grid sm:grid-cols-4 gap-4  min-w-40 grid-cols-1 ">
        <FormInput
          type="search"
          label="Search Pokemon"
          name="search"
          size="input-sm"
          divClass="col-span-1 sm:col-span-3"
        />
        <button
          type="submit"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md shadow btn-sm  self-end">
          Search
        </button>
      </div>
    </Form>
  );
};
export default Filters;
