from flask import Flask,request
import psycopg2
from cryptography.fernet import Fernet

app = Flask(__name__)

db_pass = 'SEFZ2swUWKAV6QF8'
db_url = 'aws-0-ap-south-1.pooler.supabase.com'
db_port = 5432
db_name = 'postgres'
db_user = 'postgres.brhycotgvmoomsyiwhqx'
   
@app.route('/')
def hello_world():
    return "Hello World",200

@app.route('/register',methods=['POST'])
def register_user():
    
    user_data = request.json
    try:
        email = user_data.get('email')
        password = user_data.get('password')
        db_connection = psycopg2.connect(
            database=db_name,
            user=db_user,
            password=db_pass,
            host=db_url,
            port=db_port
        )
        cursor = db_connection.cursor()
        cursor.execute("select email from users where email = %s",(email,))
        dta = cursor.fetchone()
        if dta is not None:
            return {"message":"User ALready Exists"},400
        key,tokn = generate_token()
        
        cursor.execute("insert into users(email,password,token) values(%s,%s,%s)",(email,password,tokn))
        
        db_connection.commit()
        cursor.close()
        db_connection.close()
        
        return {"message":"User Registered","token":tokn},200
    except Exception as e:
        print(e)
        return {"message":"Email And Password Is Required"},400

@app.route('/verify',methods= ['POST'])
def verify_token():
    user_data = request.json
    try:
        token = user_data.get('token')
        db_connection = psycopg2.connect(
            database=db_name,
            user=db_user,
            password=db_pass,
            host=db_url,
            port=db_port
        )
        cursor = db_connection.cursor()
        cursor.execute("select email from users where token = %s",(token,))
        dta = cursor.fetchone()
        if dta is None:
            return {"message":"User Not Found"},404
        
        return {"message":"User Verified","email":dta[0]},200
    except Exception as e:
        print(e)
        return {"message":"Email And Password Is Required"},400
    
def generate_token():
    key = Fernet.generate_key()
    cipher_suite = Fernet(key)
    token = cipher_suite.encrypt(b'Session Token')
    return key.decode('utf-8'),token.decode('utf-8')
    
@app.route('/login',methods=['POST'])
def login_user():
    
    user_data = request.json
    try:
        email = user_data.get('email')
        password = user_data.get('password')
        db_connection = psycopg2.connect(
            database=db_name,
            user=db_user,
            password=db_pass,
            host=db_url,
            port=db_port
        )
        cursor = db_connection.cursor()
        cursor.execute("select email from users where email = %s",(email,))
        dta = cursor.fetchone()
        if dta is None:
            return {"message":"User Not Found"},404
        cursor.execute("select email from users where email = %s and password=%s",(email,password))
        dta = cursor.fetchone()
        if dta is None:
            return {"message":"Wrong Password"},403
        else:  
            key,tokn = generate_token()
            cursor.execute("update users set token = %s where email=%s",(tokn,email))
            db_connection.commit()
            return {"message":"User Logged In","token":tokn},200
    except Exception as e:
        print(e)
        return {"message":"Email And Password Is Required"},400
    
if __name__     == '__main__':
    app.run(debug=True)