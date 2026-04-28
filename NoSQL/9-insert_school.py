#!/usr/bin/env python3
"""docstring"""

from pymongo import MongoClient

def insert_school(mongo_collection, **kwargs):
    """docstring"""
    just_a_variable = mongo_collection.insert_one(kwargs)
    return just_a_variable.inserted_id



# **kwargs automatically captures arguments as a dictionary,
# can pass it directly to the MongoDB insertion method
# inserted_id to return unique id of newly added collection