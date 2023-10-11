import { Kafka } from "kafkajs";

const kafka = new Kafka({
    brokers: ["localhost:9092"],
    clientId: "kafka-nodejs",
});

export default kafka;
