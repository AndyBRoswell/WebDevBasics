const LoginButton = document.getElementById('login-button')
const LoginResult = document.getElementById('login-result')
const UsernameInput = document.getElementById('username')
const SecTokenSegInputs = document.getElementsByClassName('sec-token-seg-input')

UsernameInput.oninput = (e) => {
    LoginResult.innerHTML = ''
    CheckUsername(e.target.value)
}

for (let SecTokenSegInput in SecTokenSegInputs) {
    SecTokenSegInput.oninput = (e) => {
        LoginResult.innerHTML = ''
        CheckSecureTokenChar(e.target.value)
    }
}

LoginButton.onclick = () => {
    LoginResult.innerHTML = ''
    const Username = UsernameInput.value
    if (CheckUsername(Username) === false) return false
    let SecureToken = ''
    for (let SecTokenSegInput in SecTokenSegInputs) {
        SecureToken += SecTokenSegInput.value
    }
    if (SecureToken.length !== 16 && SecureToken.length !== 32) {
        LoginResult.innerHTML += '安全令牌的长度为16（一代令牌）或32（二代令牌）\n'
        return false
    }
    if (CheckSecureTokenChar(SecureToken) === false) return false
    return true
}

// ================================================================

function CheckUsername(Username) {
    const UsernameRE = /^[\dA-Za-z@_\-\.]+$/
    if (UsernameRE.test(Username) === false) {
        LoginResult.innerHTML += '用户名的长度必须是 1 至 32 位，且仅允许包含：阿拉伯数字、大小写英文字母、4个特殊字符@_-.\n'
        return false
    }
    return true
}

function CheckSecureTokenChar(SecToken) {
    const SecTokenRE = /^[\dA-Fa-f]+$/
    if (SecTokenRE.test(SecToken) === false) {
        LoginResult.innerHTML += '安全令牌只能包含十六进制字符\n'
        return false
    }
    return true
}