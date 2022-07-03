from __main__ import app
from flask import request
from repositories.UserRepository import UserRepository
from utils import wrapper
from utils import md5

repository = UserRepository()

@app.get("/user")
def findAll():
    users = repository.findAll()
    return wrapper(users)

@app.get("/user/<id>")
def findById(id):
    user = repository.find(id)
    return wrapper(user)

@app.post("/user/checkUser")
def checkUser():
    user = request.get_json(silent=True)
    username = user.get("username")
    password = md5(user.get("password"))
    user = repository.checkUser(username, password)
    return wrapper(user)

@app.post("/user")
def saveUser():
    user = request.get_json(silent=True)
    response = repository.save(user)
    return wrapper(response)

@app.put("/user")
def updatePassword():
    user = request.get_json(silent=True)
    response = repository.updatePassword(user)
    return wrapper(response)

