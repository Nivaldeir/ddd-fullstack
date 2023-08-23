import ampq from "amqplib"
async function main() {
  const connection = await ampq.connect("amqp://localhost")
  const channel = await connection.createChannel();
  await channel.assertQueue("rideEnded", { durable: true })
  channel.consume("rideEnded", function (msg: any) {
    const input = JSON.parse(msg.content.toString())
    console.log(input)
    channel.ack(msg)
  })
}

main();