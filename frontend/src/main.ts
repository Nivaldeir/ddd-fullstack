import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PassengerGatewayHttp from './infra/gateway/PassengerGatewayHttp'
import DriverGatewayHttp from './infra/gateway/DriverGatewayHttp'
import AxiosAdapter from './infra/http/AxiosAdapter'
import GeoLocationNavigatorAdapter from './infra/geolocation/GeoLocationNavigatorAdapter'

const app = createApp(App)
const httpClient = new AxiosAdapter()
app.provide('passengerGategay', new PassengerGatewayHttp(httpClient))
app.provide('driverGateway', new DriverGatewayHttp(httpClient))
app.provide("geoLocation", new GeoLocationNavigatorAdapter())
app.mount('#app')
