#!/bin/bash

chown mongodb:mongodb /tmp/mongodb-27017.sock
initReplicaSet() {
    if [ "$IS_SECONDARY" == "false" ] || [ "$IS_SLAVE" == "false" ]; then
        MONGO_HOST=${MONGO_HOST:-"$HOSTNAME:27017"};
        echo "MONGO_HOST : $MONGO_HOST";
        for i in `seq 1 30`; do
            ./usr/bin/mongod --replSet rs0 --fork --syslog &&
            mongo &&
            s=$$? && break || s=$$?;
            echo \"Tried $i times. Waiting 5 secs...\";
            sleep 5;
        done;
        mongo --eval "rs.initiate({
            _id: 'rs0',
            members: [ { _id: 0, host: '$MONGO_HOST' } ]})"
        sleep 5;
        /usr/bin/mongod --shutdown
    fi
}

initReplica() {
    if [ "$IS_SECONDARY" == "true" ] || [ "$IS_SLAVE" == "true" ]; then
        MONGO_PRIMARY_HOST=${MONGO_PRIMARY_HOST:-"$MONGO_INSTANCE_IP:27017"};
        MONGO_HOST=${MONGO_HOST:-"$HOSTNAME:27017"};
        echo "MONGO_PRIMARY_HOST : $MONGO_PRIMARY_HOST";
        echo "MONGO_HOST : $MONGO_HOST";
        for i in `seq 1 30`; do
            mongo &&
            primary=$(mongo $MONGO_PRIMARY_HOST --eval "rs.isMaster().primary" | tail -1) &&
            mongo $primary --eval "rs.add(\"$MONGO_HOST\")" &&
            s=$$? && break || s=$$?;
            echo \"Tried $i times. Waiting 5 secs...\";
            sleep 5;
        done;
    fi
}
initDB() {
  if [ "$ENABLE_AUTH" == "true" ]; then
    KEY_FILE=${KEY_FILE:-"/etc/mongo/mongod-keyfile"};
    /usr/bin/mongod --auth --keyFile $KEY_FILE --bind_ip_all --replSet rs0
  else
    initReplicaSet
    initReplica & /usr/bin/mongod --bind_ip_all --replSet rs0
  fi
}

initDB
