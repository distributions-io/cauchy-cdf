options( digits = 16 )
library( jsonlite )

gamma = 10
x0 = 0
x = seq( -1000, 1000, 0.5 )
y = pcauchy( x, x0, gamma )

cat( y, sep = ",\n" )

data = list(
	gamma = gamma,
	x0 = x0,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
