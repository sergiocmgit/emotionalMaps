"""
Demonstrates how to schedule a job to be run in a process pool on 3 second intervals.
"""
import pprint
from datetime import datetime
import os
from SegmentLinker import SegmentLinker

from apscheduler.schedulers.blocking import BlockingScheduler

from pymongo import MongoClient
clientExt = MongoClient('mongodb://localhost:27017/')
clientInt = MongoClient('mongodb://localhost:27017/')


# Dadas dos colecciones de la base de datos,
# se extraen las emociones de la primera y se guardan en la segunda
# insertando un nuevo campo con el segmento más cercano
def saveEmotionWithSegment(collection1, collection2):
	linker = SegmentLinker()
	for emotion in collection1.find():
		segment = linker.segmentByEmotion(
			emotion["point1"]["lng"],
			emotion["point1"]["lat"],
			emotion["point2"]["lng"],
			emotion["point2"]["lat"])
		collection2.insert_one(emotion)
		collection2.update({"id": emotion["id"]}, {
						   "$set": {"segment": segment}})


# Descarga los datos de emociones de un almacenamiento externo asignando los segmentos más cercanos a cada emoción
def downloadEmotions():
	externEmotions = clientExt.emotionsMap.externEmotions
	emotions = clientInt.emotionsMap.emotions
	saveEmotionWithSegment(externEmotions, emotions)
	print('Tick! The time is: %s and the emotions have been downloaded' %
		  datetime.now())


if __name__ == '__main__':
	scheduler = BlockingScheduler(
		job_defaults={'misfire_grace_time': 60}
	)
	scheduler.add_executor('processpool')
	# La descarga de emociones se realiza todos los días a las 01:00h
	scheduler.add_job(downloadEmotions, 'cron', hour=1)
	print('Press Ctrl+{0} to exit'.format('Break' if os.name == 'nt' else 'C'))

	try:
		scheduler.start()
	except (KeyboardInterrupt, SystemExit):
		pass
