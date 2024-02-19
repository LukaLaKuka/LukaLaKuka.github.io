<script>
    import Modal from "./Modal.svelte";
    import Link from "../../Link.astro";
    import { githubSvg } from "../../../assets";
    import { linkSvg } from "../../../assets";

    export let title;
    export let description;
    export let image;
    export let githubUrl;
    export let liveUrl;

    let isModalOpen = false;

    function toggleModal() {
        isModalOpen = !isModalOpen;
    }
</script>

<button on:click={toggleModal}>
    <slot />
</button>

<Modal isOpen={isModalOpen}>
    <div class="grid gap-5 grid-cols-5 p-4">
        {#if image}
            <div class="col-span-5 md:col-span-2">
                <img
                    src={image.src === undefined ? image : image.src}
                    class="rounded-lg w-full"
                    alt={`${title}'s image`}
                />
            </div>
        {/if}
        <div
            class="col-span-5 md:col-span-3 min-h-full flex flex-col items-center md:items-start gap-5"
        >
            <h2 class="text-white text-xl font-bold">{title}</h2>
            <p class="text-white text-lg text-center md:text-start">
                {description}
            </p>
            <div
                class="row-span-1 flex flex-wrap items-center justify-center gap-3"
            >
                <slot name="techs" />
            </div>
            <div class="row-span-1 flex flex-wrap gap-2">
                {#if githubUrl}
                    <a
                        class="p-2 px-3 rounded-xl flex justify-content-center align-items-center gap-2 bg-slate-900 expand"
                        href={githubUrl}
                        target="_blank"
                    >
                        <img
                            src={githubSvg.src}
                            alt="Github Logo"
                            class="w-6"
                        />
                        <span class="text-white">Github</span>
                    </a>
                {/if}
                {#if liveUrl}
                    <a
                        class="p-2 px-3 rounded-xl flex justify-content-center align-items-center gap-2 bg-slate-200 expand"
                        href={liveUrl}
                        target="_blank"
                    >
                        <img src={linkSvg.src} alt="Link Icon" class="w-6" />
                        <span class="">Live</span>
                    </a>
                {/if}
            </div>
        </div>
    </div>
</Modal>

<style>
    .expand {
        transition: transform 0.3s ease-out;
    }

    .expand:hover {
        transform: scale(105%);
    }
</style>
