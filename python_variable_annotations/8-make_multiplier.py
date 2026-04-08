#!/usr/bin/env python3

"""Write a type-annotated function make_multiplier that takes
a float multiplier as argument and returns a function
that multiplies a float by multiplier."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Calllable can call the float variable and then return a float"""

    def multiplies_float_by_multiplier(x: float) -> float:
        x * multiplier

    return (multiplies_float_by_multiplier)
