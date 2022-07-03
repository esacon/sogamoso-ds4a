import hashlib
import json

def wrapper(data):
    return {"data":data}

def md5(message):
    return (
        hashlib
        .md5(message.encode())
        .hexdigest()
    )

def get_config():
    with open("config.json", "r") as f:
        return json.load(f)