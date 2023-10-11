import kafka from "./kafka-client.js";

async function main() {
    const admin = kafka.admin();
    await admin.connect();
    console.log("Kafka admin connection successfull...");

    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ],
    });

    console.log(`Topics created : ["rider-updates"]`);
    await admin.disconnect();
}

main();
