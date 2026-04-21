#!/usr/bin/env python3

# page = page number x 
# page_size = amount on index per page

from typing import Tuple

def index_range(page: int = 0, page_size: int = 0) -> tuple:
    """docstring"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
