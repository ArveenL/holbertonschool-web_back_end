#!/usr/bin/env python3

"""take wait_n from previous file and create a 
measure_time function that measures total execution
time for wait_n"""

wait_n = __import__('1-concurrent_coroutines').wait_n

from typing import List
import asyncio

async def measure_time(n: int, max_delay: int) -> float:
    """docstring"""
    