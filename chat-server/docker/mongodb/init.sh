docker run -d -p 27017:27017 --name mongo -e MONGO_INITDB_ROOT_USERNAME=cris -e MONGO_INITDB_ROOT_PASSWORD=cris -v $PWD/db:/data/db mongo:4.0
