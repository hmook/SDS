<script lang="ts">
import '@vtmn/css-modal/dist/index-with-vars.css';
import { computed, defineComponent, PropType, reactive } from 'vue';
import { VtmnButton } from '../../index';

export default /*#__PURE__*/ defineComponent({
  name: 'VtmnModal',
  components: { VtmnButton },
  inheritAttrs: false,
  props: {
    open: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    props = reactive(props);

    const handleClose = () => {
      return emit('close');
    };

    return {
      classes: computed(() => ({
        'vtmn-modal': true,
      })),
      handleClose,
    };
  },
});
</script>

<template>
  <div v-if="open" :class="classes" role="dialog" aria-modal="true">
    <div class="vtmn-modal_background-overlay" @click.prevent="handleClose" />
    <div class="vtmn-modal_content" v-bind="$attrs">
      <div class="vtmn-modal_content_title">
        <span v-if="$slots.title" class="vtmn-modal_content_title--text">
          <slot name="title" />
        </span>
        <VtmnButton
          aria-label="close"
          variant="ghost"
          size="medium"
          iconAlone="close-line"
          @click.prevent="handleClose"
        />
      </div>

      <div v-if="$slots.description" class="vtmn-modal_content_body">
        <slot name="description" />
      </div>

      <div v-if="$slots.actions" class="vtmn-modal_content_actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
