options( digits = 16 )
library( jsonlite )

gamma = 1
x0 = 0
x = 0:24
y = pcauchy( x, gamma,x0 )

cat( y, sep = ",\n" )

data = list(
	gamma = gamma,
	x0 = x0,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
