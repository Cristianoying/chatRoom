docker run -d -p 27017:27017 --name mongo -e MONGO_INITDB_ROOT_USERNAME=cris -e MONGO_INITDB_ROOT_PASSWORD=cris -v $PWD/db:/data/db mongo:4.0
# 创建数据库用户
# docker exec -it mongo bash
# use chat_room
# db.auth('admin','admin')
# db.createUser({user: 'cris', pwd: 'cris', roles:[{role: 'root', db: 'admin'}]})