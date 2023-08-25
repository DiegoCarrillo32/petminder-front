<script>
    import {  BlockTitle, Button, Card, List, ListButton, ListInput, Page, Toast } from 'konsta/svelte'
	import { login } from '../../api/login_user';

    let toastLeftOpened = false;
    let name = { value: '', changed: false };
    let password = { value: '', changed: false };
    // @ts-ignore
    const submitForm = async () => {
        if(name.changed === false || password.changed === false) {
            return
        }
        
        const result = await login(name.value, password.value)
        
        console.log(result);
        openToast(() => (toastLeftOpened = true))
    }
    // @ts-ignore
    const onNameChange = (e) => {
        console.log("onNameChange");
        name = { value: e.target.value, changed: true };
    };
    // @ts-ignore
    const onPasswordChange = (e) => {
        password = { value: e.target.value, changed: true };
    };

    // @ts-ignore
    const openToast = (setter) => {
    // close other toast
    toastLeftOpened = false;
    setter();
    };
</script>

<Page>
    <BlockTitle>Petminder Log In</BlockTitle>
    <List strongIos insetIos >
        <ListInput onInput={onNameChange}  value={name.value}  outline label="Name" type="text" placeholder="Your name">     </ListInput>
        <ListInput onInput={onPasswordChange}  value={password.value}  outline label="Password" type="password" placeholder="Your password">     </ListInput>
        <Button onClick={submitForm} >Ingresar</Button>
    </List>
    <Toast position="left" opened={toastLeftOpened}>      
        <Button slot="button" clear inline onClick={() => (toastLeftOpened = false)}>
                    Close      
        </Button>      
        <div class="shrink">Hello this is left toast!</div>    
    </Toast>
</Page>
