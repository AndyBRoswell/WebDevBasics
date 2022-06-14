const LoginButton = document.getElementById('login-button')
const LoginResult = document.getElementById('login-result')
const UsernameInput = document.getElementById('username')

LoginButton.onclick = () => {
    LoginResult.innerHTML = ''
    const Username = UsernameInput.value
    CheckUsername(Username)
    CheckSecureToken()
}

function CheckUsername(Username) {
    const UsernameRE = /^[0-9A-Za-z@_\-\.]+$/
    if (UsernameRE.test(Username) === false) {
        LoginResult.innerHTML += `用户名的长度必须是 1 至 32 位，且仅允许包含：阿拉伯数字、大小写英文字母、4个特殊字符@_-.`
    }
}

function CheckSecureToken(Token) {
    const SecTokenRE = /^[0-9A-Fa-f]+$/
}