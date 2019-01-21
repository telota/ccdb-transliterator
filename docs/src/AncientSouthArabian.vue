<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Transliterate Ancient South Arabian
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <b-field 
                label="Ancient South Arabian">
                <b-input v-model="inputOriginal" dir="rtl" class="coranica"></b-input>
              </b-field>
              <p>{{ transliterated }}</p>
              <hr>
              <button
                v-for="char in oldSouthArabianCharacterMap"
                :key="char.original"
                @click="appendOriginal(char.original)"
                class="button">
                  {{ char.original }}
              </button>
            </div>
          </div>
          <footer class="card-footer">
            <span href="#" class="card-footer-item">
              <button 
              class="button"
              v-clipboard:copy="transliterated">
                Copy Transliteration
              </button>
            </span>
          </footer>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Convert back to Ancient South Arabian
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <b-field label="Transliteration">
                <b-input v-model="inputTransliteration"></b-input>
              </b-field>
              <p dir="rtl" class="coranica">{{ toOriginal }}</p>
              <hr>
              <button
                v-for="char in oldSouthArabianCharacterMap"
                :key="char.transliteration"
                @click="appendTransliteration(char.transliteration)"
                class="button">
                  {{ char.transliteration }}
              </button>
            </div>
          </div>
          <footer class="card-footer">
            <span class="card-footer-item">
              <button
              class="button"
              v-clipboard:copy="toOriginal">
                Copy Ancient South Arabian Result
              </button>
            </span>
          </footer>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {
  oldSouthArabianToTransliteration,
  transliterationToOldSouthArabian
} from '../../dist/transliterate';

import oldSouthArabianCharacterMap from '../../dist/OldSouthArabianCharacterMap';

export default {
  name: 'AncientSouthArabian',
  data() {
    return {
      inputOriginal: '𐩥𐩦𐩩𐩱𐩥𐩽𐩥𐩥𐩧𐩵𐩥',
      inputTransliteration: 'mqly sbʾ wšʾ',
      oldSouthArabianCharacterMap
    };
  },
  computed: {
    transliterated() {
      return oldSouthArabianToTransliteration(this.inputOriginal);
    },
    toOriginal() {
      return transliterationToOldSouthArabian(this.inputTransliteration);
    }
  },
  methods: {
    appendOriginal(input) {
      this.inputOriginal += input;
    },
    appendTransliteration(input) {
      this.inputTransliteration += input;
    },
  }
}
</script>