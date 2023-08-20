#!/usr/bin/env python3
"""Task 0. Simple helper function"""


def index_range(page: int, page_size: int) -> tuple:
    """Returns a tuple of size two containing a start index
    and an end index corresponding to the range of indexes to return in a list
    for those particular pagination parameters.

    Page numbers are 1-indexed, i.e. the first page is page 1.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)