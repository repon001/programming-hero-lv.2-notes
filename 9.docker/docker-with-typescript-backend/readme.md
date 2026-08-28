main        -> basic 
module-2    -> advance 
module-3    -> advance 
module-4    -> advance 

docker build -t image-name:tag . 
docker run -p 5000:5000 --name (give container name) --rm image name -> when close container delete instantly
docker container stop (container name) -> stop container

docker run -p 5000:5000 --name (give container name) image name

docker container start --a (cantainer name)

docker container prune  -> delete all container 


-- docker volumes

in docker file when we add this VOLUME ["/app/logs"] this is anonoynimus volume

docker volume ls


docker run -p 5000:5000 --name (give container name) --rm -v (volume name):(which file you wan't to create volume /app/logs) image_name

docker volume rm (volume name) -> delete a specific volume

docker volume prune -> delete all volume 


volume 2 type anonymus volume and named volume

bind mount -> 

docker run -p 5000:5000 --name (give container name) -v (give volume name):(which file you wan't to create volume //app/logs) -w (working directory (//app)) -v (give absolute file path which file you want to mirroring. that mens when you cahnge file it chage in container don't need to build again)("//f/learning/programming-hero-lv.2-notes/9.docker/docker-with-typescript-backend" or "//$(pwd)")://app  (this app means inside container all project file docker copy this filder) -v //app/node_modules --rm --env-file ./.env image_name


Container Communication And Types of Communication

(Case 1) Container To WWW Communication

(Case 2) Container To Local Host Machine Communication
(Case 3) Container to Container Communication

Introduction To Docker Networks

docker run -p 5000:5000 --name ts-container --rm -w //app -v ts-docker-logs://app-logs -v "//($pwd)"://app/logs -v node_modules --env-file .env ts-container:v1

docker network create (network_name)

docker run --name mongodb --rm --network (network name) mongo

docker run -p 5000:5000 --name ts-container --rm -w //app -v ts-docker-logs://app-logs -v "//($pwd)"://app/logs -v node_modules --env-file .env --network (network name) ts-container:v1