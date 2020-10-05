<script>
    import { searchbar } from "./../store/searchbar.js";
</script>

<style>
    * {
        box-sizing: border-box;
    }

    label {
        width: 100%;
        max-width: 200px;
    }
    input {
        width: 100%;
        display: flex;
        padding: 15px;
        background-color: white;
        border: 2px solid black;
        color: #111;
        font-size: 15px;
        box-shadow: 3px 1px 0px 2px, 0px -1px 0px 2px rgba(0, 0, 0, 0.62);
        height: 58px;
        transform: skew(-3deg, 1deg);
        font-style: italic;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-top: 4px;
    }
    input:focus,
    input:valid {
        outline: none;
    }
    input:focus ~ ul li:nth-child(1)::before,
    input:valid ~ ul li:nth-child(1)::before {
        filter: blur(20px);
        transform: translate(0, -35px) rotate(-210deg);
    }
    input:focus ~ ul li:nth-child(1)::after,
    input:valid ~ ul li:nth-child(1)::after {
        filter: blur(0);
        transform: scale(1) rotate(0);
    }
    input:focus ~ ul li:nth-child(2)::before,
    input:valid ~ ul li:nth-child(2)::before {
        filter: blur(20px);
        transform: translate(0, -35px) rotate(-210deg);
    }
    input:focus ~ ul li:nth-child(2)::after,
    input:valid ~ ul li:nth-child(2)::after {
        filter: blur(0);
        transform: scale(1) rotate(0);
    }
    input:focus ~ ul li:nth-child(3)::before,
    input:valid ~ ul li:nth-child(3)::before {
        filter: blur(20px);
        transform: translate(0, -35px) rotate(-210deg);
    }
    input:focus ~ ul li:nth-child(3)::after,
    input:valid ~ ul li:nth-child(3)::after {
        filter: blur(0);
        transform: scale(1) rotate(0);
    }
    input:focus ~ ul li:nth-child(4)::before,
    input:valid ~ ul li:nth-child(4)::before {
        filter: blur(20px);
        transform: translate(0, -35px) rotate(-210deg);
    }
    input:focus ~ ul li:nth-child(4)::after,
    input:valid ~ ul li:nth-child(4)::after {
        filter: blur(0);
        transform: scale(1) rotate(0);
    }
    input:focus ~ ul li:nth-child(5)::before,
    input:valid ~ ul li:nth-child(5)::before {
        filter: blur(20px);
        transform: translate(0, -35px) rotate(-210deg);
    }
    input:focus ~ ul li:nth-child(5)::after,
    input:valid ~ ul li:nth-child(5)::after {
        filter: blur(0);
        transform: scale(1) rotate(0);
    }
    input:focus ~ ul li:nth-child(6)::before,
    input:valid ~ ul li:nth-child(6)::before {
        filter: blur(20px);
        transform: translate(0, -35px) rotate(-210deg);
    }
    input:focus ~ ul li:nth-child(6)::after,
    input:valid ~ ul li:nth-child(6)::after {
        filter: blur(0);
        transform: scale(1) rotate(0);
    }
    input:focus ~ ul li:nth-child(1)::after,
    input:valid ~ ul li:nth-child(1)::after {
        transition-delay: 400ms;
    }
    input:focus ~ ul li:nth-child(2)::after,
    input:valid ~ ul li:nth-child(2)::after {
        transition-delay: 600ms;
    }
    input:focus ~ ul li:nth-child(3)::after,
    input:valid ~ ul li:nth-child(3)::after {
        transition-delay: 800ms;
    }
    input:focus ~ ul li:nth-child(4)::after,
    input:valid ~ ul li:nth-child(4)::after {
        transition-delay: 1000ms;
    }
    input:focus ~ ul li:nth-child(5)::after,
    input:valid ~ ul li:nth-child(5)::after {
        transition-delay: 1200ms;
    }
    input:focus ~ ul li:nth-child(6)::after,
    input:valid ~ ul li:nth-child(6)::after {
        transition-delay: 1400ms;
    }
    label {
        position: relative;
    }
    ul {
        position: absolute;
        top: 38px;
        left: -4px;
        margin: 0;
        list-style: none;
        padding-left: 22px;
        position: absolute;
        display: flex;
        pointer-events: none;
        transition: 200ms;
    }
    ul li {
        letter-spacing: 3px;
        text-transform: uppercase;
        color: transparent;
        pointer-events: none;
        transition: 500ms ease-in-out;
    }
    ul li ::selection {
        color: transparent;
    }
    ul li::after,
    ul li::before {
        color: black;
        position: absolute;
        transition: 500ms ease-in-out;
    }
    ul li::before {
        top: -20px;
    }
    ul li::after {
        top: -63px;
        transform: scale(0) rotate(210deg);
        filter: blur(20px);
    }
    ul li[b]::before {
        content: attr(b) "b";
        transition-delay: 200ms;
    }

    ul li[u]::before {
        content: attr(u) "u";
        transition-delay: 400ms;
    }

    ul li[s]::before {
        content: attr(s) "s";
        transition-delay: 600ms;
    }

    ul li[c]::before {
        content: attr(r) "c";
        transition-delay: 800ms;
    }

    ul li[a]::before {
        content: attr(c) "a";
        transition-delay: 1000ms;
    }

    ul li[r]::before {
        content: attr(h) "r";
        transition-delay: 1200ms;
    }
</style>

<label>
    <input type="text" required bind:value={$searchbar} />
    <ul>
        <li b class="i fw7 ">b</li>
        <li u class="i fw7 ">u</li>
        <li s class="i fw7 ">s</li>
        <li c class="i fw7 ">c</li>
        <li a class="i fw7 ">a</li>
        <li r class="i fw7 ">r</li>
    </ul>
</label>

