<template>
  <div>
    <div>
      <v-btn @click="onDecode">ON/OFF</v-btn>
      <v-btn>Reset</v-btn>
    </div>
    <div class="scanner-container">
      <div v-show="!isLoading">
        <video id="video" width="300" height="200" style="border: 1px solid gray" ref="scanner"></video>
        <div class="overlay-element"></div>
        <div class="laser"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {BrowserMultiFormatReader, Exception} from '@zxing/library';

  export default {
    name: 'Barcode',
    data() {
      return {
        isLoading: true,
        codeReader: new BrowserMultiFormatReader(),
        isMediaStreamAPISupported:
          navigator &&
          navigator.mediaDevices &&
          'enumerateDevices' in navigator.mediaDevices
      };
    },
    mounted() {
      if (!this.isMediaStreamAPISupported) {
        throw new Exception('Media Stream API is not supported');
        return;
      }
      this.start();
      this.$refs.scanner.oncanplay = event => {
        this.isLoading = false;
        this.$emit('loaded');
      };
    },
    beforeDestroy() {
      this.codeReader.reset();
    },
    methods: {
      onDecode() {
        this.isLoading = !this.isLoading;
      },
      start() {
        this.codeReader.decodeFromVideoDevice(
          undefined,
          this.$refs.scanner,
          (result, err) => {
            if (result) {
              this.$emit("decode", result.text);
            }
          }
        );
      },
      onLoaded(result) {
        console.log(result);
      }
    }
  };
</script>

<style scoped>

</style>
