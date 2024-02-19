<script lang="ts">
    import { onMount } from "svelte";

    let email = "tomasnahuelantela@gmail.com";
    let buttonStatus = false;
    let showTooltip = false;

    function copyToClipboard() {
        navigator.clipboard.writeText(email);
        showTooltip = true;
        setTimeout(() => {
            showTooltip = false;
        }, 2000);
    }
</script>

<section class="mb-20 mt-5 flex flex-col gap-5 w-full">
    <h1 class="text-center text-white text-4xl">Contacto</h1>
    <div class="flex flex-wrap w-full gap-5 justify-center items-center">
        <input
            disabled
            value={email}
            autocomplete="email"
            id="email"
            class="p-2 rounded-lg bg-slate-200 w-full md:w-1/2"
        />
        <div class="flex w-full md:w-auto justify-center items-center gap-5">
            <button
                on:click={copyToClipboard}
                class="button"
                title="Copiar al Portapapeles"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-copy"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                    />
                </svg>
            </button>
            <a
                href={`mailto:${email}`}
                target="_blank"
                class="button"
                title="Enviar Correo"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                    />
                </svg>
            </a>
        </div>
    </div>
    <div class="flex justify-around">
        {#if showTooltip}
            <div class="tooltip">Copiado!</div>
        {/if}
    </div>
</section>

<style>
    .button {
        outline: 1px solid white;
        outline-width: 1px;
        outline-color: white;
        border-radius: 0.5rem;
        color: white;
        padding: 0.5rem;
    }

    .button:hover {
        outline: 1px solid white;
        outline-width: 1px;
        outline-color: white;
        border-radius: 0.5rem;
        background-color: rgb(17, 24, 39);
        color: white;
        padding: 0.5rem;
    }

    .button:active {
        outline: 1px transparent white;
        outline-width: 1px;
        outline-color: white;
        border-radius: 0.5rem;
        color: black;
        padding: 0.5rem;
        background-color: white;
    }

    .tooltip {
        position: absolute;
        background-color: #333;
        color: white;
        padding: 10px;
        border-radius: 5px;
        animation: fadeOut 2s forwards;
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
