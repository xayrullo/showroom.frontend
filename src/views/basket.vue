<template>
  <div class="px-[72px] pt-[32px] flex gap-[36px]">
    <div class="w-[52%]">
      <h2 class="font-bold text-[24px] leading-[31.68px] mt-[12px]">
        {{ $t("BASKET.BASKET") }} (6)
      </h2>
      <div class="w-full h-[1px] bg-black mt-6"></div>
      <div class="mt-[24px] flex flex-col gap-[12px]">
        <h5
          class="font-bold text-[13px] leading-[18px] uppercase"
          style="color: rgba(11, 153, 255, 1)"
        >
          {{ $t("BASKET.RECIPIENT_DETAIL") }}
        </h5>
        <div>
          <input
            type="text"
            class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="username"
            placeholder="Name"
          />
          <span
            class="font-medium text-[12px] leading-[18px] text-red-600"
            >{{
          }}</span>
        </div>
        <div>
          <input
            type="text"
            class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="surname"
            placeholder="Surname"
          />
          <span
            class="font-medium text-[12px] leading-[18px] text-red-600"
            >{{
          }}</span>
        </div>
        <div>
          <input
            type="text"
            class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="phoneNumber"
            placeholder="+998"
          />
          <span
            class="font-medium text-[12px] leading-[18px] text-red-600"
            >{{
          }}</span>
        </div>
        <div>
          <input
            type="text"
            class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="userEmail"
            placeholder="name@example.com"
          />
          <span
            class="font-medium text-[12px] leading-[18px] text-red-600"
            >{{
          }}</span>
        </div>
      </div>
      <div class="mt-[24px] flex flex-col gap-[12px]">
        <h5
          class="font-bold text-[13px] leading-[18px] uppercase"
          style="color: rgba(11, 153, 255, 1)"
        >
          {{ $t("BASKET.RECIPIENT_DETAIL") }}
        </h5>
        <div class="h-[42px]">
          <SelectCountry
            placeholder="Country"
            class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[10px] border-gray-300 outline-none text-[14px]"
            :country="countrySelected"
            @countrySelected="(country) => (countrySelected = country)"
          />
          <span
            class="font-medium text-[12px] leading-[18px] text-red-600"
            >{{
          }}</span>
        </div>
        <div class="h-[42px]">
          <SelectCity
            placeholder="Region"
            class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[10px] border-gray-300 outline-none text-[14px]"
            :country="countrySelected"
            :region="regionSelected"
            @regionSelected="(region) => (regionSelected = region)"
          />
          <span
            class="font-medium text-[12px] leading-[18px] text-red-600"
            >{{
          }}</span>
        </div>
        <div>
          <input
            type="text"
            class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="userCity"
            placeholder="City"
          />
          <span
            class="font-medium text-[12px] leading-[18px] text-red-600"
            >{{
          }}</span>
        </div>
        <div>
          <input
            type="text"
            class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="userStreet"
            placeholder="Street"
          />
          <span
            class="font-medium text-[12px] leading-[18px] text-red-600"
            >{{
          }}</span>
        </div>
        <div>
          <input
            type="text"
            class="w-[240px] h-[42px] rounded-[6px] border-[1px] p-[12px] border-gray-300 outline-none"
            id="postcode"
            placeholder="Postcode"
          />
          <span
            class="font-medium text-[12px] leading-[18px] text-red-600"
            >{{
          }}</span>
        </div>
      </div>
      <div class="mt-[24px]">
        <h5
          class="font-bold text-[13px] leading-[18px] uppercase"
          style="color: rgba(11, 153, 255, 1)"
        >
          {{ $t("BASKET.PAYMENT") }}
        </h5>
        <div
          class="p-[24px] rounded-[8px] mt-[14px]"
          style="background: rgba(240, 238, 237, 1)"
        >
          <div class="flex gap-[8px]">
            <input
              type="text"
              class="w-[240px] h-[42px] rounded-[6px] p-[12px] outline-none"
              placeholder="Promocode"
            />
            <button
              class="rounded-[8px] w-[90px] h-[42px] font-bold text-[14px] leading-[18px] text-white"
              style="background: rgba(111, 111, 111, 1)"
            >
              {{ $t("COMMANDS.APPLY") }}
            </button>
          </div>
          <div class="flex gap-[6px] mt-[14px]">
            <div
              class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px] hover:border-black hover:border-[1px] cursor-pointer"
            >
              <img
                class="mx-[3.5px] my-[1.5px]"
                src="/images/icons/cash.svg"
                alt="Cash"
              />
            </div>
            <div
              class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px] hover:border-black hover:border-[1px] cursor-pointer"
            >
              <img
                class="mx-[4.5px] my-[1.5px]"
                src="/images/icons/card.svg"
                alt="Cash"
              />
            </div>
            <div
              class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px] hover:border-black hover:border-[1px] cursor-pointer"
            >
              <img
                class="mx-[6.5px]"
                src="/images/icons/payme.svg"
                alt="Cash"
              />
            </div>
            <div
              class="w-[120px] h-[64px] rounded-[8px] bg-white py-[23px] px-[24.5px] hover:border-black hover:border-[1px] cursor-pointer"
            >
              <img
                class="my-[0.5px]"
                src="/images/icons/click.svg"
                alt="Cash"
              />
            </div>
          </div>
          <div class="flex items-center justify-between mt-[32px]">
            <h3
              class="font-bold text-[20px] leading-[26.4px] uppercase"
              style="color: rgba(111, 111, 111, 1)"
            >
              {{ $t("BASKET.DISCOUNT") }}:
            </h3>
            <h3
              class="font-bold text-[20px] leading-[26.4px] uppercase text-black"
            >
              <span>0</span> <span>USD</span>
            </h3>
          </div>
          <div class="flex items-center justify-between mt-[24px]">
            <h3
              class="font-bold text-[20px] leading-[26.4px] uppercase"
              style="color: rgba(111, 111, 111, 1)"
            >
              {{ $t("BASKET.TOTAL_PRICE") }}:
            </h3>
            <h3
              class="font-bold text-[20px] leading-[26.4px] uppercase text-black"
            >
              <span>390</span> <span>USD</span>
            </h3>
          </div>
          <button
            class="w-full h-[56px] rounded-[12px] text-white bg-black font-bold text-[15px] leading-[19.8px] text-center py-[18px] mt-[24px] hover:py-[19px] uppercase"
            @click="showSuccesModal()"
          >
            {{ $t("COMMANDS.PAY") }}
          </button>
        </div>
      </div>
      <Modal
        v-if="isModal"
        v-model="isModal"
        position="center"
        width="425px"
        height="358px"
      >
        <div class="flex flex-col items-center px-[48px] py-[32px] gap-[14px]">
          <img src="/images/icons/succesfull.svg" alt="" />
          <h3
            class="font-bold text-[24px] leading-[29.06px] text-center uppercase max-w-[329px] font-sans"
          >
            {{ $t("MESSAGES.ORDER_NUMBER") }}
            {{}} {{ $t('MESSAGES.HAS_BEEN_PLACED') }}
          </h3>
          <h4
            class="font-medium text-[13px] leading-[17.16px] text-center max-w-[219px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            {{ $t("MESSAGES.CHECK_STATUS_ORDER") }}
          </h4>
          <RouterLink to="/user/purchases">
            <button
              class="font-bold text-[15px] leading-[19.8px] w-[183px] h-[48px] rounded-[12px] bg-black text-white text-center mt-[18px] uppercase"
            >
              {{ $t("COMMANDS.GO_TO_ORDERS") }}
            </button>
          </RouterLink>
          <RouterLink to="/">
            <button
              class="font-bold text-[15px] leading-[19.8px] text-center uppercase"
            >
              {{ $t("COMMANDS.GO_TO_MAIN_PAGE") }}
            </button>
          </RouterLink>
        </div>
      </Modal>
    </div>
    <div class="w-[45%]">
      <div
        class="flex items-center justify-between px-[24px] py-[12px]"
        style="background: rgba(240, 238, 237, 1)"
      >
        <h2 class="font-bold text-[24px] leading-[31.68px] mt-[12px]">
          {{ $t("BASKET.BASKET") }} (6)
        </h2>
        <div
          class="flex items-center gap-[6px] cursor-pointer"
          @click="showDeleteModal()"
        >
          <h5
            class="font-medium text-[14px] leading-[18.48px]"
            style="color: rgba(153, 153, 153, 1)"
          >
            {{ $t("BASKET.CLEAR_BASKET") }}
          </h5>
          <img src="/images/icons/trash.svg" alt="Trash" />
        </div>
      </div>
      <div
        class="p-[24px] w-full border-[2px]"
        style="border: 2px rgba(240, 238, 237, 1)"
      >
        <div class="flex justify-between">
          <div class="flex gap-[16px]">
            <img src="/images/paymentImg1.svg" alt="paymentImage1" />
            <div>
              <h4 class="font-bold text-[16px] leading-[20px]">
                <span>190</span> USD
              </h4>
              <h5
                class="w-[189px] font-medium text-16px leading-[20px] mt-[12px]"
                style="color: rgba(111, 111, 111, 1)"
              >
                Платье короткий рукав SS23WES456
              </h5>
              <h5
                class="font-medium text-16px leading-[20px] mt-[12px]"
                style="color: rgba(189, 189, 189, 1)"
              >
                {{ $t("BASKET.SIZE") }}: <span>M</span>
              </h5>
              <div
                class="flex items-center justify-around w-[100px] h-[34px] border-black border-[2px] mt-[12px]"
              >
                <div @click="decrement" class="cursor-pointer">
                  <img src="/images/icons/paymentSubtruck.svg" />
                </div>
                <h4
                  class="font-medium text-16px leading-[20px]"
                  id="productCount"
                >
                  {{ counter }}
                </h4>
                <div @click="increment" class="cursor-pointer">
                  <img src="/images/icons/paymentPlus.svg" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-[16px]">
            <div class="cursor-pointer">
              <img src="/images/icons/edit.svg" alt="Edit" />
            </div>
            <div class="cursor-pointer">
              <img src="/images/icons/paymentWishnest.svg" alt="Wishnest" />
            </div>
            <div class="flex flex-col items-center cursor-pointer">
              <img src="/images/icons/paymentRemove.svg" alt="Remove" />
              <h5 class="font-bold text-[10px] leading-[14px]">
                {{ $t("BASKET.REMOVE") }}
              </h5>
            </div>
          </div>
        </div>
        <div class="w-full h-[1px] bg-neutral-300 mt-6"></div>
      </div>
    </div>
    <Modal
      v-if="isDeleteModal"
      v-model="isDeleteModal"
      position="center"
      width="425px"
      height="300px"
    >
      <div class="flex flex-col items-center px-[48px] py-[32px] gap-[14px]">
        <h3
          class="font-bold text-[24px] leading-[29.06px] text-center uppercase max-w-[250px] font-sans"
        >
          {{ $t("MESSAGES.CLOSE_PROCESS") }}
        </h3>
        <h4
          class="font-medium text-[13px] leading-[17.16px] text-center max-w-[289px]"
          style="color: rgba(153, 153, 153, 1)"
        >
          {{ $t("MESSAGES.CLOSE_INFORMATION") }}
        </h4>
        <RouterLink to="/user/purchases">
          <button
            class="font-bold text-[15px] leading-[19.8px] w-[200px] h-[48px] rounded-[12px] bg-black text-white text-center mt-[18px] uppercase"
          >
            {{ $t("COMMANDS.GO_TO_ORDERS") }}
          </button>
        </RouterLink>
        <RouterLink to="/">
          <button
            class="font-bold text-[15px] leading-[19.8px] text-center uppercase"
          >
            {{ $t("COMMANDS.GO_TO_MAIN_PAGE") }}
          </button>
        </RouterLink>
      </div>
    </Modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Modal from "@/components/ui/modal.vue";
import SelectCity from "@/components/select/city.vue";
import SelectCountry from "@/components/select/country.vue";

const form = {
  username: "",
  surname: "",
  phoneNumber: 0,
  userEmail: "",
  country: "",
  region: "",
  city: "",
  postCode: "",
  street: "",
};

const isModal = ref(false);
const isDeleteModal = ref(false);

const countrySelected = ref("");
const regionSelected = ref("");

function showSuccesModal() {
  isModal.value = true;
}
function showDeleteModal() {
  isDeleteModal.value = true;
}

const counter = ref<number>(0);

const increment = () => {
  counter.value += 1;
};

const decrement = () => {
  if (counter.value > 0) {
    counter.value -= 1;
  }
};
</script>
