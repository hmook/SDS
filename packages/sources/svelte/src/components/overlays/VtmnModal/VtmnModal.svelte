<script>
  import { cn } from '../../../utils/classnames';
  import VtmnButton from '../../actions/VtmnButton/VtmnButton.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  /**
   * @type {boolean} Display or hide the modal
   * Default false
   */
  export let open = false;

  let className = undefined;
  /**
   * @type {string} Custom classes to apply to the component.
   */
  export { className as class };

  $: componentClass = cn('vtmn-modal_content', className);

  const handleClose = () => {
    dispatch('close', { open });
  };
</script>

<svelte:head>
  {#if open}
    <style type="text/css">
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

{#if open}
  <div
    class="vtmn-modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby={$$restProps['aria-labelledby']}
    aria-describedby={$$restProps['aria-describedby']}
  >
    <div
      id="vtmn-modal-background"
      class="vtmn-modal_background-overlay"
      on:click={handleClose}
    />
    <div class={componentClass}>
      <div class="vtmn-modal_content_title">
        {#if $$slots.title}
          <span id="vtmn-modal-title" class="vtmn-modal_content_title--text"
            ><slot name="title" /></span
          >
        {/if}
        <VtmnButton
          aria-label="close"
          variant="ghost"
          iconAlone="close-line"
          on:click={handleClose}
        />
      </div>
      <div class="vtmn-modal_content_body">
        {#if $$slots.description}
          <p id="vtmn-modal-description" class="vtmn-modal_content_body--text">
            <slot name="description" />
          </p>
        {/if}
        {#if $$slots.actions}
          <div class="vtmn-modal_content_body--overflow-indicator" />
        {/if}
      </div>
      {#if $$slots.actions}
        <div class="vtmn-modal_content_actions">
          <slot name="actions" />
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  @import '@vtmn/css-modal';
</style>
