// Enum
// enum group of constants

// number
enum Direction {
  east = 100,
  west,
  north,
  south,
}

console.log(Direction.east);

enum statusCode {
  success = 200,
  error = 404,
  forbidden = 403,
  unauthorized = 401,
  notFound = 404,
  serverError = 500,
}

// string

enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
