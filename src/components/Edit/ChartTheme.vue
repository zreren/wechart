<template>

  <img @click="changeTheme('walden')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/46288884bb79bddd_1629906913634.png" alt="">
  <img @click="changeTheme('westeros')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/8d08ceefca54bc8c_1629906001439.jpg" alt="">
  <img @click="changeTheme('chalk')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/54a73a00a6413a1c_1629962001350.png" alt="">
  <img @click="changeTheme('roma')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/f33b6fa4bcd31c59_1629906888141.png" alt="">
  <img @click="changeTheme('infographic')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/61ba9242d9a2f443_1629906854873.png" alt="">
  <img @click="changeTheme('purple-passion')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/5dab843c8bdc947d_1629962005782.png" alt="">
  <img @click="changeTheme('macarons')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/40d468dc773c3ee5_1629906800038.png" alt="">
  <img @click="changeTheme('wonderland')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/481ebfe7b0a93ec8_1629906722286.png" alt="">
  <img @click="changeTheme('vintage')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/37bd774ceb65f085_1629907021420.png" alt="">
  <img @click="changeTheme('essos')" src="https://sf1-ttcdn-tos.pstatp.com/obj/larkcloud-file-storage/baas/qc5abu/2012852057266f3a_1629906942880.png" alt="">

</template>

<script>
import { useStore } from 'vuex'
export default {
    name:'Chart',
    setup() {
      const store = useStore()

      function changeTheme(value) {
        store.state.theme = value
      }
      return {
        changeTheme
      }
    }
}
</script>

<style lang = "less" scoped> 
  img {
    margin-top: 10px;
    width: 90%;
    transition: 0.5s;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.1);
  }
</style>