#!/usr/bin/env python3

def list_all(mongo_collection):
    """Return all documents in a MongoDB collection."""
    return list(mongo_collection.find())