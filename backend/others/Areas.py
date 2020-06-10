import math

# 1 grado son 111,32 km
# 1/111320 es 1 metro
meter = 1/111320
SCALE = meter*10


class Areas(object):

	# Dados dos vértices devuelve una lista con cuatro vértices que conforman un rectángulo
	# El rectángulo devuelto se caracteriza por que uno de sus pares de lados es igual de ´
	# largo que la distancia AB y el otro de sus pares de lados es de tamaño 2*SCALE
	def buildRectangle(self, A, B):
		vector = [B[0]-A[0], B[1]-A[1]]
		if vector[0] > vector[1]:
			vector = [vector[0]/vector[0], vector[1]/vector[0]]
		else:
			vector = [vector[0]/vector[1], vector[1]/vector[1]]
		perpendicular1 = [-vector[1]*SCALE, vector[0]*SCALE]
		perpendicular2 = [vector[1]*SCALE, -vector[0]*SCALE]

		A1 = [A[0]+perpendicular1[0], A[1]+perpendicular1[1]]
		A2 = [A[0]+perpendicular2[0], A[1]+perpendicular2[1]]
		B1 = [B[0]+perpendicular1[0], B[1]+perpendicular1[1]]
		B2 = [B[0]+perpendicular2[0], B[1]+perpendicular2[1]]
		# El orden importa, de este modo se devuelven vértices contiguos
		return [A1, A2, B2, B1]

	# Devuelve el área de un triángulo dados sus vértices en coordenadas
	def calculateTriangleArea(self, A, B, C):
		return 1/2 * abs(A[0]*(B[1]-C[1]) + B[0]*(C[1]-A[1]) + C[0]*(A[1]-B[1]))

	# Devuelve el área de un rectángulo dados sus vértices en coordenadas en orden contiguo
	def calculateRectangleArea(self, A, B, C, D):
		base = math.sqrt((B[0]-A[0])**2 + (B[1]-A[1])**2)
		height = math.sqrt((C[0]-B[0])**2 + (C[1]-B[1])**2)
		# print(base);
		# print(height);
		return base*height

# a=Areas()
# print(a.buildRectangle([0,0],[2,3]))
#print(a.calcularAreaTriangulo([0,0], [2,0], [2,3]))
#print(a.calculateRectangleArea([6.2, 5.0], [3.8, -1.0], [11.2, 3.0], [8.8, -3.0]))
