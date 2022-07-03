from sqlalchemy import text
from repositories.DB import get_engine
from utils import md5

class UserRepository:
    def __init__(self):
        self.engine = get_engine()

    def find(self, id):
        user = None
        result = (
            self.engine
            .connect()
            .execute(text(f"select id, usuario, pass, perfil from usuario where id = '{id}'"))
        )
        for userRow in result.fetchall():
            user = {
                "id":int(userRow[0]),
                "usuario":str(userRow[2]),
                "pass":str(userRow[2]),
                "perfil":str(userRow[3])
            }
        return user

    def findAll(self):
        users = []
        result = (
            self.engine
            .connect()
            .execute(text("select id, usuario, pass, perfil from usuario"))
        )
        for user in result.fetchall():
            users.append({
                "id":int(user[0]),
                "usuario":str(user[1]),
                "pass":str(user[2]),
                "perfil":str(user[3])
            })
        return users
        
    def save(self, user):
        usuario = user.get("usuario")
        password = md5(user.get("pass"))
        perfil = user.get("perfil")

        try:
            (
                self.engine
                .connect()
                .execute(text(f"insert into usuario (usuario, pass, perfil) values ('{usuario}', '{password}', '{perfil}')"))
            )
            return True           
        except Exception as exp:
            print(exp)
            return False
    
    def updatePassword(self):
        usuario = user.get("usuario")
        password = md5(user.get("pass"))

        try:
            (
                self.engine
                .connect()
                .execute(text(f"update usuario set password = '{password}' where usuario = '{usuario}'"))
            )
            return True           
        except Exception as exp:
            print(exp)
            return False
    
    def checkUser(self, username, password):
        user = None
        result = (
            self.engine
            .connect()
            .execute(text(f"select id, usuario, pass, perfil from usuario where usuario = '{username}' and pass = '{password}'"))
        )
        for userRow in result.fetchall():
            user = {
                "id":int(userRow[0]),
                "usuario":str(userRow[1]),
                "pass":str(userRow[2]),
                "perfil":str(userRow[3])
            }
        return user
