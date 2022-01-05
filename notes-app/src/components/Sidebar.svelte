<script>
    import {userNotes} from '../../scripts/firebase'
    console.log($userNotes)
</script>

<nav>
    <p>Japanese</p>
    <p>Programming</p>
    <p>Music</p>
</nav>

<style>
    nav {
        border: 1px solid #333;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
</style>