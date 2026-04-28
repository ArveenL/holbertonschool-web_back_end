#!/usr/bin/env python3

"""docstring"""

def list_all(mongo_collection):
    return list(mongo_collection.find())
