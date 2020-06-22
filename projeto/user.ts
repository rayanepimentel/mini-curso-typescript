//informações da conta

type AccountInfo = {
    id: number,
    name: string,
    email: string
}

const account: AccountInfo = {
    id: 123,
    name: 'Ray',
    email: 'email@teste.ray'//depois comente o email:'email...' e veja o erro
}

//mas eu quero que o email seja opcional como eu faço?
//coloca o ponto de interrogação no email lá no tipo

type AccountInfo2 = {
    id: number,
    name: string,
    email?: string
}

const account2: AccountInfo2 = {
    id: 123,
    name: 'Ray',
}


//infomação do personagem

type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo = {
    nickname: 'rapimentello',
    level: 100
}

//PlayerInfo é unir as informações da conta e o personagem

type PlayerInfo = AccountInfo2 & CharInfo

const player: PlayerInfo = {
    id: 12,
    name: 'rayh',
    nickname: 'ray',
    level: 150
}
//não precisa passar na mesma ordem, mas precisa ter todas as informações obrigatória que estão nos tipos

//também podemos usar o union ex:

type AccountInfo3 = {
    id: number | string,
    name: string,
    email?: string
}

const account3: AccountInfo3 = {
    id: '12k',//string
    name: 'radha'
}

type PlayerInfo2 = AccountInfo3 & CharInfo

const player2: PlayerInfo2 = {
    id: 123,
    name: 'ray',
    email: 'teste@',
    level: 100,
    nickname: 'rapimentello'
}