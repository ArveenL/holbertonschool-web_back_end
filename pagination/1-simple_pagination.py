import csv
import math
from typing import List
from typing import Tuple

def index_range(page: int = 0, page_size: int = 0) -> tuple:
    """docstring"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)

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
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)

        all_data = self.dataset()

        return all_data[start:end]
    
        





# Notes
    # index_range = calculates the first index and last index on a given 
    # page x

# Real World Example
    # We want to access indexes in page 3, the program will 
    # have to know to skip indexes 0 to 20