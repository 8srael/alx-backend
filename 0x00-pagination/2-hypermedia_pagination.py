#!/usr/bin/env python3
"""Task 2. Hypermedia pagination"""

import csv
import math
from typing import List
index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Gets the page from the dataset."""
        assert type(page) is int and page > 0
        assert type(page_size) is int and page_size > 0
        start, end = index_range(page, page_size)
        return self.dataset()[start:end]
    
    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Gets the page from the dataset with hypermedia pagination."""
        assert type(page) is int and page > 0
        assert type(page_size) is int and page_size > 0
        start, end = index_range(page, page_size)
        current_data = self.dataset()[start:end]
        total_pages = math.ceil(len(self.dataset()) / page_size)
        prev_page = page - 1 if page > 1 else None
        next_page = page + 1 if page < total_pages else None

        return {
            'page_size' : page_size,
            'page' : page,
            'data': current_data,
            'next_page' : next_page,
            'prev_page' : prev_page,
            'total_pages' : total_pages
        }

