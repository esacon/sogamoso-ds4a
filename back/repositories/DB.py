from sqlalchemy import create_engine
from utils import get_config

def get_engine():
    config = get_config()
    database = config["database"]
    HOST = database["host"]
    USER = database["username"]
    PASS = database["password"]
    engine = create_engine(f'mssql+pyodbc://{USER}:{PASS}@{HOST}/sogamoso?driver=ODBC+Driver+18+for+SQL+Server;Encrypt=No', echo=True)
    return engine
