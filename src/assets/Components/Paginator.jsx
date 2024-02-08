import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const Paginator = () => {
  const { totalPages, page } = useLoaderData();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const actualPage = parseInt(page) || 1;

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  const addPageButton = (pageNumber) => {
    return (
      <button
        key={pageNumber}
        onClick={()=>(handlePageChange(pageNumber))}
        className={`join-item  btn btn-md ${
          pageNumber == actualPage ? "btn-active" : ""
        }`}>
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // -----CASE 1----
    if (totalPages < 2) {
      return null
    }

    // -----CASE 2----

    if (totalPages>= 2 && totalPages <=5){
    
      
      for (let i = 0; i<totalPages; i++){
        pageButtons.push(addPageButton(1+i))
        
      }
    }

    // -----CASE 3----
    if (totalPages > 5) {
      // FIRST PAGE
      if (actualPage > 2) pageButtons.push(addPageButton(1));

      //DOTS
      if (actualPage > 3 && totalPages > 5) {
        pageButtons.push(
          <button key="dot1" className="join-item btn btn-md">
            ...
          </button>
        );
      }

      //ACTIVE BUTTON AND NEIGHBORS
      if (actualPage > 1) {
        pageButtons.push(addPageButton(actualPage - 1));
      }

      pageButtons.push(addPageButton(actualPage));
      if (actualPage < totalPages)
        pageButtons.push(addPageButton(actualPage + 1));

      //DOTS
      if (actualPage + 2 < totalPages && totalPages > 5) {
        pageButtons.push(
          <button key="dot2" className="join-item btn-md">
            ...
          </button>
        );
      }

      // LAST BUTTON
      if (page < totalPages - 1) {
        pageButtons.push(addPageButton(totalPages));
      }

      
    }
    return pageButtons;

  };



  return <div className="join">{renderPageButtons()}</div>;
};
export default Paginator;
