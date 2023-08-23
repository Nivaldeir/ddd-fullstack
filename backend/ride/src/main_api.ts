import CalculateRide from "./application/usecase/CalculateRide";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import MainController from "./infra/http/MainController";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import RequestRide from "./application/usecase/RequestRide";
import RideRepositoryDatabase from "./infra/repository/RideRepositoryDatabase";
import UsecaseFactory from "./application/factory/UsecaseFactory";
import RepositoryFactoryDatabase from "./infra/factory/RepositoryFactoryDatabase";
import Registry from "./infra/di/Registry";

const connection = new PgPromiseAdapter()
const repositoryFactory = new RepositoryFactoryDatabase(connection)
const usecaseFactory = new UsecaseFactory(repositoryFactory)
const calculateRide = new CalculateRide()
const rideRepository = new RideRepositoryDatabase(connection)
const requestRide = new RequestRide(rideRepository)
const httpServer = new ExpressAdapter();
const registry = Registry.getIntance()
registry.provide('calculateRide', calculateRide)
new MainController(httpServer, usecaseFactory);
httpServer.listen(3000)