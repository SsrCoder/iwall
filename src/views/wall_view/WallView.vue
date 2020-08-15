<template>
  <div>
    <video :src="url" ref="video" autoplay loop></video>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class WallView extends Vue {
  data() {
    return {
      url:
        'http://upos-hz-mirrorakam.akamaized.net/upgcxcode/96/14/224321496/224321496-1-208.mp4?e=ig8euxZM2rNcNbRjnWdVhwdlhWTHhwdVhoNvNC8BqJIzNbfqXBvEuENvNC8aNEVEtEvE9IMvXBvE2ENvNCImNEVEIj0Y2J_aug859r1qXg8gNEVE5XREto8z5JZC2X2gkX5L5F1eTX1jkXlsTXHeux_f2o859IB_&ua=tvproj&deadline=1597465567&gen=playurl&nbs=1&oi=1732814277&os=akam&trid=f6a0bbe9468c462cbabbcfc6cc0f1bd3&uipk=5&upsig=3832724e33ff9f77f564847541422c84&uparams=e,ua,deadline,gen,nbs,oi,os,trid,uipk&hdnts=exp=1597465567~hmac=d5f7e29f775aceed2f608dec36e84581ca53606edd37255d395287006acdc0b0&mid=0',
    }
  }

  created() {
    const video = this.$refs.video as HTMLElement
  }
}
</script>

<style lang="stylus" scoped></style>
