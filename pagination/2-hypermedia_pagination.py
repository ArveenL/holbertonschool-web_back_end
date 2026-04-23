#!/usr/bin/env python3
"""
docstring
"""

import csv
import math
from typing import List
from typing import Tuple


def index_range(page: int = 0, page_size: int = 0) -> tuple:
    """
    docstring
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """
    docstring
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """
        docstring
        """
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        docstring
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        docstring
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)

        dataset = self.dataset()

        return dataset[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """
        Returns a dictionary containing pagination metadata.
        """
        # 1. Get the actual data for the page
        data = self.get_page(page, page_size)

        # 2. Calculate total pages (Total Rows / Page Size, rounded up)
        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)

        # 3. Determine Next and Previous page numbers
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        # 4. Return the structured dictionary 📦
        return {
            "page_size": len(data),    # Actual size of this page
            "page": page,             # Current page number
            "data": data,             # The list of baby names
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
