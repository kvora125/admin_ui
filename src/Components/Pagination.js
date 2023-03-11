const Pagination = ({ paginationState, setPaginationState }) => (
  <>
    <button
      disabled={paginationState?.currentPageIndex === 0}
      onClick={() => {
        setPaginationState((prev) => ({ ...prev, currentPageIndex: 0 }));
      }}
    >
      &lt;&lt;
    </button>{" "}
    <button
      disabled={paginationState?.currentPageIndex === 0}
      onClick={() => {
        setPaginationState((prev) => ({
          ...prev,
          currentPageIndex: prev?.currentPageIndex - 1,
        }));
      }}
    >
      &lt;
    </button>{" "}
    {paginationState?.currentPageIndex}{" "}
    <button
      disabled={
        paginationState?.currentPageIndex === paginationState?.totalPages
      }
      onClick={() => {
        setPaginationState((prev) => ({
          ...prev,
          currentPageIndex: prev?.currentPageIndex + 1,
        }));
      }}
    >
      &gt;
    </button>{" "}
    <button
      disabled={
        paginationState?.currentPageIndex === paginationState?.totalPages
      }
      onClick={() => {
        setPaginationState((prev) => ({
          ...prev,
          currentPageIndex: prev?.totalPages,
        }));
      }}
    >
      &gt;&gt;
    </button>
  </>
);

export default Pagination;
