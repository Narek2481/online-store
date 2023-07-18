this is an online store

The command to start must be in the server/ folder and write npm run dev

The command to run should be in the client/ folder and write npm run start

at the time of use node js was v18.16.1

client used react js 

# server documentation 
# post methodes
 
request to http://localhost:5000/api/user/registration and you need to send in body -> {email, password} and you get a token

request to http://localhost:5000/api/user/login and you need to send in body -> {email, password} and you get a token

request to http://localhost:5000/api/type and you need to send in body -> {type} and create a type

request to http://localhost:5000/api/brand and you need to send in body -> {brand} and create a brand

request to http://localhost:5000/api/device and you need to send in body -> {device} and create a brand
# get methodes 
request to http://localhost:5000/api/user/auth -> and get a token

request to http://localhost:5000/api/type -> and get a types

request to http://localhost:5000/api/brand -> and get a brand

request to http://localhost:5000/api/device/id -> and get a device 

request to http://localhost:5000/api/device   {params:{typeId, brandId, page, limit}} ->  and get a devices 

