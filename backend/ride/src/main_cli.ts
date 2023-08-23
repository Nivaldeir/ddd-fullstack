import PassengerRepositoryDatabase from './infra/repository/PassengerRepositoryDatabase';
import CreatePassenger from './application/usecase/CreatePassenger';
import PgPromiseAdapter from './infra/database/PgPromiseAdapter';
import NodeInputOutput from './infra/cli/NodeInputOutput';
import CLIController from './infra/cli/CLIController';
//driver, primary actor, inbound adapter
const connection = new PgPromiseAdapter();
const passengerRepository = new PassengerRepositoryDatabase(connection)
const createPassenger = new CreatePassenger(passengerRepository);
const inputOutput = new NodeInputOutput()
new CLIController(inputOutput, createPassenger)
