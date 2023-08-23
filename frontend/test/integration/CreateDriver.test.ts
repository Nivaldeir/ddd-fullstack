import { mount } from "@vue/test-utils"
import CreateDriverVue from "../../src/view/CreateDriver.vue"
import DriverGateway from "../../src/infra/gateway/PassengerGateway"
function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}
test("Deve criar um motorista", async function () {
  const driverGateway: DriverGateway = {
    async create(driver: any): Promise<any> {
      return  "48bc9687-a4d0-4ce8-93de-81b0e973d622"
    },
  }
  const wrapper = mount(CreateDriverVue, {
    global: {
      provide: {
        driverGateway
      }
    }
  })
  await wrapper.get(".driver-name").setValue("John Doe")
  await wrapper.get('.driver-email').setValue("john.doe@gmail.com")
  await wrapper.get('.driver-document').setValue("83432616074")
  await wrapper.get('.driver-car-plate').setValue("AAA9999")
  await wrapper.get(".create-driver-button").trigger("click");
  await sleep(1000)
  expect(wrapper.get(".driver-id").text()).toHaveLength(36);
}) 