import ampq from "amqplib"
import crypto from "crypto"
async function main() {
  const connection = await ampq.connect("amqp://localhost")
  const channel = await connection.createChannel();
  await channel.assertQueue("rideEnded", { durable: true })
  const rideId = crypto.randomUUID()
  const input = {
    rideId: rideId,
  }
  channel.sendToQueue("rideEnded", Buffer.from(JSON.stringify(input)))
  setTimeout(async ()=>{
    await connection.close()
  }, 100)
}

main();