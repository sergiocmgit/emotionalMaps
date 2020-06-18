import mysql.connector
import datetime
import time
import random
from randomtimestamp import randomtimestamp

LIMIT = 10000
offsetLng = -0.9
offsetLat = 41.6
quadrantSize = 0.2

# Establishing the connection
conn = mysql.connector.connect(
	user='root', password='admin', host='127.0.0.1', database='geoemo')

# Creating a cursor object using the cursor() method
cursor = conn.cursor()

i = 0
while i < LIMIT:
	i += 1
	# Longitud para el punto 1 de una toma de datos
	lng1 = offsetLng + quadrantSize*random.random()
	# Latitud para el punto 1 de una toma de datos
	lat1 = offsetLat + quadrantSize*random.random()
	# Longitud para el punto 2 de una toma de datos
	lng2 = lng1+0.0001*random.random()
	# Latitud para el punto 2 de una toma de datos
	lat2 = lat1+0.0001*random.random()

	# Día y hora
	timestamp = randomtimestamp(start_year=2019, text=False)

	feeling = random.randint(1, 5)  # Emoción numerada de 1 a 5
	age = random.randint(15, 80)  # Edad entre 15 y 80

	# Masculino y Femenino más probables que Otros
	g = random.random()
	if g < 0.35:
		gender = 'M'
	elif g < 0.7:
		gender = 'F'
	else:
		gender = 'O'

	# Tipo de usuario
	if random.random() < 0.5:
		type = 'C'
	else:
		type = 'T'

	cursor.execute("""INSERT INTO emocaptures (TIME1, TIME2, POINT1, POINT2, FEELING, AGE, GENDER, TYPE) values(%s,%s,POINT(%s, %s),POINT(%s, %s), %s, %s, %s, %s)""",
				   (timestamp, timestamp, lng1, lat1, lng2, lat2, feeling, age, gender, type))
	conn.commit()

# Closing the connection
conn.close()
