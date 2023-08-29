<template>
  <div class="mx-auto sm:max-w-screen-sm md:max-w-7xl pt-6" v-for="item in myTools" :key="item.value + item.id">
    <div class="title text-2xl">{{ item.name }}</div>
    <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      <div
          class="flex cursor-pointer hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-500 rounded-xl px-4 py-6 box-border"
          v-for="child in item.children" :key="child.id" @mousedown="goTouchStart(child.url)"
          @mouseup="goTouchEnd(child.url)">
        <img class="w-12 h-12 mr-2 rounded-xl" :src="child.logoUrl" :alt="child.name">
        <div class="flex-1 min-w-0">
          <div class="card-title truncate">
            {{ child.name }}
          </div>
          <div class="truncate">{{ child.des }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import tools from "../common/data.js";
import {onBeforeUnmount, ref} from "vue";
import useClipboard from "vue-clipboard3";
import {useToast} from "vue-toastification";

const myTools = ref(tools)
const toast = useToast();
const {toClipboard} = useClipboard();
const copy = async (text) => {
  try {
    await toClipboard(text);  //实现复制
    toast.success('复制网址成功！')
  } catch (e) {
    console.error(e);
  }
};

const isClick = ref(false);
const timeOut = ref();
const goTouchStart = (url) => {
  isClick.value = true
  clearTimeout(timeOut.value)
  timeOut.value = setTimeout(function () {
    //that.actionSheetShow=true;//修改删除弹窗出现
    // that.$toast('长按你不痛么？')
    console.log('在这里执行长按事件')
    copy(url)

    isClick.value = false
  }, 500)
}
const goTouchEnd = url => {
  clearTimeout(timeOut.value)

  if (isClick.value) {
    //that.banksClick(index, item)
    window.open(url)
  }
}
onBeforeUnmount(() => {
  clearTimeout(timeOut.value)
})
</script>

<style lang="scss" scoped></style>
