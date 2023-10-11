# Apache Kafka with Node.js

### Purpose : To get basic understanding of how kafka works.

A basic CLI application which uses kafka as a message broker.
We can pass the message to kafka broker from producer CLI & appropriate consumer with consumer group get the messages from kafka broker & logs to the CLI.

### Steps to run kafka & how to use producer & consumer

#### 1. Start the docker deamon & run the command

```bash
docker compose up -d
```

#### 2. Install the dependencies

```
yarn
```

=> It will start the kafka & zookeeper containers

#### 3. Run the admin.js file. (Make sure you run it only once)

```bash
node admin.js
```

=> It will create a kafka admin, which creates a topic called 'rider-updates' with 2 partitions, one for north users & one for south

#### 4. Start the producer

```bash
node producer.js
```

=> It will give you a CLI prompt to enter the message, you should enter a message in this format "_yourname_ _south_ | _north_" because I've configured the producer in a way that _north_ users message will be sent to the partition 0 & _south_ users message will be sent to partition 1

```
> jack north
> jane south
.
.
```

#### 5. Start the consumer to see the output messages

In 1st window of terminal run

```bash
node consumer.js group-1
```

In 2st window of terminal run

```bash
node consumer.js group-1
```

In 3rd window of terminal run

```bash
node consumer.js group-2
```

=> In 1st window the consumer will get one of the south or north message.
=> In 2nd window the same
=> In 3rd window there is only one consumer in gorup-2 so it will get both north & south users' messages
