"use strict";
// Enum
// enum group of constants
// number
var Direction;
(function (Direction) {
    Direction[Direction["east"] = 100] = "east";
    Direction[Direction["west"] = 101] = "west";
    Direction[Direction["north"] = 102] = "north";
    Direction[Direction["south"] = 103] = "south";
})(Direction || (Direction = {}));
console.log(Direction.east);
var statusCode;
(function (statusCode) {
    statusCode[statusCode["success"] = 200] = "success";
    statusCode[statusCode["error"] = 404] = "error";
    statusCode[statusCode["forbidden"] = 403] = "forbidden";
    statusCode[statusCode["unauthorized"] = 401] = "unauthorized";
    statusCode[statusCode["notFound"] = 404] = "notFound";
    statusCode[statusCode["serverError"] = 500] = "serverError";
})(statusCode || (statusCode = {}));
// string
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["GET"] = "GET";
    HTTPMethod["POST"] = "POST";
    HTTPMethod["PUT"] = "PUT";
    HTTPMethod["DELETE"] = "DELETE";
})(HTTPMethod || (HTTPMethod = {}));
