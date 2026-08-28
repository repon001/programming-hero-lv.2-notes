

docker run --name ts-docker-frontend-conatiner --rm -p 3000:3000 --env-file .env.local -w //app -v "//$(pwd)"://app -v //app/node_modules --network ts-docker-net -e WATCHPACK_POLLING=true ts-docker-frontend:v5

understand this coamnd 

if this write in env file 
WATCHPACK_POLLING=true

 -e WATCHPACK_POLLING=true   --> don't need this 