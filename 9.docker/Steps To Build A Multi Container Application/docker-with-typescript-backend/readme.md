run mongodb
docker run --name mongodb --rm -p 27017:27017 mongo

we don't publish port because it secure

so frist we create network
docker network create ts-docker-net 

docker run --name mongodb --rm --network ts-docker-net mongo


docker build -t ts-docker-bakcend:v5 .

understnad this comand use gpt 
docker run --name ts-docker-backend-container --rm --network ts-docker-net --env-file .env -w //app -v ts-docker-logs://app/logs -v "//$(pwd)"://app -v //app/node_modules -p 5000:5000 ts-docker-backend:v5


<!-- secure database  -->

<!-- add named vlume to persiste data -->
docker run --name mongodb --rm -v ts-docker-db:/data/db --network ts-docker-net mongo

<!-- add username and password  -->
docker run --name mongodb --rm -v ts-docker-db:/data/db -e MONGO_INITDB_ROOT_USERNAME=ts-container -e MONGO_INITDB_ROOT_PASSWORD=ts-container --network ts-docker-net mongo

