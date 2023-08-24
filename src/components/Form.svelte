<script>
	import { login } from "../api/login_user";

    const submitForm = async (e) => {
        const {username, password} = e.target
        
        const result = await login(username.value, password.value)
        console.log(result);
    }
    
</script>

<style>
    .card {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        width: fit-content;
        height: 15rem;
        border: 1px solid black;
        border-radius: 10%;
        
    }

    .column {
        display: flex;
        flex-direction: column;
    }
</style>

<div class="card">
    
    <form class="column" on:submit|preventDefault ={submitForm}>
        <input id="username" type="text" placeholder="Username"/>
        <input id="password" type="password" placeholder="Password"/>
        <button type="submit">
            Ingresar
        </button>
    </form>

</div>