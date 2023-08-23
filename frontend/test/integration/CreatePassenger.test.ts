import { mount } from "@vue/test-utils"
import CreatePassengerVue from "../../src/view/CreatePassenger.vue"
import PassengerGatewayHttp from "../../src/infra/gateway/PassengerGatewayHttp"
import AxiosAdapter from "../../src/infra/http/AxiosAdapter"
function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}
test("Deve criar uma passageiro", async function () {
  const wrapper = mount(CreatePassengerVue, {
    global: {
      provide: {
        passengerGateway: new PassengerGatewayHttp(new AxiosAdapter())
      }
    }
  })
  await wrapper.get('.passenger-name').setValue("John Dow")
  await wrapper.get('.passenger-email').setValue("john.doe@gmail.com")
  await wrapper.get('.passenger-document').setValue("83432616074")
  await wrapper.get(".create-passenger-button").trigger("click");
  await sleep(200)
  expect(wrapper.get(".passenger-id").text()).toHaveLength(36);
}) 

test("Não deve criar uma passageiro com name invalido", async function () {
  const wrapper = mount(CreatePassengerVue, {
    global: {
      provide: {
        passengerGateway: new PassengerGatewayHttp(new AxiosAdapter())
      }
    }
  })
  await wrapper.get('.passenger-name').setValue("John")
  await wrapper.get('.passenger-email').setValue("john.doe@gmail.com")
  await wrapper.get('.passenger-document').setValue("83432616074")
  await wrapper.get(".create-passenger-button").trigger("click");
  await sleep(200)
  expect(wrapper.get(".error").text()).toBe("Invalid name");
}) 

test("Não deve criar uma passageiro com email invalido", async function () {
  const wrapper = mount(CreatePassengerVue, {
    global: {
      provide: {
        passengerGateway: new PassengerGatewayHttp(new AxiosAdapter())
      }
    }
  })
  await wrapper.get('.passenger-name').setValue("John Down")
  await wrapper.get('.passenger-email').setValue("john.doe")
  await wrapper.get('.passenger-document').setValue("83432616074")
  await wrapper.get(".create-passenger-button").trigger("click");
  await sleep(200)
  expect(wrapper.get(".error").text()).toBe("Invalid email");
}) 

test("Não deve criar uma passageiro com document invalido", async function () {
  const wrapper = mount(CreatePassengerVue, {
    global: {
      provide: {
        passengerGateway: new PassengerGatewayHttp(new AxiosAdapter())
      }
    }
  })
  await wrapper.get('.passenger-name').setValue("John Down")
  await wrapper.get('.passenger-email').setValue("john.doe@gmail.com")
  await wrapper.get('.passenger-document').setValue("8343261607s")
  await wrapper.get(".create-passenger-button").trigger("click");
  await sleep(200)
  expect(wrapper.get(".error").text()).toBe("Invalid cpf");
}) 