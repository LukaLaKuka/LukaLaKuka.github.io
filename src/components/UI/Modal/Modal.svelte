<script>
    import { onMount } from "svelte";
    import { closeSvg } from "../../../assets";

    export let isOpen = false;

    function closeModal() {
        isOpen = false;
    }

    function openModal() {
        isOpen = true;
    }

    // Cerrar el modal cuando se presiona la tecla ESC
    onMount(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    });
</script>

{#if isOpen}
    <div
        class="modal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
        <div
            class="modal-content md:p-5 p-1 bg-gray-950 border border-color-third-3 rounded-lg max-w-lg max-h-full overflow-auto"
        >
            <div class="row-span-1 flex justify-end items-center p-2">
                <button
                    on:click={closeModal}
                    class="text-white text-center font-bold pl-4"
                >
                    <img src={closeSvg.src} alt="Close" width="20px" />
                </button>
            </div>
            <div class="row-span-1">
                <slot />
            </div>
        </div>
    </div>
{/if}

<style>
    /* Estilos del modal */
    .modal {
        @media (min-width: 768px) {
            top: 0;
            left: 0;
        }
        position: fixed;
        top: 0;
        left: 30;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .modal-content {
        @media (min-width: 768px) {
            min-width: 80%;
            max-width: 80%;
        }
        padding-top: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        min-width: 90%;
        max-width: 90%;
        max-height: 80%;
        overflow-y: auto;
    }
</style>
