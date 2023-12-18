<script>
    import logo from "../../assets/logo.png";
</script>

<div class="row mt-5">
    <div class="col-md-3 col-12">
        <div class="d-flex justify-content-center align-items-center">
            <img src={logo} alt="" class="w-100" />
        </div>
    </div>
    <div class="col-md-9 col-12">
        <div
            class="d-flex flex-column presentation justify-content-start align-items-center"
        >
            <h1>Hello! I'm Tomhuel</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid pariatur aliquam hic saepe vel quidem minus ab placeat nesciunt natus culpa, doloribus aperiam nobis sint ducimus eius eos totam!</p>
        </div>
    </div>
</div>

<style>
    * {
        margin: 0;
    }
    img {
        border-radius: 100%;
        outline: 1px solid;
    }

    h1 {
        font-size: 3rem;
        margin: 0px;
    }

    p {
        font-size: 1.5rem;
        padding: 0px 1.5rem 0px 1.5rem;
        text-align: center;
    }

    .presentation {
        margin: 1rem;
        margin-left: 0;
        height: 100%;
        width: 100%;
    }

    @media (max-width: 575.98px) {
        img {
            width: 75%;
            border-radius: 50%;
            outline: 1px solid;
        }

        h1 {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 767.98px) {
        img {
            width: 100%;
            border-radius: 50%;
            outline: 1px solid;
        }
    }

    @media (max-width: 991.98px) {
    }

    @media (max-width: 1199.98px) {
    }

    @media (max-width: 1399.98px) {
    }
</style>
