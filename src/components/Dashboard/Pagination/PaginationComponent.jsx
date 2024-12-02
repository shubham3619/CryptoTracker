import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function PaginationComponent({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPageLinks = 3; // Number of page links to show before the ellipsis


    // Show "Prev" button
    pages.push(
      <PaginationItem key="prev">
        <PaginationPrevious href="#" onClick={() => handlePageClick(currentPage - 1)} />
      </PaginationItem>
    );

    // Show first page
    pages.push(
      <PaginationItem key={1}>
        <PaginationLink
          href="#"
          isActive={currentPage === 1}
          onClick={() => handlePageClick(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Conditionally show ellipsis if currentPage is far from the beginning
    if (currentPage > maxPageLinks + 1) {
      pages.push(
        <PaginationItem key="start-ellipsis" isActive>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Show middle pages around the current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={currentPage === i}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Conditionally show ellipsis if currentPage is far from the end
    if (currentPage < totalPages - maxPageLinks) {
      pages.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Show last page
    if (totalPages > 1) {
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            isActive={currentPage === totalPages}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show "Next" button
    pages.push(
      <PaginationItem key="next">
        <PaginationNext href="#" onClick={() => handlePageClick(currentPage + 1)} />
      </PaginationItem>
    );

    return pages;
  };

  return <Pagination className="dark mb-5"><PaginationContent>{renderPageNumbers()}</PaginationContent></Pagination>;
}

export default PaginationComponent;
