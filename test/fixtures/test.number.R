options( digits = 16 )
library( jsonlite )

gamma = 1
x0 = 0
x = c( -5, -2.5, 0, 2.5, 5 )
y = pcauchy( x, x0, gamma )

cat( y, sep = ",\n" )

data = list(
	gamma = gamma,
	x0 = x0,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
