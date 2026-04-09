#!/usr/bin/env python3
"""Write an asynchronous coroutine that takes in an
integer argument(max_delay, with a default value of 10),
named wait_random, that waits for a random delay
between 0 and max_delay (included and float value)seconds
and eventually returns it."""


import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    1.  uniform() method returns a random floating number between
    the two specified numbers (x, y).

    2a. await = pause this couroutine until result is ready.

    2b. asyncio.sleep = asynchronous function from asyncio module,
    tells python pause for x seconds(accordingly to random uniform
    in this case) - without blocking everything else in the meantime"""

    the_delay = random.uniform(0, max_delay)  # 1.

    await asyncio.sleep(the_delay)  # 2a + 2b

    return the_delay

# essentially what we did is take a delay x(betwen 0 and max_delay),
# wait for x amount of time(without blocking anything)
