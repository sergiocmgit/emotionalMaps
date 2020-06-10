from pymongo import MongoClient
import pprint
from Areas import Areas

db = MongoClient("localhost", 27017).pruebaDatosGeograficos

debug = False
debug2 = False


class SegmentLinker(object):

	# Devuelve el id del segmento más cercano a unas coordenadas
	def nearestSegment(self, longitud, latitud):
		segments = []
		if debug:
			print(
				"################################################################################")
		for doc in db.segmentos.find({"segment": {"$nearSphere": [longitud, latitud]}}).limit(2):
			a = Areas()
			rectangleVertices = a.buildRectangle(
				doc["segment"]["coordinates"][0], doc["segment"]["coordinates"][1])
			if debug:
				print("Longitud y latitud: ", longitud, ", ", latitud)
			if debug:
				print("Las coordenadas del segmento examinando: ",
					  doc["segment"]["coordinates"][0], ", ", doc["segment"]["coordinates"][1])
			if debug:
				print("Los vértices del rectángulo son: ", rectangleVertices)
			rectangleArea = a.calculateRectangleArea(
				rectangleVertices[0], rectangleVertices[1], rectangleVertices[2], rectangleVertices[3])
			if debug:
				print("El área del rectángulo es: ", rectangleArea)
			point = [longitud, latitud]
			triangleArea1 = a.calculateTriangleArea(
				point, rectangleVertices[0], rectangleVertices[1])
			triangleArea2 = a.calculateTriangleArea(
				point, rectangleVertices[1], rectangleVertices[2])
			triangleArea3 = a.calculateTriangleArea(
				point, rectangleVertices[2], rectangleVertices[3])
			triangleArea4 = a.calculateTriangleArea(
				point, rectangleVertices[3], rectangleVertices[0])
			sumTriangleAreas = triangleArea1+triangleArea2+triangleArea3+triangleArea4
			if debug:
				print("El sumatorio de los triángulos es: ", sumTriangleAreas)
			if rectangleArea <= (sumTriangleAreas+0.0000000001) and rectangleArea >= (sumTriangleAreas-0.0000000001):
				if debug:
					print("El codigo way es: ", doc["way"])
				segments.append(doc["way"])
				if debug:
					print(
						"-------------------------------------------------------------------------------")
		if debug:
			print(
				"################################################################################")
		return segments

	# Dados dos pares de coordenadas devuelve el segmento más cercano a ambos
	# Se tiene en cuenta que el movimiento es de las primeras coordenadas a las segundas para casos de conflicto
	def segmentByEmotion(self, longitud1, latitud1, longitud2, latitud2):
		segment1 = self.nearestSegment(longitud1, latitud1)
		segment2 = self.nearestSegment(longitud2, latitud2)

		if debug2:
			print(segment1)
		if debug2:
			print(segment2)

		# Ambas coordenadas tienen segments cerca
		if len(segment1) != 0 and len(segment2) != 0:
			if debug2:
				print(11111111111111111111111111111)
			# Ambas coordenadas corresponden a un segmento sin haber conflicto
			# Ambas coordenadas corresponden a la misma intersección
			if segment1 == segment2:
				return segment1[0]
			# La primera coordenada está en una intersección pero la segunda no
			elif len(segment1) > 1 and len(segment2) == 1:
				return segment2[0]
			# La segunda coordenada está en una intersección pero la primera no
			elif len(segment1) == 1 and len(segment2) > 1:
				return segment1[0]
			# Ambas coordenadas están en intersecciones pero no a la misma intersección
			elif len(segment1) > 1 and len(segment2) > 1 and segment1 != segment2:
				if segment1[0] == segment2[0]:
					return segment1[0]
				else:
					return segment1[1]
		# El primer par de coordenadas tiene algún segmento cerca pero el segundo no
		elif len(segment1) != 0:
			if debug2:
				print(22222222222222222222222222)
			return segment1[0]
		# El segundo par de coordenadas tiene algún segmento cerca pero el primero no
		else:
			if debug2:
				print(3333333333333333333333333333333)
			return segment2[0]


# a=SegmentLinker()
# a.nearestSegment(10,5)
#a.nearestSegment(41.652116, -0.880042);
