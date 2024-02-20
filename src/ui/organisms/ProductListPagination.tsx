'use client';

import { NavLink } from '@/ui/atoms/NavLink';

// TODO: replace with a number of pages from the API
const MAX_PAGE = 5;

interface ProductListPaginationProps {
  currentPage: number;
}

export function ProductListPagination({
  currentPage,
}: ProductListPaginationProps) {
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <ul aria-label="Pagination" className="flex gap-2 text-lg">
      {previousPage > 0 && (
        <li>
          <NavLink aria-label="Previous" href={`/products/${previousPage}`}>
            {'<'}
          </NavLink>
        </li>
      )}
      {Array.from({ length: MAX_PAGE }, (_, i) => {
        const pageNo = i + 1;
        return (
          <li key={pageNo}>
            <NavLink href={`/products/${pageNo}`}>{pageNo}</NavLink>
          </li>
        );
      })}
      {nextPage <= MAX_PAGE && (
        <li>
          <NavLink href={`/products/${nextPage}`} aria-label="Next">
            {'>'}
          </NavLink>
        </li>
      )}
    </ul>
  );
}
