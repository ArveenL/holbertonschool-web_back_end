#!/usr/bin/env python3
"""Import wait_random and create async routine wait_n"""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with the given max_delay
    and return the list of all delays in the order completed.
    """
    delays: List[float] = []

    coroutines = [wait_random(max_delay) for i in range(n)]

    for task in asyncio.as_completed(coroutines):
        result = await task
        delays.append(result)

    return delays
